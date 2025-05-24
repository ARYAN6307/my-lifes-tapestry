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
  // Added props to make the Carousel a controlled component
  activeImageIndex?: number; // Optional: If provided, the parent controls the active index
  onIndexChange?: Dispatch<SetStateAction<number>>; // Optional: Callback to notify parent of index changes
}

const Carousel: React.FC<CarouselProps> = ({
  images = [],
  indicator = "line",
  aspectRatio = "16 / 9",
  sizes,
  revealedByDefault = false,
  activeImageIndex: propActiveImageIndex, // Destructure with a different name
  onIndexChange, // Destructure the callback
  ...rest
}) => {
  // Use internal state if propActiveImageIndex is not provided (uncontrolled mode)
  // Otherwise, use propActiveImageIndex as the source of truth (controlled mode)
  const [internalActiveIndex, setInternalActiveIndex] = useState<number>(propActiveImageIndex ?? 0);

  // Determine the effective active index: controlled by prop if available, otherwise internal state
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
      // If onIndexChange is provided, let the parent control the state
      onIndexChange(newIndex);
    } else {
      // Otherwise, update internal state (uncontrolled mode)
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
        updateActiveIndex(nextIndex); // Use the unified update function

        setTimeout(() => {
          setIsTransitioning(true);
          transitionTimeoutRef.current = undefined;
        }, 300);
      }, 800);
    }
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

  // If the propActiveImageIndex changes, update the internal state
  // This is important if the Carousel is used in a mixed controlled/uncontrolled way,
  // or if the parent initially passes a different index.
  useEffect(() => {
    if (propActiveImageIndex !== undefined && propActiveImageIndex !== internalActiveIndex) {
      setInternalActiveIndex(propActiveImageIndex);
    }
  }, [propActiveImageIndex, internalActiveIndex]);


  if (images.length === 0) {
    return null;
  }

  return (
    <Flex fillWidth gap="12" direction="column" {...rest}>
      <RevealFx
        onClick={handleImageClick}
        fillWidth
        trigger={isTransitioning}
        translateY="16"
        aspectRatio={aspectRatio}
        speed="fast"
      >
        <SmartImage
          sizes={sizes}
          priority
          radius="l"
          border="neutral-alpha-weak"
          alt={images[effectiveActiveIndex]?.alt} // Use effectiveActiveIndex
          aspectRatio={aspectRatio}
          src={images[effectiveActiveIndex]?.src} // Use effectiveActiveIndex
          style={{
            ...(images.length > 1 && {
              cursor: "pointer",
            }),
          }}
        />
      </RevealFx>
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
                      effectiveActiveIndex === index // Use effectiveActiveIndex
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
                    border: effectiveActiveIndex === index ? "2px solid var(--brand-solid-strong)" : "none", // Use effectiveActiveIndex
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