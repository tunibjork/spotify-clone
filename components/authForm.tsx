import { Box, Flex, Input, Button, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSWRConfig } from "swr";
import NextImage from "next/image";
import { auth } from "../lib/mutations";

export default function AuthForm({ mode }: { mode: "signup" | "signin" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setIsLoading(true);
    const user = await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  }

  return (
    <Box width="100vw" height="100vh" bg="black" color="white">
      {/* <Flex justify="center" align="center" height="100px">
        Hello {mode}
      </Flex> */}
      <Flex justify="center" align="center" height="100vh">
        <Box padding={12} bg="gray.900" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <Box paddingBottom={8}>
                <NextImage src="/spotify_logo.svg" height={60} width={150} />
              </Box>
              <Input
                placeholder="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                size="lg"
              />
              <Input
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                size="lg"
              />
              <Button
                type="submit"
                size="lg"
                bg="green.600"
                isLoading={isLoading}
                _hover={{ bg: "green.400" }}
              >
                {mode === "signin" && "Sign In"}
                {mode === "signup" && "Sign Up"}
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
