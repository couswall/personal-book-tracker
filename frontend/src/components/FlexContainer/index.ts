import styled from "styled-components";

interface IBaseContainerProps {
    Width?: string;
    Height?: string;
    MinHeight?: string;
    Padding?: string;
    Margin?: string;
    MarginBottom?: string;
    BackgroundColor?: string;
    Border?: string;
    BorderBottom?: string;
    BorderRadius?: string;
    Display?: string;
    FlexDirection?: string;
    AlignItems?: string;
    JustifyContent?: string;
    Gap?: string;
    BoxShadow?: string;
    MarginTop?:string;
    SmallPadding?: string;
}

export const BaseContainer = styled.div<IBaseContainerProps>`
    width: ${(props) => props.Width || "auto"};
    height: ${(props) => props.Height || "auto"};
    min-height: ${(props) => props.MinHeight || 'auto'};
    padding: ${(props) => props.Padding || "0"};
    margin: ${(props) => props.Margin || "0"};
    margin-bottom: ${(props) => props.MarginBottom};
    background-color: ${(props) => props.theme.colors.lightColor || props.BackgroundColor};
    border: ${(props) => props.Border || "none"};
    border-bottom: ${(props) => props.BorderBottom || 'none'};
    border-radius: ${(props) => props.BorderRadius || "0"};
    display: ${(props) => props.Display};
    flex-direction: ${(props) => props.FlexDirection};
    align-items: ${(props) => props.AlignItems};
    justify-content: ${(props) => props.JustifyContent};
    gap: ${(props) => props.Gap};
    box-sizing: border-box;
    box-shadow: ${(props) => props.BoxShadow};
    margin-top: ${(props) => props.MarginTop};

    @media (max-width: 575.98px) {
        padding: ${(props) => props.SmallPadding};

    }
`;

export const FlexContainer = styled(BaseContainer)`
    display: ${(props) => props.Display || "flex"};
    flex-direction: ${(props) => props.FlexDirection || "row"};
    align-items: ${(props) => props.AlignItems || "stretch"};
    justify-content: ${(props) => props.JustifyContent || "flex-start"};
    gap: ${(props) => props.Gap || "0"};
`;

export const FormContainer = styled(BaseContainer).attrs({as: 'form'})``;