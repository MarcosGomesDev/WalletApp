import React from 'react';
import { Text, TextProps } from 'react-native';
import { Button, IconGoogle, Title} from './styles';

import ImageGoogle from '../../assets/google.png'

interface Props extends TextProps {
    title: String;
}

const ButtonSocialGoogle: React.FC<Props> = ({title}) => {
    return (
        <Button>
            <IconGoogle source={ImageGoogle} resizeMode="contain" />
            <Title>{title}</Title>
        </Button>
    );
}

export {ButtonSocialGoogle};
