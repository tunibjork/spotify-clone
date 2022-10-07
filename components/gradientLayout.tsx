import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";

interface GradientLayoutProps {
  color: string;
  image: string;
  roundImage: boolean;
  children: React.ReactNode;
}

export default function GradientLayout({
  color,
  image,
  roundImage,
}: GradientLayoutProps) {
  return (
    <Box
      height="calc(100vh - 100px)"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, black 75%)`}
    >
      <Flex bg={`${color}.500`} opacity="0.8" padding="50px" align="end">
        <Image
          boxSize="160px"
          boxShadow="2xl"
          src={image}
          borderRadius={roundImage ? "100%" : ""}
        />
      </Flex>
    </Box>
  );
}
