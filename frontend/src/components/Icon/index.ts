import styled from "styled-components";

interface IconProps {
    FontColor?: string;
    FontSize?: string;
    Padding?: string;
    Margin?: string;
}

export const Icon = styled.i<IconProps>`
    color: ${(props) => props.FontColor || "inherit"};
    font-size: ${(props) => props.FontSize || "0.875rem"};
    margin: ${(props) => props.Margin || "0"};
    padding: ${(props) => props.Padding || "0"};
`;