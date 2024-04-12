import { Plus } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { SectionList, VirtualizedList } from 'react-native';

import { Container, Header, Logo, NewDiet, Title, TitleDailyDiet, UserImg } from "./styles";

import theme from 'src/theme';

import { Button } from '@components/Button';
import { DietCard } from '@components/DietCard';
import { PercentCard } from '@components/PercentCard';

import logoImg from '@assets/Logo.png';
import userImg from '@assets/Ellipse.png';

import { DAILY_DIET } from "@utils/data";

type ItemData = {
  id: string;
  title: string;
};

function Main() {
  const navigation = useNavigation();
  return (
    <>
      <Header>
            <Logo source={logoImg} />
            <UserImg source={userImg} />
          </Header>
          <PercentCard active={false} onPress={()=> navigation.navigate('Statistic')}/>
          <NewDiet>
            <Title>Refeições</Title>
            <Button
              onPress={()=> navigation.navigate('Register')}
              title="Nova refeição" 
            >
              <Plus size={20} color={theme.COLORS.WHITE}/>
            </Button>
          </NewDiet>

        <SectionList
          sections={DAILY_DIET}
          keyExtractor={(item) => item}
          stickySectionHeadersEnabled={false}
          renderItem={() => <DietCard status />}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({section: { title }}) => (
            <TitleDailyDiet>{title}</TitleDailyDiet>
          )}
        />
    </>
  )
}

export const Home = () => {

  const getItem = (_data: unknown, index: number): ItemData => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });

  return(
    <Container>
      <VirtualizedList
      style={{padding:2}}
      getItemCount={() =>1}
      renderItem={(data) => <Main/>}
      keyExtractor={item => item.id}
      getItem={getItem}
      showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
