import BanksModal from 'components/BanksModal';
import ButtonCustom from 'components/ButtonCustom';
import GoBackButton from 'components/GoBackButton';
import { Backspace, CaretDown } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Alert } from 'react-native';

import {
    Container,
    ViewOption,
    ViewValue,
    Input,
    ViewKeyboard,
    Button,
    TitleBtn,
    ButtonOptionBank,
    Title
} from './styles';

const Transfer: React.FC = () => {
    const [value, setValue] = useState<string>('0')
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [bank, setBank] = useState('')

    const onCategoryPress = (item: string) => {
        setBank(item)
        onClosePress()
    }

    const onClosePress = () => {
        setModalVisible(false)
    }

    const transfer = () => {
        if(bank === '') {
            Alert.alert('Erro', 'Selecione o banco')
        } else {
            Alert.alert('Success', 'tranferência concluída')
        }
    }

    return (
        <>
            <GoBackButton />
            <Container>
                <ViewValue>
                    <Input
                        value={'R$' + value}
                    />
                </ViewValue>
                <ViewOption>
                    <ButtonOptionBank
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Title>
                            {bank || 'Selecione um banco'}
                        </Title>
                        <CaretDown size={24} weight="light" />
                    </ButtonOptionBank>
                    <BanksModal
                        isVisible={modalVisible}
                        onCancel={onClosePress}
                        onConfirm={onCategoryPress}
                    />
                </ViewOption>
                <ViewKeyboard>
                    <Button
                        onPress={() => {
                            if (value === '0') {
                                setValue('1')
                            } else {
                                setValue(value + '1')
                            }
                        }}
                    >
                        <TitleBtn>1</TitleBtn>
                    </Button>
                    <Button
                        onPress={() => {
                            if (value === '0') {
                                setValue('2')
                            } else {
                                setValue(value + '2')
                            }
                        }}
                    >
                        <TitleBtn>2</TitleBtn>
                    </Button>
                    <Button
                        onPress={() => {
                            if (value === '0') {
                                setValue('3')
                            } else {
                                setValue(value + '3')
                            }
                        }}
                    >
                        <TitleBtn>3</TitleBtn>
                    </Button>
                    <Button
                        onPress={() => {
                            if (value === '0') {
                                setValue('4')
                            } else {
                                setValue(value + '4')
                            }
                        }}
                    >
                        <TitleBtn>4</TitleBtn>
                    </Button>
                    <Button
                        onPress={() => {
                            if (value === '0') {
                                setValue('5')
                            } else {
                                setValue(value + '5')
                            }
                        }}
                    >
                        <TitleBtn>5</TitleBtn>
                    </Button>
                    <Button
                        onPress={() => {
                            if (value === '0') {
                                setValue('6')
                            } else {
                                setValue(value + '6')
                            }
                        }}
                    >
                        <TitleBtn>6</TitleBtn>
                    </Button>
                    <Button
                        onPress={() => {
                            if (value === '0') {
                                setValue('7')
                            } else {
                                setValue(value + '7')
                            }
                        }}
                    >
                        <TitleBtn>7</TitleBtn>
                    </Button>
                    <Button
                        onPress={() => {
                            if (value === '0') {
                                setValue('8')
                            } else {
                                setValue(value + '8')
                            }
                        }}
                    >
                        <TitleBtn>8</TitleBtn>
                    </Button>
                    <Button
                        onPress={() => {
                            if (value === '0') {
                                setValue('9')
                            } else {
                                setValue(value + '9')
                            }
                        }}
                    >
                        <TitleBtn>9</TitleBtn>
                    </Button>
                    <Button
                        onPress={() => {
                            if (value === '0') {
                                return
                            } else {
                                setValue(value + '00')
                            }
                        }}
                    >
                        <TitleBtn>00</TitleBtn>
                    </Button>
                    <Button
                        onPress={() => {
                            if (value === '0') {
                                return
                            } else {
                                setValue(value + '0')
                            }
                        }}
                    >
                        <TitleBtn>0</TitleBtn>
                    </Button>
                    <Button
                        onPress={() => {
                            if (value.length === 1 && value === '0') {
                                return
                            }
                            if (value.length === 1 && value !== '0') {
                                setValue('0')
                            }
                            else {
                                setValue(value.slice(0, -1))
                            }
                        }}
                    >
                        <Backspace size={32} weight="light" />
                    </Button>
                </ViewKeyboard>
                <ButtonCustom
                    title='Transferir'
                    onPress={() => transfer()}
                />
            </Container>
        </>
    );
}

export default Transfer;
