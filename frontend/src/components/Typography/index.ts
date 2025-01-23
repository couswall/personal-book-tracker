import styled from "styled-components";

interface ITypographyBaseProps {
    FontSize?: string;
    FontWeight?: string;
    FontColor?: string;
    FontFamily?: string;
    LineHeight?: string;
    TextAlign?: string;
    Margin?: string;
    Padding?: string;
    Cursor?:string;
    TextDecoration?:string;
    Width?: string;
    LightColor?: boolean;
    LetterSpacing?: string;
}

export const TypographyBase = styled.p<ITypographyBaseProps>`
    font-size: ${(props) => props.FontSize};
    font-weight: ${(props) => props.FontWeight || "normal"};
    color: ${(props) => props.LightColor 
                                ? props.theme.colors.lightColor
                                : props.FontColor || props.theme.colors.themeText};
    font-family: ${(props) => props.theme.fonts.inter || props.FontFamily};
    line-height: ${(props) => props.LineHeight || "1.5"};
    text-align: ${(props) => props.TextAlign || "left"};
    margin: ${(props) => props.Margin || "0"};
    padding: ${(props) => props.Padding || "0"};
    cursor: ${(props) => props.Cursor};
    text-decoration: ${(props) => props.TextDecoration};
    width: ${(props) => props.Width};
    letter-spacing: ${(props) => props.LetterSpacing};
`;

export const TitleH1 = styled(TypographyBase).attrs({as: 'h1'})`
    font-size: ${(props) => props.FontSize || "2rem"};
    font-weight: ${(props) => props.FontWeight || "bold"};
`;

export const TitleH2 = styled(TypographyBase).attrs({as: 'h2'})`
    font-size: ${(props) => props.FontSize || "1.75rem"};
    font-weight: ${(props) => props.FontWeight || "bold"};
`;

export const TitleH3 = styled(TypographyBase).attrs({as: 'h3'})`
    font-size: ${(props) => props.FontSize || "1.5rem"};
    font-weight: ${(props) => props.FontWeight || "bold"};
`;

export const TitleH4 = styled(TypographyBase).attrs({as: 'h4'})`
    font-size: ${(props) => props.FontSize || "1.25rem"};
    font-weight: ${(props) => props.FontWeight || "bold"};
`;

export const Paragraph = styled(TypographyBase)`
    font-size: ${(props) => props.FontSize || "1rem"};
`;