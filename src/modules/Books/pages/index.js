import { useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

//components
import Title from 'components/Title';
import ContainerBox from 'components/ContainerBox';
import ContainerBooks from '../components/ContainerBooks';
import ContainerSearch from '../components/ContainerSearch';

const Books = () => {
  useEffect(() => {
    document.title = 'Inicio';
  }, []);

  return (
    <ContainerBox size="xl">
      <Grid templateColumns={'repeat(1, minmax(0, 1fr))'} gap={2}>
        <GridItem>
          <Title title="LIBROS" />
        </GridItem>
        <GridItem>
          <ContainerSearch />
        </GridItem>
        <GridItem>
          <ContainerBooks />
        </GridItem>
      </Grid>
    </ContainerBox>
  );
};
export default Books;
