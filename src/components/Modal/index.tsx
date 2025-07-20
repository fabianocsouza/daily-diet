import { Alert, type ModalProps } from "react-native";
import {
  Container,
  Content,
  ModalButton,
  ModalContainer,
  ModalContent,
  ModalDescription,
  ModalWindow,
} from "./styles";
import { Button } from "../Button";

type Props = ModalProps & {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};

export function Modal({ modalVisible, setModalVisible, ...rest }: Props) {
  return (
    <Container>
      <Content>
        <ModalWindow
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
          {...rest}
        >
          <ModalContainer>
            <ModalContent>
              <ModalDescription>
                Deseja realmente excluir o registro da refeição?
              </ModalDescription>
              <ModalButton>
                <Button
                  title="Cancelar"
                  style={{ width: 150 }}
                  mode="light"
                  onPress={() => setModalVisible(!modalVisible)}
                />
                <Button title="Sim,excluir" style={{ width: 150 }} />
              </ModalButton>
            </ModalContent>
          </ModalContainer>
        </ModalWindow>
      </Content>
    </Container>
  );
}
