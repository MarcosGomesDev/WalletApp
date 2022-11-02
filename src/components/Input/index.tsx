import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, InputContainer } from './styles'
import {useTheme} from 'styled-components'
import {TextInputProps, TouchableOpacity} from 'react-native'

interface InputProps extends TextInputProps {
    LeftIcon?: boolean;
    iconName: keyof typeof Icon.getRawGlyphMap;
    iconSize?: number;
    iconColor?: string;
    secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({
    LeftIcon,
    iconName,
    iconSize,
    iconColor,
    secureTextEntry,
    ...rest}) => {

    const {COLORS} = useTheme()

    const [secureEntry, setSecureEntry] = useState(secureTextEntry)

    console.log(secureEntry)
    return (
        <Container>
            {LeftIcon && (
                <Icon
                    name={iconName}
                    size={iconSize}
                    color={iconColor || COLORS.GRAY2}
                    style={{padding: 5}}
                />
            )}
            <InputContainer
                {...rest}
                secureTextEntry={secureEntry}
                underlineColorAndroid="transparent"
                placeholderTextColor={COLORS.GRAY3}
            />
            {secureTextEntry && (
                <TouchableOpacity
                    onPress={() => {setSecureEntry(!secureEntry)}}
                >
                    <Icon
                        name={secureEntry ? "eye" : "eye-off" }
                        size={iconSize}
                        color={iconColor || COLORS.GRAY2}
                        style={{padding: 5}}
                    />
                </TouchableOpacity>
            )}
        </Container>
    )
}

export default Input
