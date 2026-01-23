import styled from 'styled-components';

interface ButtonProps {
    Width?: string;
    Height?: string;
    Margin?: string;
    Padding?: string;
    BackGroundColor?: string;
    HBackGColor?: string;
    Border?: string;
    FontSize?: string;
    FontFamily?: string;
    FontWeight?: string;
    FontColor?: string;
    TextDecoration?: string;
    HTextDecoration?: string;
    BorderRadius?: string;
    Outline?: string;
    Cursor?: string;
    DisabledBackGC?: string;
    DisabledFontColor?: string;
    Flex?: string;
    MaxWidth?: string;
}

export const Button = styled.button<ButtonProps>`
    font-family: ${(props) => props.FontFamily || props.theme.fonts.lexend};
    font-size: ${(props) => props.FontSize || '1rem'};
    font-weight: ${(props) => props.FontWeight || '400'};
    color: ${(props) => props.FontColor || '#FFF'};
    background-color: ${(props) => props.BackGroundColor || props.theme.colors.primaryColor};
    height: ${(props) => props.Height || '50px'};
    width: ${(props) => props.Width || '100%'};
    border: ${(props) => props.Border || 'none'};
    border-radius: ${(props) => props.BorderRadius || '1rem'};
    padding: ${(props) => props.Padding || '0 20px'};
    outline: ${(props) => props.Outline || 'none'};
    cursor: ${(props) => props.Cursor || 'pointer'};
    text-decoration: ${(props) => props.TextDecoration || 'none'};
    flex: ${(props) => props.Flex};
    max-width: ${(props) => props.MaxWidth};

    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${(props) => props.HBackGColor || props.theme.colors.primaryLight};
        text-decoration: ${(props) => props.HTextDecoration || 'none'};
    }

    &:disabled {
        background-color: ${(props) => props.DisabledBackGC || props.theme.colors.disabledButton};
        color: ${(props) => props.DisabledFontColor || props.theme.colors.darkGrey};
        cursor: not-allowed;
    }
`;

export const ButtonSecondary = styled(Button)`
    background-color: ${(props) => props.BackGroundColor || props.theme.colors.secondaryColor};
`;

export const ButtonTransparent = styled(Button)`
    background-color: transparent;
    color: ${(props) => props.FontColor || props.theme.colors.text.theme};

    &:hover {
        background-color: transparent;
    }
`;
