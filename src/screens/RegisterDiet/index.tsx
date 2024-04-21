import {  useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ArrowL, ButtonView, Container,
         Content, Day, DayTime, FormDiet, 
         Header, IconButton, InputDate, 
         InputDescription, InputHours, 
         InputName, LabelText, Options, 
         Time, Title } from './styles';

import { Button } from '@components/Button';
import { ButtonSelect } from '@components/ButtonSelect';

import { dietCreate } from '@storage/diet/dietCreate';
import { dietUpdate } from '@storage/diet/dietUpdate';

import { AppError } from '@utils/AppError';

import { useDiet } from '@hooks/useDiet';
import { DietStorageDTO } from '@dtos/DietStorageDTO';
import { validateInput } from '@service/validateInput';


type Props = {
  edit: boolean;
  title: string;
  diet: string;
}

export function RegisterDiet(){
  const { data: dietData } = useDiet(); 
  const  { edit, title, diet } = useRoute().params as Props;

  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');
  const [ status, setStatus ] = useState(false);
  
  const [activeOk, setActiveOk ] = useState(false);
  const [activeNo, setActiveNo ] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (edit && dietData) {
      const daily = dietData.find(item => item.title === title);
      if (daily) {
        const data = daily.data.find(data => data.name === diet);
        if (data) {
          setName(data.name);
          setDescription(data.description);
          setDate(data.date);
          setTime(data.time);
          setStatus(data.status);
   
          setStatus(data.status);
          setActiveOk(data.status);
          setActiveNo(!data.status);
        }
      }
    }
  }, [edit, dietData, title, diet]);

  const handleActionOk = () => {
    setActiveNo(false);
    setActiveOk(true);
    setStatus(true);
  }
  const handleActionNo = () => {
    setActiveOk(false);
    setActiveNo(true);
    setStatus(false);
  }

 async function handleAction() {
    try {
      
      if(!validateInput({name, description, date, time})) return;

      const newDiet: DietStorageDTO = {
        name: name,
        description: description,
        date: date,
        time: time,
        status: status
      }

      if (edit) {
        await dietUpdate(title, newDiet);
        navigation.goBack();
      }else{
        const title = date.replace(/\//g, ".");
        await dietCreate(title, newDiet);
        navigation.navigate('Feedback', { status: status });
      }

    } catch (error) {
      AppError.handleAppError(error)
    }
  }

  return(
    <Container>
      <Header>
        <IconButton
          onPress={() => navigation.goBack()}
        >
          <ArrowL/>
        </IconButton>
        <Title>{edit ? 'Editar' : 'Nova' } refeição</Title>
      </Header>
      <Content>
      <FormDiet>
        <LabelText>Nome</LabelText>
        <InputName
          value={name}
          onChangeText={setName}
          placeholder="Nome da dieta"
        />
        <LabelText>Descrição</LabelText>
        <InputDescription
          value={description}
          onChangeText={setDescription}
          placeholder="Descrição da dieta"
        />
     
        <DayTime>
        <Day>
          <LabelText>Data</LabelText>
          <InputDate 
            type={'datetime'}
            options={{
              format: 'DD/MM/YY4',
            }}
            value={date}
            onChangeText={setDate}
            placeholder="DD/MM/YY"
          />
        </Day>
        <Time>
            <LabelText>Hora</LabelText>
            <InputHours
              type={'datetime'}
              options={{format: 'HH:mm'}}
              value={time}
              onChangeText={setTime}
              placeholder="HH:mm"
            />
          </Time>
        </DayTime>
        <Options>
          <LabelText>Está dentro da dieta?</LabelText>
          <ButtonView>
          <ButtonSelect 
            onPress={handleActionOk}
            text='Sim' 
            active={activeOk} 
            status 
          />
          <ButtonSelect 
            onPress={handleActionNo}
            text='Não' 
            active={activeNo} 
            status={false}/>
          </ButtonView>
        </Options>
      </FormDiet>
  
      <Button
        disabled={activeOk === activeNo } 
        onPress={handleAction}
        title={ edit ? "Salvar alteração" : "Cadastrar refeição"}
      />
    </Content>
    </Container>
  );
}
