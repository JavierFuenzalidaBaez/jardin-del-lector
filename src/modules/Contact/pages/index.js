import { useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

//components
import Title from 'components/Title';
import ContainerBox from 'components/ContainerBox';
import Banner from '../components/Banner';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

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
          <Grid
            templateColumns={{
              base: 'repeat(1, minmax(0, 1fr))',
              lg: 'repeat(2, minmax(0, 1fr))',
            }}
            gap={{
              base: 2,
              sm: 10,
              lg: 2,
            }}
          >
            <GridItem>
              <ContactForm />
            </GridItem>
            <GridItem>
              <ContactInfo />
            </GridItem>
          </Grid>
        </ContainerBox>
      </GridItem>
    </Grid>
  );
};
export default Books;
