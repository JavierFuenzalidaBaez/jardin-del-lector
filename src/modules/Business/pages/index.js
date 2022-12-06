import { useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

//components
import ContainerBox from 'components/ContainerBox';
import Banner from '../components/Banner';
import Title from 'components/Title';
import DescriptionText from '../components/DescriptionText';

const Business = () => {
  useEffect(() => {
    document.title = 'Empresa';
  }, []);

  return (
    <Grid templateColumns={'repeat(1, minmax(0, 1fr))'} gap={2}>
      <GridItem>
        <Banner />
      </GridItem>
      <ContainerBox size="xl">
        <GridItem>
          <Title title="QUIENES SOMOS" />
        </GridItem>
      </ContainerBox>
      <ContainerBox size="xxxl">
        <GridItem>
          <DescriptionText />
        </GridItem>
      </ContainerBox>
    </Grid>
  );
};
export default Business;
