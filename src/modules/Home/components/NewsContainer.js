import { Flex } from '@chakra-ui/react';

//components
import CardBook from 'components/CardBook';

//data
import books from 'resources/books.json';

const NewsContainer = () => {
  return (
    <Flex
      direction={{
        base: 'column',
        md: 'column',
        lg: 'row',
      }}
      justifyContent="center"
      alignItems="center"
      gap={8}
    >
      {books?.map(item => (
        <CardBook key={item.url} title={item.title} url={item.url} />
      ))}
    </Flex>
  );
};
export default NewsContainer;
