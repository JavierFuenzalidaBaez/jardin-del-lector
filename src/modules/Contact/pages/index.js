import { useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

//components
import Title from 'components/Title';
import ContainerBox from 'components/ContainerBox';
import Banner from '../components/Banner';
import ContactInfo from '../components/ContactInfo';

const Books = () => {
  useEffect(() => {
    document.title = 'Contacto';
  }, []);

  return (
    <Grid templateColumns={'repeat(1, minmax(0, 1fr))'} gap={2}>
      <GridItem>
        <Banner />
      </GridItem>
      <GridItem>
        <ContainerBox size="xl">
          <Title title="CONTACTANOS" />
        </ContainerBox>
      </GridItem>
      <GridItem>
        <ContainerBox size="xl">
          <ContactInfo />
        </ContainerBox>
      </GridItem>
    </Grid>
  );
};
export default Books;
