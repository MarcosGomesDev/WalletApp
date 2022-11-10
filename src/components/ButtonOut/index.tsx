import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useTheme } from 'styled-components';

import { Button, IconContainer, Title } from './styles';

interface ButtonProps {
    title: String;
    onPress: () => void;
    iconName: React.ComponentProps<typeof Ionicons>["name"]
}

const ButtonOut: React.FC<ButtonProps> = ({
    title,
    onPress = () => {},
    iconName
}) => {
    const {COLORS} = useTheme()

    return (
        <>
        <Button onPress={onPress}>
            <IconContainer>
                <Ionicons name={iconName} size={34} color={COLORS.PURPLEDARK2} />
            </IconContainer>
        </Button>
        <Title>{title}</Title>
        </>
    );
}

export default ButtonOut;
