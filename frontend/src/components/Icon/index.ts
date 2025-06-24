import styled from "styled-components";

interface IconProps {
    FontColor?: string;
    FontSize?: string;
    Padding?: string;
    Margin?: string;
    Cursor?: string;
    
}

export const Icon = styled.i<IconProps>`
    color: ${(props) => props.FontColor || props.theme.colors.primaryColor};
    font-size: ${(props) => props.FontSize || "0.875rem"};
    margin: ${(props) => props.Margin || "0"};
    padding: ${(props) => props.Padding || "0"};
    cursor: ${(props) => props.Cursor};
`;

export const LightIcon = styled(Icon)`
    color: ${(props) => props.theme.colors.lightColor};
`;

export const DarkGreyIcon = styled(Icon)`
    color: ${(props) => props.theme.colors.darkGrey};
`;

export const ErrorIcon = styled(Icon)`
    color: ${(props) => props.theme.colors.input.errorMsgText};
`;