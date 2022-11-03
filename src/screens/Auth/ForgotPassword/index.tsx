import React from 'react';

import {
    Container,
    ContentHeader,
    Title,
    Description,
    ContentBody,
    ContentFooter,
    ButtonGoBack,
    Title1,
    Title2,
} from './styles';

import Input from 'components/Input';
import ButtonCustom from 'components/ButtonCustom';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const ForgotPassword: React.FC = () => {
    const {COLORS} = useTheme()
    const navigation = useNavigation()

    return (
        <Container>
            <ScrollView>
                <ContentHeader>
                    <Title>Seja bem vindo(a) {'\n'}a App Wallet</Title>
                    <Description>Recuperar senha</Description>
                </ContentHeader>

                <ContentBody>
                    <Input
                        LeftIcon
                        iconName='mail-outline'
                        iconColor={COLORS.GRAY2}
                        iconSize={23}
                        placeholder="Digite seu e-mail"
                    />
                </ContentBody>

                <ButtonCustom
                    title='Recuperar'
                    onPress={() => {}}
                    style={{
                        marginTop: 40
                    }}
                />

                <ContentFooter>
                    <ButtonGoBack
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Title1>Não quer recuperar a senha? </Title1>
                        <Title2>Voltar</Title2>
                    </ButtonGoBack>
                </ContentFooter>
            </ScrollView>
        </Container>
    );
}

export default ForgotPassword;
