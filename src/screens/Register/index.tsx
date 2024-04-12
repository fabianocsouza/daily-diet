import { useNavigation } from '@react-navigation/native';

import { ArrowL, IconButton, ButtonView, 
        Container, Content, Day, DayTime, 
        Form, Header, InputDate, InputDescription, 
        InputHours, InputName, LabelText, Options, Time, Title } from './styles';

import { ButtonSelect } from '@components/ButtonSelect';
import { Button } from '@components/Button';

export function Register(){
  const navigation = useNavigation();
  return(
    <Container>
      <Header>
        <IconButton
          onPress={() => navigation.goBack()}
        >
          <ArrowL/>
        </IconButton>
        <Title>Nova refeição</Title>
      </Header>
      <Content>
        <Form>
          <LabelText>Nome</LabelText>
          <InputName/>
          <LabelText>Descrição</LabelText>
          <InputDescription/>
         
          
          <DayTime>
            <Day>
              <LabelText>Data</LabelText>
              <InputDate />
            </Day>
            <Time>
              <LabelText>Hora</LabelText>
              <InputHours/>
            </Time>
          </DayTime>
          <Options>
           <LabelText>Está dentro da dieta?</LabelText>
           <ButtonView>
            <ButtonSelect text='Sim' active={false} status/>
            <ButtonSelect text='Não' active={false} status={false}/>
           </ButtonView>
          </Options>
        </Form>
        <Button 
          onPress={()=> navigation.navigate('Feedback', {status: true})}
          title="Cadastrar refeição"
        />
      </Content>
    </Container>
  );
}
