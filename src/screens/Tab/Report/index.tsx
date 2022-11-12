import React from 'react';
import { Text, View } from 'react-native';
import Header from 'components/Header';
import { Container } from './styles';

const Report: React.FC = () => {
    return (
        <>
            <Header
                iconLeft
                appName='Relatório'
                typeRelatorio
            />
            <Container>
                <Text>Notificação</Text>
            </Container>
        </>
    );
}

export default Report;
