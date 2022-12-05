import { Flex, Heading } from '@chakra-ui/react';

const Title = ({ title }) => {
  return (
    <Flex alignItems="center" gap={8}>
      <Heading>{title}</Heading>
      <Flex h="3px" flex={1} bg={'white'} />
    </Flex>
  );
};
export default Title;
