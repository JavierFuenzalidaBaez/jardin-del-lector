import { Box, Heading, Image, Spacer } from '@chakra-ui/react';

const CardBook = ({ title, url }) => {
  return (
    <Box
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
      <Heading size="xl" fontWeight="bold">
        {title}
      </Heading>
    </Box>
  );
};
export default CardBook;
