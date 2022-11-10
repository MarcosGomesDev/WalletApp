import React from 'react';
import { View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useTheme } from 'styled-components';

import { Button, IconContainer, ViewRight, Title } from './styles';

interface ButtonProps {
    title: string;
    iconName?: React.ComponentProps<typeof Ionicons>["name"],
    icon?: boolean,
    onPress: () => void;
}

const ButtonOption: React.FC<ButtonProps> = ({
    title,
    iconName,
    icon,
    onPress = () => {},
}) => {
    const { COLORS } = useTheme()

    return (
        <Button onPress={onPress}>
            {icon && (
                <IconContainer>
                    <Ionicons name={iconName} size={30} color={COLORS.PURPLEDARK3} />
                </IconContainer>
            )}
            <ViewRight>
                <Title>{title}</Title>
                <Ionicons name="chevron-forward-outline" size={28} color={COLORS.PURPLEDARK3} />
            </ViewRight>
        </Button>
    );
}

export default ButtonOption;
