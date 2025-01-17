import styled from "styled-components";
import { BaseContainer } from "../FlexContainer";

export const Container = styled(BaseContainer)`
    max-width: ${(props) => props.theme.widths.sectionMaxWidth || props.MaxWidth};
    padding: ${(props) => props.theme.paddings.sectionContainer || props.Padding};
    margin: ${(props) => props.theme.margins.sectionContainer || props.Margin};
    background-color: ${(props) => props.BackgroundColor || 'transparent'};
`;