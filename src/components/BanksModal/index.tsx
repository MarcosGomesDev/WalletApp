import ButtonCustom from 'components/ButtonCustom';
import { MagnifyingGlass, X } from 'phosphor-react-native';
import React, { useState } from 'react';
import { FlatList, TouchableWithoutFeedback, View } from 'react-native';
import Modal from 'react-native-modal';

import {
    Container,
    Header,
    Title,
    InputContainer,
    Input,
    EraserButton,
    Button,
    TitleOption,
    Footer
} from './styles';

interface ModalProps {
    isVisible: boolean;
    onCancel: () => void;
    onConfirm(params: string): void;
}

const BanksModal: React.FC<ModalProps> = ({
    isVisible,
    onCancel = () => {},
    onConfirm,
}) => {

    const [search, setSearch] = useState<string>('')

    const data = [{id: 1, name:'mabank'}, {id: 2, name:'nubank'}, {id: 3, name:'santander'}, {id: 4, name:'caixa'}, {id: 5, name:'bradesco'}, {id: 6, name:'next'}]

    return (
        <Modal
            isVisible={isVisible}
            transparent={true}
            style={{ marginHorizontal: 0, marginBottom: 0 }}
            customBackdrop={
                <TouchableWithoutFeedback
                    onPress={onCancel}
                >
                    <View style={{ flex: 1, backgroundColor: "#000" }} />
                </TouchableWithoutFeedback>
            }
        >
            <Container>
                <Header>
                    <Title>Selecione um banco</Title>
                </Header>
                <InputContainer>
                    <MagnifyingGlass size={26} weight="light" />
                    <Input
                        onChangeText={(text: string) => setSearch(text)}
                        value={search}
                        placeholder='Procurar por...'
                        placeholderTextColor="#a9a9a9"
                    />
                    {search.length > 0 && (
                        <EraserButton
                            onPress={() => setSearch('')}
                        >
                            <X size={26} weight="light" />
                        </EraserButton>
                    )}
                </InputContainer>
                <FlatList
                    data={data}
                    style={{marginTop: 15}}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <Button
                            onPress={() => {
                                onConfirm(item.name)
                                setSearch('')
                            }}
                        >
                            <TitleOption>{item.name}</TitleOption>
                        </Button>
                    )}
                />
                <Footer>
                    <ButtonCustom
                        title='Cancelar'
                        onPress={() => {}}
                    />
                </Footer>
            </Container>
        </Modal>
    );
}

export default BanksModal;
