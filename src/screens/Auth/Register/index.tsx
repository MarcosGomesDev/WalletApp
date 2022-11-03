import React from 'react';
import { ScrollView} from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import Input from 'components/Input';
import ButtonSocialGoogle from 'components/ButtonSocialGoogle';
import ButtonCustom from 'components/ButtonCustom';

import {
    Container,
    ContentHeader,
    Title,
    Description,
    ViewButton,
    ContentBody,
    ContentFooter,
    ButtonFooter,
    Title1,
    Title2,
} from './styles';
import ButtonSocialFacebook from 'components/ButtonSocialFacebook';

const Register: React.FC = () => {
    const {COLORS} = useTheme()
    const navigation = useNavigation()

    return (
        <Container>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <ContentHeader>
                    <Title>Seja bem vindo {'\n'}a WalletApp</Title>

                    <Description>Cadastrar com:</Description>

                    <ViewButton>
                        <ButtonSocialGoogle
                            title="Google"
                        />
                        <ButtonSocialFacebook
                            iconName="facebook"
                            title="Facebook"
                        />
                    </ViewButton>
                </ContentHeader>

                <ContentBody>
                    <Input
                        LeftIcon
                        iconName='person-outline'
                        iconColor={COLORS.GRAY2}
                        iconSize={20}
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="default"
                        placeholder='Digite seu nome'
                    />
                    <Input
                        LeftIcon
                        iconName='mail-outline'
                        iconColor={COLORS.GRAY2}
                        iconSize={20}
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="email-address"
                        placeholder='Digite seu e-mail'
                    />
                    <Input
                        LeftIcon
                        iconName='lock-closed-outline'
                        iconColor={COLORS.GRAY2}
                        iconSize={20}
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="default"
                        placeholder='Digite sua senha'
                        secureTextEntry
                    />
                    <ButtonCustom
                        title='Cadastrar'
                        onPress={() => {}}
                        style={{
                            marginTop: 50
                        }}
                    />
                </ContentBody>

                <ContentFooter>
                    <ButtonFooter
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Title1>Possuí conta? </Title1>
                        <Title2>Entrar</Title2>
                    </ButtonFooter>
                </ContentFooter>
            </ScrollView>
        </Container>
    );
}

export default Register;
