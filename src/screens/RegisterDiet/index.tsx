import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import { ArrowL, ButtonView, Container, Content, Day, DayTime, FormDiet, Header, IconButton, InputDate, InputDescription, InputHours, InputName, LabelText, Options, Time, Title } from './styles';

import { ButtonSelect } from '@components/ButtonSelect';
import { Button } from '@components/Button';
import { dietCreate } from '@storage/diet/dietCreate';
import { AppError } from '@utils/AppError';
import { Alert } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { useAuth } from 'src/hooks/useAuth';
import { DietStorageDTO } from 'src/dtos/DietStorageDTO';
import { dietUpdate } from '@storage/diet/dietUpdate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DIET_COLLECTION } from '@storage/storageConfig';

type Props = {
  edit: boolean;
  title: string;
  diet: string;
}

export function RegisterDiet(){
  const { data: authData } = useAuth(); 
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
    if (edit && authData) {
      const daily = authData.find(item => item.title === title);
      if (daily) {
        const ok = daily.data.find(data => data.name === diet);
        if (ok) {
          setName(ok.name);
          setDescription(ok.description);
          setDate(ok.date);
          setTime(ok.time);
          setStatus(ok.status);
          // Defina os estados para ativar/desativar os botões conforme necessário
          setStatus(ok.status);
          setActiveOk(ok.status);
          setActiveNo(!ok.status);
        }
      }
    }
  }, [edit, authData, title, diet]);

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
      
      if(!validateInput()) return;

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
      handleAppError(error)
    }
  }

  const validateInput = () => {
    if (name.trim().length === 0 || description.trim().length === 0 ||
      date.trim().length === 0 || time.trim().length === 0) {
      Alert.alert("Nova refeição", "Informe todos os dados necessário da dieta");
      return false;
    }
    return true;
  }

  const handleAppError = (error: any) => {
    if (error instanceof AppError) {
      Alert.alert("Nova refeição", error.message);
    } else {
      console.log(error);
      Alert.alert("Nova refeição", "Não foi possível adicionar!");
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
            value={date}
            onChangeText={setDate}
            placeholder="Data da dieta"
          />
        </Day>
        <Time>
            <LabelText>Hora</LabelText>
            <InputHours
              value={time}
              onChangeText={setTime}
              placeholder="hora da dieta"
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
