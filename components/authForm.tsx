import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";

interface AuthFormProps {
  mode: string;
}

export default function AuthForm({ mode }: { mode: AuthFormProps }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <Box width="100vw" height="100vh" bg="black" color="white">
      <Flex justify="center" align="center" height="100px">
        Hello
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh-100px)">
        Form
      </Flex>
    </Box>
  );
}
