import { PressableProps } from 'react-native';
import { AnimatePresence, useAnimationState } from 'moti';

import { ArrowL, ArrowUpR, Card, Container, Description, PercentageValue } from './style';

import { generalStatistics } from 'src/service/generalStatistics';

type Props = PressableProps & {
  active: boolean;
}

export function PercentCard({active,  ...props}: Props) {

  const { percent  } = generalStatistics()

  const toggleAnimationState = useAnimationState({
    close: {
      height: 102,
      width: 380,
    },
    open: {
      height: 470,
      width: 500,
    }
  })

  function handleOpenToggle() {
    toggleAnimationState.transitionTo("open");
  }

   function handleCloseToggle() {
    setTimeout(() => {
      toggleAnimationState.transitionTo("close");
    }, 1000); // 10 segundos
  }

  return (
    
       <Container
        {...props}
        onPressIn={handleOpenToggle}
        onPressOut={handleCloseToggle}
      > 
       <AnimatePresence
       >
      <Card percent={percent}  state={toggleAnimationState} >
        {active
          ? <ArrowL percent={percent} size={32} />
        : <ArrowUpR percent={percent} size={32} />}
        <PercentageValue>{percent.toFixed(0)}%</PercentageValue>
        <Description>das refeições dento da dieta</Description>
      </Card>
      </AnimatePresence>
      </Container>
     
    
  );
}
