import styled from "styled-components";

interface IconProps {
    FontColor?: string;
    FontSize?: string;
    Padding?: string;
    Margin?: string;
    Cursor?: string;
    LightColor?:boolean;
}

export const Icon = styled.i<IconProps>`
    color: ${(props) => props.LightColor ? props.theme.colors.lightColor : props.FontColor || "inherit"};
    font-size: ${(props) => props.FontSize || "0.875rem"};
    margin: ${(props) => props.Margin || "0"};
    padding: ${(props) => props.Padding || "0"};
    cursor: ${(props) => props.Cursor};
`;