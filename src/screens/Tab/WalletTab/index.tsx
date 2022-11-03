import React from 'react';
import { Text } from 'react-native';
import {
    Container,
    CardContainer,
    Content,
    ContainerBalance,
    TitleValor,
    TitleValorConta,
    ContainerCard,
    TitleCard,
    TitleNameCard
} from './styles';

import Header from 'components/Header';

const Wallet: React.FC = () => {
    return (
        <Container>
            <Header />

            <CardContainer>
                <Content>
                    <ContainerBalance>
                        <TitleValor>Saldo</TitleValor>
                        <TitleValorConta>R$ 1.000,00</TitleValorConta>
                    </ContainerBalance>

                    <ContainerCard>
                        <TitleCard>Cartão</TitleCard>
                        <TitleNameCard>Wallet</TitleNameCard>
                    </ContainerCard>
                </Content>
            </CardContainer>
        </Container>
    );
}

export default Wallet;
