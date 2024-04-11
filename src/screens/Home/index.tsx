import logoImg from '@assets/Logo.png';
import userImg from '@assets/Ellipse.png';

import { Container, Header, Logo, Title, UserImg } from "./styles";
import { PercentCard } from '@components/PercentCard';
import { Button } from '@components/Button';

import { Plus } from 'phosphor-react-native';
import theme from 'src/theme';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();
  return(
    <Container>
      <Header>
        <Logo source={logoImg} />
        <UserImg source={userImg} />
      </Header>
      <PercentCard active={false} onPress={()=> navigation.navigate('Statistic')}/>
      <Title>Refeições</Title>
      <Button 
        onPress={()=> navigation.navigate('Register')}
        title="Nova refeição" 
      >
          <Plus size={20} color={theme.COLORS.WHITE}/>
        </Button>
    </Container>
  );
}
