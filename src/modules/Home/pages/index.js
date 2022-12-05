import { useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

//components
import Banner from '../components/Banner';
import Title from 'components/Title';
import NewsContainer from '../components/NewsContainer';

const Home = () => {
  useEffect(() => {
    document.title = 'Inicio';
  }, []);

  return (
    <Grid templateColumns={'repeat(1, minmax(0, 1fr))'} gap={2}>
      <GridItem>
        <Banner />
      </GridItem>
      <GridItem>
        <Title title="Novedades" />
      </GridItem>
      <GridItem>
        <NewsContainer />
      </GridItem>
    </Grid>
  );
};
export default Home;
<NewsContainer />;
