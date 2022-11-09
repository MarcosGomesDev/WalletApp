import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import { Container, Button} from './styles';

const GoBackButton: React.FC = () => {
    const {COLORS} = useTheme()
    const navigation = useNavigation()

    return (
        <Container>
            <Button onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back-outline" size={32} color={COLORS.PURPLEDARK3} />
            </Button>
        </Container>
    );
}

export default GoBackButton;
