import styled from "styled-components";
import { FlexContainer } from "../FlexContainer";
import { Paragraph, TitleH4 } from "../Typography";

export const NavbarStyled = styled(FlexContainer).attrs({as: 'nav'})`
    background-color: ${(props) => props.theme.colors.primaryColor};
`;

export const NavbarList = styled.ul`
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: inherit;
    gap: 1.5rem;
    
    @media (max-width: 991.98px) {
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

    @media (max-width: 575.98px) {
        display: flex;
    }
`;

export const NavbarLink = styled(TitleH4).attrs({as: 'p'})`
    transition: all 0.3s ease-out;

    &:hover {
        opacity: 0.6;
    }
    @media (max-width: 575.98px) {

    }
`;

export const HamburgerContainer = styled(FlexContainer)`
    display: none;
    
    @media (max-width: 991.98px) {
        display: flex;
        justify-content: start;
        align-items: start;
        background-color: inherit;
        gap: 1.5rem;
    }
`;

export const SearchBarContainer = styled(FlexContainer)`
    background-color: ${(props) => props.theme.colors.searchBarContainer};
    
    padding:0;
    height: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-out;

    &.expand-search-bar{
        padding: 1.5rem;
        height: max-content;
        opacity: 0.9;
        visibility: visible;
    }
`;

export const SubMenuContainer = styled(FlexContainer)`
    background-color: ${(props) => props.theme.colors.primaryColor};
`;

export const SubMenuLink = styled(Paragraph)`
    &:hover {
        text-decoration: underline;
    }
`;