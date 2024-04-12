import { Animated, Modal, ViewProps } from "react-native";
import { ReactNode, useEffect, useRef, useState } from "react";

import { ModalBackground, styles } from "./styles";

type Props = ViewProps & {
  visible: boolean;
  children?: ReactNode;
}

export function ModalPoUp({ visible, children }: Props) {
  const [ showModal, setShowModal ] = useState(visible);
  const scaleValue = useRef( new Animated.Value(0)).current;
  useEffect(() => {
    toggleModal();
  },[visible])

  const toggleModal = () => {
    setShowModal(
      visible ? true : false
    )

    if(visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        damping: 3000,
        useNativeDriver: true
      }).start()
    }else{
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true
      }).start()
    }
  }

  return (
    <Modal transparent visible={showModal}>
      <ModalBackground>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}
        >{children}</Animated.View>
      </ModalBackground>
    </Modal>
  );
}


