import styled from 'styled-components';
import {FlexContainer, TitleH4, LighterIconWrapper, Input} from '@components/index';

export const NavbarStyled = styled(FlexContainer).attrs({as: 'nav'})`
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
`;

export const NavbarList = styled.ul`
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: inherit;
    gap: 1.5rem;

    @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
        opacity: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 80px;
        left: 0;
        background-color: ${(props) => props.theme.colors.primaryColor};
        width: 100%;
        height: 0px;
        padding: 0px 0px;
        visibility: hidden;
        overflow: hidden;
        transition: all 0.2s ease-out;

        &.show-menu {
            opacity: 1;
            height: max-content;
            padding: 1rem 0;
            visibility: visible;
            overflow: auto;
            transition: all 0.2s ease-in;
        }
    }
`;

export const NavbarElement = styled.li`
    list-style: none;
    background-color: inherit;
    cursor: pointer;

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
        display: flex;
    }
`;

export const NavbarLink = styled(TitleH4).attrs({as: 'p'})`
    transition: all 0.3s ease-out;

    &:hover {
        color: ${(props) => props.theme.colors.text.accent};
    }
`;

export const HamburgerContainer = styled(LighterIconWrapper)`
    display: none;

    @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
        display: flex;
    }
`;

export const SearchBarContainer = styled(FlexContainer)`
    background-color: ${(props) => props.theme.colors.backgroundTertiary};

    padding: 0;
    height: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-out;

    &.expand-search-bar {
        padding: 1.5rem;
        height: max-content;
        opacity: 0.9;
        visibility: visible;
    }
`;

export const SubMenuContainer = styled(FlexContainer)`
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition:
        opacity 0.2s ease,
        transform 0.2s ease,
        visibility 0.2s ease;
    pointer-events: none;
`;

export const SubMenuTrigger = styled(LighterIconWrapper)`
    &:hover::after {
        content: '';
        position: absolute;
        top: 100%;
        right: 0;
        width: 250px;
        height: 20px;
    }

    &:hover ${SubMenuContainer} {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
        pointer-events: auto;
    }
`;

export const SearchInputWrapper = styled(FlexContainer)`
    background-color: ${(props) =>
        props.BackgroundColor || props.theme.colors.input.inputBackground};

    @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
        cursor: pointer;
    }
`;

export const SearchInputNavbar = styled(Input)`
    @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
        display: none;
    }
`;
