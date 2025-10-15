import styled from 'styled-components';
import {BaseContainer} from '@components/FlexContainer/index';

interface IconProps {
    FontColor?: string;
    FontSize?: string;
    Padding?: string;
    Margin?: string;
    MarginLeft?: string;
    Cursor?: string;
    Display?: string;
    LgDisplay?: string;
    SmDisplay?: string;
}

export const Icon = styled.i<IconProps>`
    color: ${(props) => props.FontColor || props.theme.colors.primaryColor};
    font-size: ${(props) => props.FontSize || '0.875rem'};
    margin: ${(props) => props.Margin || '0'};
    margin-left: ${(props) => props.MarginLeft || '0'};
    padding: ${(props) => props.Padding || '0'};
    cursor: ${(props) => props.Cursor};
    display: ${(props) => props.Display};

    @media (max-width: 991.98px) {
        display: ${(props) => props.LgDisplay};
    }

    @media (max-width: 575.98px) {
        padding: ${(props) => props.SmDisplay};
    }
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

export const LighterIconWrapper = styled(BaseContainer)`
    background-color: ${(props) => props.theme.colors.primaryLighter};
`;
