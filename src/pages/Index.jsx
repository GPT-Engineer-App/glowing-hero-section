import { Container, Box, VStack, Text, Button, HStack, Image } from "@chakra-ui/react";
import { FaEnvelope, FaBriefcase } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" height="100vh" display="flex" alignItems="center" justifyContent="center" bgGradient="linear(to-r, blue.500, blue.300)">
      <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" justifyContent="space-between" width="100%" p={8}>
        <VStack align="start" spacing={4} maxW="lg">
          <Text fontSize="4xl" fontWeight="bold" color="white">
            Welcome to my portfolio website
          </Text>
          <Text fontSize="10px" fontFamily="Open Sans" color="white" lineHeight="shorter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <HStack spacing={4}>
            <Button leftIcon={<FaBriefcase />} bg="orange.400" color="white" borderRadius="50px" _hover={{ bg: "orange.500" }}>
              Hire me
            </Button>
            <Button leftIcon={<FaEnvelope />} bg="orange.400" color="white" borderRadius="50px" _hover={{ bg: "orange.500" }}>
              Contact me
            </Button>
          </HStack>
        </VStack>
        <Box boxSize={{ base: "80%", md: "50%" }} mt={{ base: 8, md: 0 }}>
          <Image src="https://images.unsplash.com/photo-1472747624745-ce92d32d3c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjB3aXRoJTIwc2hvcnQlMkMlMjBuZWF0bHklMjBzdHlsZWQlMjBoYWlyJTJDJTIwbG9va2luZyUyMGRpcmVjdGx5JTIwYXQlMjB0aGUlMjBjYW1lcmElMjB3aXRoJTIwYSUyMG5ldXRyYWwlMjBleHByZXNzaW9ufGVufDB8fHx8MTcxNjcyNjMwMnww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxShadow="lg" />
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
