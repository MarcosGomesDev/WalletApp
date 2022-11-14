import React from 'react';
import { Dimensions, FlatList, Text } from 'react-native';
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
const screenWidth = Dimensions.get("window").width;
import theme from 'styles/theme';
import { LineChart } from 'react-native-chart-kit';
import { transaction } from 'utils/transactions';

const Report: React.FC = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };

    const chartConfig = {
        backgroundGradientFrom: "#000",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#093",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(112, 0, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <>
            <Header
                iconLeft
                appName='Relatório'
                typeRelatorio
            />
            <Container>
                <LineChart
                    data={data}
                    width={screenWidth}
                    height={200}
                    chartConfig={chartConfig}
                    bezier
                />
                <ViewBalance>
                    <Title>Saldo total</Title>
                    <TotalCash>$ 13.248</TotalCash>
                </ViewBalance>
                <ContentFooter>
                    <FlatList
                        style={{marginTop: 30}}
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
