import styled from "styled-components";
import { BaseContainer } from "../FlexContainer";

interface IInputProps {
    error?: string | boolean;
    FontSize?: string;
    FontColor?: string;
    FontFamily?: string;
    BackgroundColor?: string;
    Width?: string;
    Height?: string;
    Padding?: string;
    Margin?: string;
    MaxWidth?:string;
    Border?: string;
    BorderRadius?: string;
    Outline?: string;
    MediumWidth?:string;
    SmallWidth?:string;
    XSmallWidth?: string;
    LightColor?: boolean;
    PHColor?: string;
}

export const Input = styled.input<IInputProps>`
    font-size: ${(props) => props.FontSize || '1rem'};
    color: ${(props) => props.theme.colors.themeText || props.FontColor};
    font-family: ${(props) => props.FontFamily || 'Inter'};
    width: ${(props) => props.Width || 'auto'};
    height: ${(props) => props.Height || 'auto'};
    background-color: ${(props) => props.theme.colors.inputBackground || props.BackgroundColor};
    padding: ${(props) => props.Padding || '0'};
    margin: ${(props) => props.Margin || '0'};
    max-width: ${(props) => props.MaxWidth};
    border: ${(props) => 
        props.error ? '2px solid red' : props.Border || '1px solid #ccc'};
    border-radius: ${(props) => props.BorderRadius || '4px'};
    box-sizing: border-box;
    outline: ${(props) => props.Outline || 'none'};
    
    &::placeholder{
        color: ${(props) => props.LightColor ? props.theme.colors.lightColor : props.PHColor};

    }
    
    @media(max-width: 991.98px){
        width: ${(props) => props.MediumWidth};
    }

    @media (max-width: 575.98px){
        width: ${(props) => props.XSmallWidth};
    }

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

export const InputContainer = styled(BaseContainer)`
    background-color: ${(props) => props.theme.colors.inputBackground};
`;