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
// import { LineChart } from 'react-native-chart-kit';
import { transaction } from 'utils/transactions';
import { AreaChart, BarChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Path } from 'react-native-svg';

const Report: React.FC = () => {
    // const data = {
    //     labels: ["January", "February", "March", "April", "May", "June"],
    //     datasets: [
    //         {
    //             data: [20, 45, 28, 80, 99, 43],
    //             color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
    //             strokeWidth: 2 // optional
    //         }
    //     ],
    //     legend: ["Rainy Days"] // optional
    // };

    const data = [50, 10, 40, 95, 4, 24, 85, 91, 35, 53, 53, 24, 50, 20, 80]

    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(112, 0, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

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
                {/* <LineChart
                    data={data}
                    width={screenWidth}
                    height={200}
                    chartConfig={chartConfig}
                    bezier
                /> */}
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
