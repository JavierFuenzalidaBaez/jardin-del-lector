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
      {books
        ?.filter((item, index) => index <= 2)
        .map(book => (
          <CardBook key={book.url} title={book.title} url={book.url} />
        ))}
    </Flex>
  );
};
export default NewsContainer;
