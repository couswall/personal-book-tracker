import styled from "styled-components";

interface ITypographyProps {
    FontSize?: string;
    FontWeight?: string;
    FontColor?: string;
    FontFamily?: string;
    LineHeight?: string;
    TextAlign?: string;
    Margin?: string;
    Padding?: string;
    Cursor?:string;
}

export const TitleH1 = styled.h1<ITypographyProps>`
    font-size: ${(props) => props.FontSize || "2rem"};
    font-weight: ${(props) => props.FontWeight || "bold"};
    color: ${(props) => props.FontColor || "inherit"};
    font-family: ${(props) => props.FontFamily || "Inter"};
    line-height: ${(props) => props.LineHeight || "1.5"};
    text-align: ${(props) => props.TextAlign || "left"};
    margin: ${(props) => props.Margin || "0"};
    padding: ${(props) => props.Padding || "0"};
`;

export const TitleH2 = styled.h2<ITypographyProps>`
    font-size: ${(props) => props.FontSize || "1.75rem"};
    font-weight: ${(props) => props.FontWeight || "bold"};
    color: ${(props) => props.FontColor || "inherit"};
    font-family: ${(props) => props.FontFamily || "Inter"};
    line-height: ${(props) => props.LineHeight || "1.5"};
    text-align: ${(props) => props.TextAlign || "left"};
    margin: ${(props) => props.Margin || "0"};
    padding: ${(props) => props.Padding || "0"};
`;

export const TitleH3 = styled.h3<ITypographyProps>`
    font-size: ${(props) => props.FontSize || "1.5rem"};
    font-weight: ${(props) => props.FontWeight || "bold"};
    color: ${(props) => props.FontColor || "inherit"};
    font-family: ${(props) => props.FontFamily || "Inter"};
    line-height: ${(props) => props.LineHeight || "1.5"};
    text-align: ${(props) => props.TextAlign || "left"};
    margin: ${(props) => props.Margin || "0"};
    padding: ${(props) => props.Padding || "0"};
`;

export const TitleH4 = styled.h4<ITypographyProps>`
    font-size: ${(props) => props.FontSize || "1.25rem"};
    font-weight: ${(props) => props.FontWeight || "bold"};
    color: ${(props) => props.FontColor || "inherit"};
    font-family: ${(props) => props.FontFamily || "Inter"};
    line-height: ${(props) => props.LineHeight || "1.5"};
    text-align: ${(props) => props.TextAlign || "left"};
    margin: ${(props) => props.Margin || "0"};
    padding: ${(props) => props.Padding || "0"};
`;

export const Paragraph = styled.p<ITypographyProps>`
    font-size: ${(props) => props.FontSize || "1rem"};
    font-weight: ${(props) => props.FontWeight || "normal"};
    color: ${(props) => props.FontColor || "inherit"};
    font-family: ${(props) => props.FontFamily || "Inter"};
    line-height: ${(props) => props.LineHeight || "1.5"};
    text-align: ${(props) => props.TextAlign || "left"};
    margin: ${(props) => props.Margin || "0"};
    padding: ${(props) => props.Padding || "0"};
    cursor: ${(props) => props.Cursor};
`;