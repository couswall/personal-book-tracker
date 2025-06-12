import styled from "styled-components";

interface IBaseContainerProps {
    Width?: string;
    MaxWidth?: string;
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
    Cursor?: string; 
    Position?: string;
    Top?: string;
    Right?: string;
    Bottom?: string;
    Left?: string;
    BorderTop?:string;
    SmallPadding?: string;
    SmallFlexDir?: string;
}

export const BaseContainer = styled.div<IBaseContainerProps>`
    width: ${(props) => props.Width};
    height: ${(props) => props.Height};
    max-width: ${(props) => props.MaxWidth};
    min-height: ${(props) => props.MinHeight};
    padding: ${(props) => props.Padding || "0"};
    margin: ${(props) => props.Margin || "0"};
    margin-bottom: ${(props) => props.MarginBottom};
    background-color: ${(props) => props.BackgroundColor ? props.BackgroundColor : props.theme.colors.background};
    border: ${(props) => props.Border || "none"};
    border-bottom: ${(props) => props.BorderBottom};
    border-top: ${(props) => props.BorderTop};
    border-radius: ${(props) => props.BorderRadius || "0"};
    display: ${(props) => props.Display};
    flex-direction: ${(props) => props.FlexDirection};
    align-items: ${(props) => props.AlignItems};
    justify-content: ${(props) => props.JustifyContent};
    gap: ${(props) => props.Gap};
    box-sizing: border-box;
    box-shadow: ${(props) => props.BoxShadow};
    margin-top: ${(props) => props.MarginTop};
    cursor: ${(props) => props.Cursor};
    position: ${(props) => props.Position};
    top: ${(props) => props.Top};
    bottom: ${(props) => props.Bottom};
    left: ${(props) => props.Left};
    right: ${(props) => props.Right};

    @media (max-width: 575.98px) {
        padding: ${(props) => props.SmallPadding};
    }
`;

export const FlexContainer = styled(BaseContainer)`
    display: ${(props) => props.Display || "flex"};
    flex-direction: ${(props) => props.FlexDirection || "row"};
    align-items: ${(props) => props.AlignItems || "stretch"};
    justify-content: ${(props) => props.JustifyContent || "flex-start"};
    gap: ${(props) => props.Gap};

    @media (max-width: 575.98px) {
        flex-direction: ${(props) => props.SmallFlexDir};
    }
`;

export const FormContainer = styled(BaseContainer).attrs({as: 'form'})``;