import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import { AntDesign } from 'react-native-vector-icons'
import { useTheme } from 'styled-components';
import { variants } from './variant';
import { Container, Title, Content } from './styles';

interface ButtonProps {
    title: string;
    onPress: () => void;
    iconName?: keyof typeof AntDesign.glyphMap;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'outline' | 'black';
    style?: TouchableOpacityProps['style'];
}

const ButtonCustom: React.FC<ButtonProps> = ({
    title,
    onPress = () => { },
    isLoading,
    iconName,
    disabled,
    variant = 'primary',
    style
}) => {
    const {COLORS} = useTheme()
    const buttonVariant = variants[variant]
    const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled

    return (
        <Container
            onPress={onPress}
            disabled={isLoading || disabled}
            style={[buttonStyle.button, style]}
        >
            {isLoading ? (
                <ActivityIndicator color={COLORS.GRAY1} />
            ) : (
                <Content>
                    {iconName && (
                        <AntDesign
                            name={iconName}
                            size={25}
                            color={buttonStyle.icon.color}
                            style={{
                                marginRight: 15,
                            }}
                        />
                    )}
                </Content>
            )}
            <Title>{title}</Title>
        </Container>
    );
}

export default ButtonCustom;
