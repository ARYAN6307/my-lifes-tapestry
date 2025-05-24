"use client";

import { Flex, RevealFx, Scroller, SmartImage } from ".";
import { useEffect, useState, useRef, Dispatch, SetStateAction } from "react";

interface Image {
  src: string;
  alt: string;
}

interface CarouselProps extends React.ComponentProps<typeof Flex> {
  images: Image[];
  indicator?: "line" | "thumbnail";
  aspectRatio?: string;
  sizes?: string;
  revealedByDefault?: boolean;
  activeImageIndex?: number;
  onIndexChange?: Dispatch<SetStateAction<number>>;
}

const Carousel: React.FC<CarouselProps> = ({
  images = [],
  indicator = "line",
  aspectRatio = "16 / 9",
  sizes,
  revealedByDefault = false,
  activeImageIndex: propActiveImageIndex,
  onIndexChange,
  ...rest
}) => {
  const [internalActiveIndex, setInternalActiveIndex] = useState<number>(propActiveImageIndex ?? 0);
  const effectiveActiveIndex = propActiveImageIndex !== undefined ? propActiveImageIndex : internalActiveIndex;

  const [isTransitioning, setIsTransitioning] = useState(revealedByDefault);
  const [initialTransition, setInitialTransition] = useState(revealedByDefault);
  const nextImageRef = useRef<HTMLImageElement | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const preloadNextImage = (nextIndex: number) => {
    if (nextIndex >= 0 && nextIndex < images.length) {
      nextImageRef.current = new Image();
      nextImageRef.current.src = images[nextIndex].src;
    }
  };

  const updateActiveIndex = (newIndex: number) => {
    if (onIndexChange) {
      onIndexChange(newIndex);
    } else {
      setInternalActiveIndex(newIndex);
    }
  };

  const handleImageClick = () => {
    if (images.length > 1) {
      const nextIndex = (effectiveActiveIndex + 1) % images.length;
      handleControlClick(nextIndex);
    }
  };

  const handleControlClick = (nextIndex: number) => {
    if (nextIndex !== effectiveActiveIndex && !transitionTimeoutRef.current) {
      preloadNextImage(nextIndex);

      setIsTransitioning(false);

      transitionTimeoutRef.current = setTimeout(() => {
        updateActiveIndex(nextIndex);

        setTimeout(() => {
          setIsTransitioning(true);
          transitionTimeoutRef.current = undefined;
        }, 300);
      }, 800);
    }
  };

  const goToPrevImage = () => {
    const newIndex = (effectiveActiveIndex === 0) ? images.length - 1 : effectiveActiveIndex - 1;
    updateActiveIndex(newIndex);
  };

  const goToNextImage = () => {
    const newIndex = (effectiveActiveIndex === images.length - 1) ? 0 : effectiveActiveIndex + 1;
    updateActiveIndex(newIndex);
  };

  useEffect(() => {
    if (!revealedByDefault && !initialTransition) {
      setIsTransitioning(true);
      setInitialTransition(true);
    }
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [revealedByDefault, initialTransition]);

  useEffect(() => {
    // Only update internal state if propActiveImageIndex changes and we are in controlled mode
    // or if internal state needs to catch up in uncontrolled mode after a prop change.
    if (propActiveImageIndex !== undefined && propActiveImageIndex !== internalActiveIndex) {
      setInternalActiveIndex(propActiveImageIndex);
    }
  }, [propActiveImageIndex, internalActiveIndex]);


  if (images.length === 0) {
    return null;
  }

  return (
    <Flex fillWidth gap="12" direction="column" {...rest}>
      {/*
        CRITICAL CHANGE: Ensure the relative container explicitly sets its aspect-ratio.
        Also, ensure `h-full` and `w-full` are consistently applied to children
        that should fill this space.
      */}
      <div
        className="relative w-full overflow-hidden rounded-xl" // Added overflow-hidden and rounded-xl for consistency
        style={{ aspectRatio: aspectRatio }} // Explicitly setting aspect ratio on the parent div
      >
        <RevealFx
          onClick={handleImageClick}
          fillWidth
          trigger={isTransitioning}
          translateY="16"
          aspectRatio={aspectRatio} // Keep aspectRatio on RevealFx
          speed="fast"
          className="w-full h-full absolute inset-0" // Ensure RevealFx covers the parent completely
        >
          <SmartImage
            sizes={sizes}
            priority
            radius="l"
            border="neutral-alpha-weak"
            alt={images[effectiveActiveIndex]?.alt}
            aspectRatio={aspectRatio} // Keep aspectRatio on SmartImage
            src={images[effectiveActiveIndex]?.src}
            style={{
              ...(images.length > 1 && {
                cursor: "pointer",
              }),
            }}
            className="w-full h-full object-cover" // Ensure SmartImage fills and covers its direct parent
          />
        </RevealFx>

        {/* Pagination Buttons: These are now correctly positioned absolutely relative to the image container */}
        {images.length > 1 && (
          <>
            {/* Left Pagination Button (Prev) */}
            <button
              onClick={goToPrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 button"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Prev</span>
            </button>

            {/* Right Pagination Button (Next) */}
            <button
              onClick={goToNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 button"
              aria-label="Next image"
            >
              <span>Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Existing Carousel Indicators */}
      {images.length > 1 && (
        <>
          {indicator === "line" ? (
            <Flex gap="4" paddingX="s" fillWidth horizontal="center">
              {images.map((_, index) => (
                <Flex
                  key={index}
                  onClick={() => handleControlClick(index)}
                  style={{
                    background:
                      effectiveActiveIndex === index
                        ? "var(--neutral-on-background-strong)"
                        : "var(--neutral-alpha-medium)",
                    transition: "background 0.3s ease",
                  }}
                  cursor="interactive"
                  fillWidth
                  radius="full"
                  height="2"
                ></Flex>
              ))}
            </Flex>
          ) : (
            <Scroller fillWidth gap="4" onItemClick={handleControlClick}>
              {images.map((image, index) => (
                <Flex
                  key={index}
                  style={{
                    border: effectiveActiveIndex === index ? "2px solid var(--brand-solid-strong)" : "none",
                    borderRadius: "var(--radius-m-nest-4)",
                    transition: "border 0.3s ease",
                  }}
                  cursor="interactive"
                  padding="4"
                  width="80"
                  height="80"
                >
                  <SmartImage
                    alt={image.alt}
                    aspectRatio="1 / 1"
                    sizes="120px"
                    src={image.src}
                    cursor="interactive"
                    radius="m"
                    transition="macro-medium"
                  />
                </Flex>
              ))}
            </Scroller>
          )}
        </>
      )}
    </Flex>
  );
};

Carousel.displayName = "Carousel";
export { Carousel };