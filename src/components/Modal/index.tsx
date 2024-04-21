import { Description, ModalButton } from "./styles";

import { ModalPoUp } from "./modalPoUp";
import { Button } from "@components/Button";

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  handleRemove: () => void;
}

export function Modal({ visible, setVisible, handleRemove }: Props) {

  return (
    <ModalPoUp visible={visible}>
      <Description>Deseja realmente excluir o registro da refeição?</Description>
      <ModalButton>
        <Button
          size="150px"  
          title="Cancelar" showDark={false} 
          onPress={()=> setVisible(false)}
        />
        <Button 
          size="150px"
          title="Sim, excluir"
          onPress={handleRemove}
        />
      </ModalButton>
    </ModalPoUp>
  );
}

