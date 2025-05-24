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

  const activeImage = images[activeImageIndex];

  if (!activeImage) {
    return (
      <Column fillWidth gap="l" padding="l" className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md transition-all">
        <Text>No image data available.</Text>
      </Column>
    );
  }

  return (
    <Column fillWidth gap="l" padding="l" className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md transition-all">
      {/* Carousel component to display images */}
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image, index) => ({
          src: image.src,
          alt: image.title,
          key: index,
        }))}
        activeImageIndex={activeImageIndex} // Pass the controlled index
        onIndexChange={setActiveImageIndex as Dispatch<SetStateAction<number>>} // Pass the setter function
      />

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