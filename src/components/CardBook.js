import { Box, Text, Image, Spacer } from '@chakra-ui/react';

const CardBook = ({ title, url }) => {
  return (
    <Box
      maxW={{
        base: 300,
        lg: 300,
      }}
      p={5}
      bg="bluishBlack.500"
      borderRadius={20}
      as="article"
      textAlign="center"
    >
      <Image
        h="350px"
        objectFit="fill"
        w="100%"
        borderRadius={8}
        src={url}
        alt="portada libro"
      />
      <Spacer py={2} />
      <Text size="sm" fontWeight="bold" noOfLines={1}>
        {title}
      </Text>
    </Box>
  );
};
export default CardBook;
