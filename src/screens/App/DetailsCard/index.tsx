import React from 'react';
import { View } from 'react-native';
import GoBackButton from 'components/GoBackButton';
import CardWidth from 'assets/DetailsCard.png';
import ButtonCustom from 'components/ButtonCustom';

import {
    Container,
    Header,
    Title,
    CardDetails,
    ViewDetails,
    ViewItem,
    InfoTitle,
    Name,
    Bank,
    Account,
    Status,
    Valid
} from './styles';

const DetailsCard: React.FC = () => {
    return (
        <>
            <GoBackButton />

            <Container>
                <Header>
                    <Title>Detalhes do cartão</Title>
                </Header>

                <CardDetails
                    source={CardWidth}
                />

                <ViewDetails>
                    <ViewItem>
                        <InfoTitle>Nome</InfoTitle>
                        <Name>Marcos Gomes</Name>
                    </ViewItem>
                    <ViewItem>
                        <InfoTitle>Banco</InfoTitle>
                        <Bank>Mabank</Bank>
                    </ViewItem>
                    <ViewItem>
                        <InfoTitle>Número do cartão</InfoTitle>
                        <Account>.... .... .... 2138</Account>
                    </ViewItem>
                    <ViewItem>
                        <InfoTitle>Status</InfoTitle>
                        <Status>Ativo</Status>
                    </ViewItem>
                    <ViewItem>
                        <InfoTitle>Validade</InfoTitle>
                        <Valid>2020 - 2025</Valid>
                    </ViewItem>
                </ViewDetails>
                <ButtonCustom
                    title='Deletar Cartão'
                    onPress={() => { }}
                    variant="outline"
                />
                {/* <Footer>
                    <RemoveCardBtn>
                        <TitleBtn>Deletar Cartão</TitleBtn>
                    </RemoveCardBtn>
                </Footer> */}
            </Container>
        </>
    );
}

export default DetailsCard;
