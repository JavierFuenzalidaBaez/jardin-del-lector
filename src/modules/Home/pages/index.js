import { useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

//components
import Banner from '../components/Banner';
import Title from 'components/Title';
import NewsContainer from '../components/NewsContainer';
import ContainerBox from 'components/ContainerBox';

const Home = () => {
  useEffect(() => {
    document.title = 'Inicio';
  }, []);

  return (
    <ContainerBox size="xl">
      <Grid templateColumns={'repeat(1, minmax(0, 1fr))'} gap={2}>
        <GridItem>
          <Banner />
        </GridItem>
        <GridItem>
          <Title title="NOVEDADES" />
        </GridItem>
        <GridItem>
          <NewsContainer />
        </GridItem>
      </Grid>
    </ContainerBox>
  );
};
export default Home;
<NewsContainer />;
