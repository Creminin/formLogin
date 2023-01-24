import { Text, Link, Box } from "@chakra-ui/react";

export function Menu() {
  return (
    <Box display={{ base: "block", md: "none" }}>
      <Text
        color="white"
        cursor="pointer"
        _hover={{ color: "gray.500" }}
        fontWeight="bold"
      >
        Home
      </Text>
      <Text
        color="white"
        cursor="pointer"
        _hover={{ color: "gray.500" }}
        fontWeight="bold"
      >
        About
      </Text>
      <Text
        color="white"
        cursor="pointer"
        _hover={{ color: "gray.500" }}
        fontWeight="bold"
      >
        Services
      </Text>
      <Text
        color="white"
        cursor="pointer"
        _hover={{ color: "gray.500" }}
        fontWeight="bold"
      >
        Contact
      </Text>

      <Link
        py="10px"
        px="20px"
        border="2px solid white"
        borderRadius="5px"
        color="white"
        fontWeight="bold"
        _hover={{ bg: "white", boxShadow: "inner", color: "gray.500" }}
      >
        Login
      </Link>
    </Box>
  );
}
