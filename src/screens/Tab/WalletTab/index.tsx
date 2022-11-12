import React from 'react';

import {
    Container,
    CardContainer,
    Content,
    ContainerBalance,
    TitleValor,
    TitleValorConta,
    ContainerCard,
    TitleCard,
    TitleNameCard,
    ContentBody,
    IconPayment,
    IconTransfer,
    IconPayOut,
    IconTopUp,
    ButtonOption,
    TitleButton,
    ContentFooter,
    ContentFlat,
    ContentFlatHeader,
    Title,
    ButtonShowAll,
    ButtonTitle,
    ContentFlatFooter,
    IconTransaction,
    DetailsTransaction,
    NameTransaction,
    SubTitleTransaction,
    AmountTransaction,
} from './styles';

import Header from 'components/Header';
import Transfer from 'assets/convert.png';
import Payments from 'assets/export.png';
import Payout from 'assets/money-send.png';
import TopUp from 'assets/add-circle.png';
import { transaction } from 'utils/transactions';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Wallet: React.FC = () => {
    const navigation = useNavigation()

    return (
        <Container>
            <Header
                appName='Wallet'
                status
                avatar
            />

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

            <ContentBody>
                <ButtonOption>
                    <IconTransfer source={Transfer} />
                    <TitleButton>Transf.</TitleButton>
                </ButtonOption>
                <ButtonOption>
                    <IconPayment source={Payments} />
                    <TitleButton>Forma Pagto.</TitleButton>
                </ButtonOption>
                <ButtonOption>
                    <IconPayOut source={Payout} />
                    <TitleButton>Pagtos</TitleButton>
                </ButtonOption>
                <ButtonOption
                    onPress={() => navigation.navigate('AddCart')}
                >
                    <IconTopUp source={TopUp} />
                    <TitleButton>Add Cartão</TitleButton>
                </ButtonOption>
            </ContentBody>

            <ContentFooter>
                <FlatList
                    data={transaction.slice(0, 3)}
                    ListHeaderComponent={
                        <ContentFlatHeader>
                            <Title>Minhas transações</Title>
                            <ButtonShowAll>
                                <ButtonTitle>Ver Todos</ButtonTitle>
                            </ButtonShowAll>
                        </ContentFlatHeader>
                    }
                    renderItem={({item}) => (
                        <ContentFlat>
                            <ContentFlatFooter>
                                <IconTransaction source={item.icon} />
                                <DetailsTransaction>
                                    <NameTransaction>{item.title}</NameTransaction>
                                    <SubTitleTransaction>{item.subtitle}</SubTitleTransaction>
                                </DetailsTransaction>
                                <AmountTransaction>R$ {item.amount}</AmountTransaction>
                            </ContentFlatFooter>
                        </ContentFlat>
                    )}
                />
            </ContentFooter>
        </Container>
    );
}

export default Wallet;
