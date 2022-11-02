import { useTheme } from "styled-components";

const {COLORS} = useTheme()

interface ButtonStyle {
    button: {
        backgroundColor: string;
        borderWidth?: number;
        borderColor?: string
    };
    title: {
        color: string;
    };
    icon: {
        color: string
    }
}

export interface ButtonVariant {
    enabled: ButtonStyle;
    disabled: ButtonStyle;
}

const buttonPrimary: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: COLORS.PRIMARY,
        },
        title: {
            color: COLORS.WHITE,
        },
        icon: {
            color: COLORS.WHITE
        }
    },
    disabled: {
        button: {
            backgroundColor: COLORS.GRAY_100,
        },
        title: {
            color: COLORS.WHITE,
        },
        icon: {
            color: COLORS.WHITE
        }
    },
};

const buttonOutLine: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderColor: COLORS.PRIMARY,
        },
        title: {
            color: COLORS.GRAY1,
        },
        icon: {
            color: COLORS.GRAY1,
        }
    },
    disabled: {
        button: {
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderColor: COLORS.PRIMARY,
        },
        title: {
            color: COLORS.GRAY_100,
        },
        icon: {
            color: COLORS.GRAY_100,
        }
    },
};

const buttonBlack: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: COLORS.BLACK,
        },
        title: {
            color: COLORS.ORANGE_300,
        },
        icon: {
            color: COLORS.ORANGE_300,
        }
    },
    disabled: {
        button: {
            backgroundColor: COLORS.GRAY_100,
        },
        title: {
            color: COLORS.WHITE,
        },
        icon: {
            color: COLORS.WHITE,
        }
    }
};

export const variants = {
    primary: buttonPrimary,
    outline: buttonOutLine,
    black: buttonBlack
}
