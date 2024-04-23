import * as ImagePicker from 'expo-image-picker';
import { Alert, SectionList } from "react-native";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Camera, Plus, UserCircleMinus } from "phosphor-react-native";

import { ButtonRemovePhoto, Header, ImageButton, Logo,
          NewDiet, Title, TitleDailyDiet, UserImg } from "./styles";

import { Button } from "@components/Button";
import { DietCard } from "@components/DietCard";
import { PercentCard } from "@components/PercentCard";

import theme from "src/theme";

import logoImg from '@assets/Logo.png';

import { updateData } from "@service/updateData";
import { photoGet } from "@storage/photo/photoGet";
import { photoCreate } from "@storage/photo/photoCreate";
import { PHOTO_COLLECTION } from "@storage/storageConfig";
import { generalStatistics } from "@service/generalStatistics";

export function Main() {
  const [image, setImage] = useState('');
  const sectionListRef = useRef<SectionList>(null);

  const navigation = useNavigation();
 
  const totalStatus = generalStatistics();
  
  const dailyDiet = updateData();

  async function handleSelectImage(){
    try {
      const imageURI = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4,4]
      });

      if(imageURI.assets){
          const photo = imageURI.assets[0].uri;
        setImage(photo)
        await photoCreate(photo); 
      }
      
    } catch (error) {
      console.log(error);
      Alert.alert('Foto','Não foi possível selecionar a imagem.');
    }
  }

  async function handleRemovePhoto(){
    await AsyncStorage.removeItem(PHOTO_COLLECTION);
    setImage('');
    imageData();
  }

  async function imageData(){
    const photo = await photoGet();
    if(photo){
      setImage(photo)
    }
}

useEffect(() => {
  imageData()
},[]);

  return (
    <>
      <Header>
            <Logo source={logoImg} />
           { 
            image
            ? (
                <>
                  <ImageButton
                    activeOpacity={0.9}
                    onPress={handleSelectImage}
                  >
                    <UserImg source={{uri: image}} />
                 </ImageButton>
                 <ButtonRemovePhoto
                  onPress={handleRemovePhoto}
                 >
                    <UserCircleMinus size={26}  color={theme.COLORS.WHITE_50}/>
                 </ButtonRemovePhoto>
                </>
              )
            : ( <ImageButton
                  activeOpacity={0.9}
                  onPress={handleSelectImage}
                 >
                  <Camera size={32} color={theme.COLORS.GRAY_300} />
                </ImageButton>
              )
            }
          </Header>
          <PercentCard active={false} onPress={()=> navigation.navigate('Statistic', {data: totalStatus})}/>
          <NewDiet>
            <Title>Refeições</Title>
            <Button
              onPress={()=> navigation.navigate('Register', {edit: false})}
              title="Nova refeição" 
            >
              <Plus size={20} color={theme.COLORS.WHITE}/>
            </Button>
          </NewDiet>

        <SectionList
          ref={sectionListRef}
          sections={dailyDiet}
          keyExtractor={(item) => item.name }
          stickySectionHeadersEnabled={false}
          renderItem={(item) => <DietCard data={item.item} />}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({section: { title }}) => (
            <TitleDailyDiet>{title}</TitleDailyDiet>
          )}
        />
    </>
  )
}
