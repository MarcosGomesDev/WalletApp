import GoBackButton from 'components/GoBackButton';
import React from 'react';
import { View } from 'react-native';
import Card from 'assets/card.png';
import Chip from 'assets/chipcard.png';
import Visa from 'assets/Visa.png';

import {
    Container,
    Header,
    Title,
    ButtonAddCard,
    Content,
    ContentChip,
    ContentVisa,
    SubTitle,
} from './styles';
import { useNavigation } from '@react-navigation/native';

const AddCart: React.FC = () => {
    const navigation = useNavigation()

    return (
        <>
            <GoBackButton />
            <Container>
                <Header>
                    <Title>Adicionar cartão</Title>
                </Header>
                <ButtonAddCard
                    onPress={() => navigation.navigate('Profile')}
                >
                <Content
                    source={Card}
                >
                    <ContentChip
                        source={Chip}
                    />
                    <ContentVisa
                        source={Visa}
                    />
                </Content>
                </ButtonAddCard>
                <SubTitle>
                    Adicionar um novo cartão {'\n'}
                    na sua carteira para uma vida fácil
                </SubTitle>
            </Container>
        </>
    );
}

export default AddCart;
