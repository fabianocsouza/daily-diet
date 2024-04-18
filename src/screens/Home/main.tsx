import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useRef, useState } from "react";
import { Header, Logo, NewDiet, Title, TitleDailyDiet, UserImg } from "./styles";
import { PercentCard } from "@components/PercentCard";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { SectionList } from "react-native";
import theme from "src/theme";
import { dietGetAll } from "@storage/diet/dietGetAll";

import { useAuth } from "src/hooks/useAuth";

import logoImg from '@assets/Logo.png';
import userImg from '@assets/Ellipse.png';
import { DietCard } from "@components/DietCard";
import { DAILY_DIET } from "@utils/data";
import { DailyStorageDTO } from "src/dtos/DietStorageDTO";
import { generalStatistics } from "src/service/generalStatistics";
import { updateData } from "src/service/updateData";

export function Main() {
  const sectionListRef = useRef<SectionList>(null)

  const navigation = useNavigation();

  const totalStatus = generalStatistics();
 
  const dailyDiet = updateData();

  return (
    <>
      <Header>
            <Logo source={logoImg} />
            <UserImg source={userImg} />
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
