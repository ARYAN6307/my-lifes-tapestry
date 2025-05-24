"use client"; // This is a Client Component

import React, { useState, Dispatch, SetStateAction } from "react";
import {
  Carousel,
  Column,
  Flex,
  Heading,
  Text,
} from "@/once-ui/components";


interface ProjectImage {
  src: string;
  title: string;
  description: string;
  content: string;
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

  return (
    <Column fillWidth gap="l" padding="l" className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md transition-all">
      {/* Container for Carousel and pagination buttons */}
      {/* IMPORTANT: Added `min-h-[200px] md:min-h-[300px]` to give the container a consistent height */}
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
          // Added `w-full h-full` to ensure Carousel attempts to fill its parent
          className="w-full h-full"
        />

        
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
    </Column>
  );
};