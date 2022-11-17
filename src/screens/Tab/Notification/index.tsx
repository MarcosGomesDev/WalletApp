import React from 'react';
import GoBackButton from 'components/GoBackButton';
import {
    Container,
    Header,
    Title,
    NewNotifications,
    RecentNotifications,
    TitleNotification,
    NotificationContainer,
    DataNotify,
    NotifyTitle,
    Subtitle,
} from './styles';

import Pay from 'assets/pay.svg';
import Buy from 'assets/buy.svg';
import Pointer from 'assets/pointer.svg';

import { Dimensions, ScrollView, View } from 'react-native';

const height = Dimensions.get('screen').height

const Notification: React.FC = () => {
    const styles = {
        position: 'absolute',

    }

    return (
        <>
            <GoBackButton />
            <Container>
                <Header>
                    <Title>Notificação</Title>
                </Header>

                <NewNotifications>
                    <TitleNotification>Novas</TitleNotification>
                    <NotificationContainer>
                        <View style={{ flex: 1 }}>
                            <DataNotify>29 June 2021, 7.14 PM</DataNotify>
                            <NotifyTitle
                                multiline={true}
                            >
                                You received Rp 100.000 from Alexandr Gibson Jogja
                            </NotifyTitle>
                            <Subtitle>Pay debt</Subtitle>
                        </View>
                        <Pay width={30} height={30} />
                        <Pointer width={15} height={15}
                            style={{
                                position: 'absolute',
                                right: 7,
                                top: -6
                            }}
                        />
                    </NotificationContainer>

                    <NotificationContainer>
                        <View style={{ flex: 1 }}>
                            <DataNotify>29 June 2021, 9.02 AM</DataNotify>
                            <NotifyTitle
                                multiline={true}
                            >
                                You spent Rp 32.000 for Coffe Cetar back Tugu Sentral
                            </NotifyTitle>
                            <Subtitle>Buy drink</Subtitle>
                        </View>
                        <Buy width={30} height={30} />
                        <Pointer width={15} height={15}
                            style={{
                                position: 'absolute',
                                right: 7,
                                top: -6
                            }}
                        />
                    </NotificationContainer>
                </NewNotifications>

                <RecentNotifications>
                    <TitleNotification>Recentes</TitleNotification>
                    <NotificationContainer>
                        <View style={{ flex: 1 }}>
                            <DataNotify>29 June 2021, 9.02 AM</DataNotify>
                            <NotifyTitle
                                multiline={true}
                            >
                                You spent Rp 32.000 for Coffe Cetar back Tugu Sentral
                            </NotifyTitle>
                            <Subtitle>Buy drink</Subtitle>
                        </View>
                        <Buy width={30} height={30} />
                    </NotificationContainer>
                    <NotificationContainer>
                        <View style={{ flex: 1 }}>
                            <DataNotify>29 June 2021, 9.02 AM</DataNotify>
                            <NotifyTitle
                                multiline={true}
                            >
                                You spent Rp 32.000 for Coffe Cetar back Tugu Sentral
                            </NotifyTitle>
                            <Subtitle>Buy drink</Subtitle>
                        </View>
                        <Buy width={30} height={30} />
                    </NotificationContainer>
                    <NotificationContainer>
                        <View style={{ flex: 1 }}>
                            <DataNotify>29 June 2021, 9.02 AM</DataNotify>
                            <NotifyTitle
                                multiline={true}
                            >
                                You spent Rp 32.000 for Coffe Cetar back Tugu Sentral
                            </NotifyTitle>
                            <Subtitle>Buy drink</Subtitle>
                        </View>
                        <Buy width={30} height={30} />
                    </NotificationContainer>
                </RecentNotifications>
            </Container>
        </>
    );
}

export default Notification;
