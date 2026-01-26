import {useDispatch, useSelector} from 'react-redux';
import {useLocation, useNavigate} from 'react-router';
import React, {useRef} from 'react';
import {AppDispatch, RootState} from '@store/store';
import {FlexContainer, TitleH1, LightIcon, LogoIcon} from '@components/index';
import {NavbarElement, NavbarLink, NavbarList} from '@components/Navbar/styles';
import {useClickOutside} from '@components/Navbar/hooks/useClickOutside';
import {toggleDarkMode} from '@store/index';
import {navbarRoutes} from '@components/Navbar/constants';
import {NavbarItemsProps} from '@components/Navbar/components/interfaces';
import {LOGIN_PAGE} from '@pages/Login/constants';

export const NavbarItems: React.FC<NavbarItemsProps> = ({
    setShowSearchInput,
    searchBarRef,
    isMenuOpen,
}) => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const dispatch: AppDispatch = useDispatch();
    const {isDarkMode} = useSelector((state: RootState) => state.darkMode);
    const searchBtnRef = useRef<HTMLDivElement | null>(null);
    useClickOutside([searchBtnRef, searchBarRef], () => setShowSearchInput(false));

    return (
        <FlexContainer BackgroundColor="inherit" AlignItems="center" Gap="1.75rem">
            <FlexContainer
                BackgroundColor="inherit"
                AlignItems="center"
                Gap="0.5rem"
                Width="fit-content"
                Cursor="pointer"
                onClick={() => navigate('/')}
            >
                <LogoIcon size="31px" />
                <TitleH1 FontSize="1.25rem" FontWeight="700">
                    {LOGIN_PAGE.BOOK_TRACKER}
                </TitleH1>
            </FlexContainer>
            <NavbarList className={isMenuOpen ? 'show-menu' : ''}>
                {navbarRoutes.map((item, index) => (
                    <NavbarElement key={index} onClick={() => navigate(item.route)}>
                        <NavbarLink
                            FontWeight="500"
                            FontSize="1rem"
                            variant={pathname === item.route ? 'accent' : 'muted'}
                        >
                            {item.label}
                        </NavbarLink>
                    </NavbarElement>
                ))}
                <LightIcon
                    className="fa-solid fa-magnifying-glass"
                    FontSize="1rem"
                    Cursor="pointer"
                    Display="none"
                    LgDisplay="block"
                />
                <LightIcon
                    className={isDarkMode ? 'fa-regular fa-sun' : 'fa-solid fa-moon'}
                    Cursor="pointer"
                    FontSize="1rem"
                    Display="none"
                    LgDisplay="block"
                    onClick={() => dispatch(toggleDarkMode())}
                />
                <LightIcon
                    className="fa-solid fa-user"
                    FontSize="1rem"
                    Cursor="pointer"
                    Display="none"
                    LgDisplay="block"
                />
            </NavbarList>
        </FlexContainer>
    );
};
