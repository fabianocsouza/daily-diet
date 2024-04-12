import { useState } from 'react';
import { PressableProps } from 'react-native';
import { AnimatePresence, useAnimationState } from 'moti';

import { ArrowL, ArrowUpR, Card, Container, Description, PercentageValue } from './style';

type Props = PressableProps & {
  active: boolean;
}

export function PercentCard({active, ...props}: Props) {

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

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
    setTimeoutId(setTimeout(() => {
      toggleAnimationState.transitionTo("close");
    }, 1000)); // 10 segundos
  }

  return (
    
    
       <Container
        {...props}
        onPressIn={handleOpenToggle}
        onPressOut={handleCloseToggle}
      > 
       <AnimatePresence
       >
      <Card state={toggleAnimationState} >
        {active
          ? <ArrowL size={32} />
        : <ArrowUpR size={32} />}
        <PercentageValue>90,86%</PercentageValue>
        <Description>das refeições dento da dieta</Description>
      </Card>
      </AnimatePresence>
      </Container>
     
    
  );
}
