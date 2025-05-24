// components/ProjectCard.tsx

"use client"; // This is a Client Component

import React, { useState, Dispatch, SetStateAction, KeyboardEvent } from "react";
import {
  Carousel,
  Column,
  Flex,
  Heading,
  Text,
} from "@/once-ui/components"; // Adjust path if necessary

// Import the MediaDialog component
import { ChevronLeft, ChevronRight } from "lucide-react"; // Common with shadcn/ui setups
import { MediaDialog } from "./animatedgallery"; // <--- Ensure this path is correct

// --- Interfaces ---
interface GalleryMediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
}

interface ProjectImage {
  src: string;
  title: string;
  description: string;
  content: string;
  galleryMedia?: GalleryMediaItem[]; // Added for multiple images/videos
}

interface ProjectCardProps {
  href: string;
  images: ProjectImage[];
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images,
  avatars,
  link
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isMediaDialogOpen, setIsMediaDialogOpen] = useState(false);
  const [initialMediaIndex, setInitialMediaIndex] = useState(0); // To know which media to show first in dialog

  const activeImage = images?.[activeImageIndex];
  const totalImages = images?.length ?? 0;

  if (!activeImage) {
    return (
      <Column fillWidth gap="l" padding="l" className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md transition-all">
        <Text>No image data available.</Text>
      </Column>
    );
  }

  const goToPrevImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to open the dialog with the correct initial media
  const openMediaDialog = (mediaItemIndex: number = 0) => {
    setInitialMediaIndex(mediaItemIndex);
    setIsMediaDialogOpen(true);
  };

  const closeMediaDialog = () => {
    setIsMediaDialogOpen(false);
  };

  // Generic keydown handler for div-acting-as-button
  const handleDivKeyDown = (event: KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent default scroll for spacebar
      action();
    }
  };

  return (
    <Column fillWidth gap="l" padding="l" className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md transition-all">
      {/* Container for Carousel and pagination buttons */}
      <div className="relative w-full rounded-xl overflow-hidden min-h-[200px] md:min-h-[300px]">
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          images={images.map((image, index) => ({
            src: image.src,
            alt: image.title,
            key: index,
          }))}
          activeImageIndex={activeImageIndex}
          onIndexChange={setActiveImageIndex as Dispatch<SetStateAction<number>>}
          className="w-full h-full"
        />

        {/* Navigation Bar at the Bottom - Corrected Styling */}
        <div className="display-flex flex-row justify-center align-center bottom-0 left-0 right-0 z-20 flex items-center justify-between h-10 px-4 bg-black/70 rounded-b-xl">
          {/* Removed 'display-flex flex-row' as 'flex' already handles it */}
          {/* Changed 'h-14' to 'h-10' for 40px height as per example bar */}
          {/* 'bg-black/70' is correctly set for the background */}

          {/* Left Pagination Div (acting as a button) */}
          {totalImages > 1 && (
            <div
              onClick={goToPrevImage}
              onKeyDown={(e) => handleDivKeyDown(e, goToPrevImage)}
              role="button"
              tabIndex={0}
              className="flex items-center justify-center w-10 h-10 bg-transparent hover:bg-black/75 text-white p-2 rounded-full transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:translate-y-[-3px]"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" /> {/* Using Lucide icon */}
            </div>
          )}
          {/* Spacer logic remains the same */}
          {totalImages <= 1 && activeImage.galleryMedia && activeImage.galleryMedia.length > 0 && <div className="flex-1"></div>}


          {/* View Gallery Div (acting as a button) */}
          {activeImage.galleryMedia && activeImage.galleryMedia.length > 0 && (
            <div
              onClick={() => openMediaDialog(0)}
              onKeyDown={(e) => handleDivKeyDown(e, () => openMediaDialog(0))}
              role="button"
              tabIndex={0}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-full shadow-lg transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:translate-y-[-3px]"
              aria-label={`View Gallery with ${activeImage.galleryMedia.length} items`}
            >
              View Gallery ({activeImage.galleryMedia.length})
            </div>
          )}

          {/* Spacer logic remains the same */}
          {totalImages <= 1 && activeImage.galleryMedia && activeImage.galleryMedia.length > 0 && <div className="flex-1"></div>}

          {/* Right Pagination Div (acting as a button) */}
          {totalImages > 1 && (
            <div
              onClick={goToNextImage}
              onKeyDown={(e) => handleDivKeyDown(e, goToNextImage)}
              role="button"
              tabIndex={0}
              className="flex items-center justify-center w-10 h-10 bg-transparent hover:bg-black/75 text-white p-2 rounded-full transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:translate-y-[-3px]"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" /> {/* Using Lucide icon */}
            </div>
          )}
        </div>
        {/* End Navigation Bar */}

      </div>

      {/* Dynamically display title, description, and content based on activeImage */}
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        <Flex flex={5}>
          <Heading as="h2" wrap="balance" variant="heading-strong-xl">
            {activeImage.title}
          </Heading>
        </Flex>

        <Column flex={7} gap="16">
          <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
            {activeImage.description}
          </Text>

          <Flex gap="24" wrap>
            <Text variant="body-default-s">{activeImage.content}</Text>
          </Flex>
        </Column>
      </Flex>

      {/* Media Dialog Component */}
      {isMediaDialogOpen && activeImage.galleryMedia && (
        <MediaDialog
          isOpen={isMediaDialogOpen}
          onClose={closeMediaDialog}
          media={activeImage.galleryMedia}
          initialIndex={initialMediaIndex}
          title={activeImage.title}
        />
      )}
    </Column>
  );
};