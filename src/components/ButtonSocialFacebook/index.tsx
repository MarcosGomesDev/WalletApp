import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import { Button, IconFacebook, Title} from './styles';


interface Props {
    title: String;
    iconName: React.ComponentProps<typeof Icon>["name"]
}

const ButtonSocialFacebook: React.FC<Props> = ({title, iconName}) => {
    return (
        <Button>
            <IconFacebook name={iconName} />
            <Title>{title}</Title>
        </Button>
    );
}

export {ButtonSocialFacebook};
