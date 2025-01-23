import styled from "styled-components";

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
    BorderRadius?: string;
    Outline?: string;
    Cursor?: string;
    DisabledBackGC?: string;
    DisabledFontColor?: string;
};

export const Button = styled.button<ButtonProps>`
    font-family: ${(props) => props.FontFamily || props.theme.fonts.inter};
    font-size: ${(props) => props.FontSize || '1rem'};
    color: ${(props) => props.FontColor || '#FFF'};
    background-color: ${(props) => props.BackGroundColor || props.theme.colors.primaryColor};
    height: ${(props) => props.Height || '50px'};
    border: ${(props) => props.Border || 'none'};
    border-radius: ${(props) => props.BorderRadius || '1rem'};
    padding: ${(props) => props.Padding || '0 20px'};
    outline: ${(props) => props.Outline || 'none'};
    cursor: ${(props) => props.Cursor || 'pointer'};

    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${(props) => props.HBackGColor || props.theme.colors.primaryLight};
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