import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      maxW="sm"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
    >
      
      <Image src={imageSrc} alt={title} objectFit="cover" w="100%"
        onError={(e) => 
          console.log(`Error loading image for ${title}:`, e)
        } />

      
      <VStack p={4} align="start" spacing={3} w="100%">
        <Heading size="md" color="gray.800">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
        
        <HStack color="blue.500" fontWeight="bold" cursor="pointer">
          <Text>Read More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
};

export default Card;
