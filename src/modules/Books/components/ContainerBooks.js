import { Grid, GridItem } from '@chakra-ui/react';

//data
import books from 'resources/books.json';

//components
import CardBook from 'components/CardBook';

const ContainerBooks = () => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, minmax(0, 1fr))',
        sm: 'repeat(1, minmax(0, 1fr))',
        md: 'repeat(2, minmax(0, 1fr))',
        lg: 'repeat(3, minmax(0, 1fr))',
        xl: 'repeat(4, minmax(0, 1fr))',
      }}
      gap={4}
      justifyItems="center"
    >
      {books.map(book => (
        <GridItem>
          <CardBook key={book.url} title={book.title} url={book.url} />
        </GridItem>
      ))}
    </Grid>
  );
};
export default ContainerBooks;
