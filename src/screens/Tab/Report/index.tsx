import React from 'react';
import { FlatList } from 'react-native';
import Header from 'components/Header';
import {
    Container,
    ViewBalance,
    Title,
    TotalCash,
    ContentFooter,
    ContentFlatHeader,
    ContentFlat,
    ContentFlatFooter,
    IconTransaction,
    DetailsTransaction,
    NameTransaction,
    SubTitleTransaction,
    AmountTransaction,
    ButtonShowAll,
    ButtonTitle
} from './styles';

import theme from 'styles/theme';
import { transaction } from 'utils/transactions';
import { AreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Path } from 'react-native-svg';

const Report: React.FC = () => {
    const data = [50, 10, 40, 95, 4, 24, 85, 91, 35, 53, 53, 24, 50, 20, 80]

    const Line = ({ line }: any) => (
        <Path
            key={'line'}
            d={line}
            stroke={'rgb(134, 65, 244)'}
            fill={'none'}
        />
    )

    return (
        <>
            <Header
                iconLeft
                appName='Relatório'
                typeRelatorio
            />
            <Container>
                <AreaChart
                style={{ height: 140, paddingHorizontal: 25 }}
                data={data}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.2)' }}
            >
                {/* <Grid /> */}
                <Line />
            </AreaChart>
                <ViewBalance>
                    <Title>Saldo total</Title>
                    <TotalCash>$ 13.248</TotalCash>
                </ViewBalance>
                <ContentFooter>
                    <FlatList
                        style={{ marginTop: 30 }}
                        data={transaction.slice(0, 3)}
                        ListHeaderComponent={
                            <ContentFlatHeader>
                                <Title>Últimas transações</Title>
                                <ButtonShowAll>
                                    <ButtonTitle>Ver Todos</ButtonTitle>
                                </ButtonShowAll>
                            </ContentFlatHeader>
                        }
                        renderItem={({ item }) => (
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
        </>
    );
}

export default Report;
