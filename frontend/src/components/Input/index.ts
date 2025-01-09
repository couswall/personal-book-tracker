import styled from "styled-components";

interface IInputProps {
    error?: string | boolean;
    FontSize?: string;
    FontColor?: string;
    FontFamily?: string;
    Width?: string;
    Height?: string;
    Padding?: string;
    Margin?: string;
    Border?: string;
    BorderRadius?: string;
    Outline?: string;
}

export const Input = styled.input<IInputProps>`
    font-size: ${(props) => props.FontSize || '1rem'};
    color: ${(props) => props.FontColor || 'inherit'};
    font-family: ${(props) => props.FontFamily || 'Inter'};
    width: ${(props) => props.Width || 'auto'};
    height: ${(props) => props.Height || 'auto'};
    padding: ${(props) => props.Padding || '0'};
    margin: ${(props) => props.Margin || '0'};
    border: ${(props) => 
        props.error ? '2px solid red' : props.Border || '1px solid #ccc'};
    border-radius: ${(props) => props.BorderRadius || '4px'};
    box-sizing: border-box;
    outline: ${(props) => props.Outline || 'none'};
`;

interface ILabelProps {
    FontSize?: string;
    FontWeight?: string;
    FontColor?: string;
    FontFamily?: string;
    LineHeight?: string;
    TextAlign?: string;
    Margin?: string;
    Padding?: string;
}

export const Label = styled.label<ILabelProps>`
    font-size: ${(props) => props.FontSize || "1rem"};
    font-weight: ${(props) => props.FontWeight || "normal"};
    color: ${(props) => props.FontColor || "inherit"};
    font-family: ${(props) => props.FontFamily || "Inter"};
    line-height: ${(props) => props.LineHeight || "1.5"};
    text-align: ${(props) => props.TextAlign || "left"};
    margin: ${(props) => props.Margin || "0"};
    padding: ${(props) => props.Padding || "0"};
`;