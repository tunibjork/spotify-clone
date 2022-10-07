import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";

interface GradientLayoutProps {
  color: string;
  image: string;
  roundImage: boolean;
  subtitle: string;
  title: string;
  details: string;
  children: React.ReactNode;
}

export default function GradientLayout({
  color,
  image,
  roundImage,
  subtitle,
  title,
  details,
}: GradientLayoutProps) {
  return (
    <Box
      height="calc(100vh - 100px)"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, black 75%)`}
    >
      <Flex bg={`${color}.500`} opacity="0.8" padding="40px" align="end">
        <Box padding="20px">
          <Image
            boxSize="160px"
            boxShadow="2xl"
            src={image}
            border="1px"
            borderColor="white"
            borderRadius={roundImage ? "100%" : "6px"}
          />
        </Box>
        <Box padding="20px" lineHeight="40px" color="black">
          <Text fontSize="sm" fontWeight="bold" casing="uppercase">
            {subtitle}
          </Text>
          <Text fontSize="6xl" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="x-small" fontWeight="normal">
            {details}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
