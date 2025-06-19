import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import React, { useRef, useState } from "react"
import { AppDispatch, RootState } from "@store/store";
import { FlexContainer } from "@components/FlexContainer";
import { HamburgerContainer, NavbarElement, NavbarLink, NavbarList } from "@components/Navbar/styles";
import { Icon } from "@components/Icon";
import { SubMenuNav } from "@components/Navbar/components/SubMenuNav";
import { useClickOutside } from "@components/Navbar/hooks/useClickOutside";
import { toggleDarkMode } from "@store/index";
import { navbarRoutes } from "@components/Navbar/constants";
import { NavbarItemsProps } from "@components/Navbar/components/interfaces";


export const NavbarItems: React.FC<NavbarItemsProps> = ({showSearchInput, setShowSearchInput, searchBarRef}) => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const {isDarkMode} = useSelector((state: RootState) => state.darkMode);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
    const subMenuBtnRef = useRef<HTMLDivElement | null>(null);
    const searchBtnRef = useRef<HTMLDivElement | null>(null);
    useClickOutside([subMenuBtnRef], () => setShowSubmenu(false));
    useClickOutside([searchBtnRef, searchBarRef], () => setShowSearchInput(false));
    return (
        <FlexContainer BackgroundColor="inherit" AlignItems="center" Gap="1rem">
            <NavbarList className={isMenuOpen ? 'show-menu' : ''}>
                {navbarRoutes.map((item, index) => (
                    <NavbarElement key={index} onClick={() => navigate(item.route)}>
                        <NavbarLink FontWeight="300" FontSize="1rem" FontColor='#FFFFFE'>
                            {item.label}
                        </NavbarLink>
                    </NavbarElement>
                ))}
            </NavbarList>
            <HamburgerContainer>
                {isMenuOpen ? (
                    <Icon
                        className="fa-solid fa-x" 
                        FontSize="1rem" 
                        LightColor={true}
                        Cursor="pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                ) : (
                    <Icon 
                        className="fa-solid fa-bars" 
                        FontSize="1rem" 
                        LightColor={true}
                        Cursor="pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                )}
            </HamburgerContainer>
            <FlexContainer 
                Width="1rem" 
                Height='1rem' 
                BackgroundColor="inherit" 
                Cursor="pointer" 
                AlignItems="center"
            >
                {(isDarkMode) ? (
                    <Icon 
                        className="fa-regular fa-sun" 
                        FontSize="1rem" 
                        LightColor={true}
                        onClick={() => dispatch(toggleDarkMode())}
                    />
                ) : (
                    <Icon 
                        className="fa-solid fa-moon" 
                        FontSize="1rem" 
                        LightColor={true}
                        onClick={() => dispatch(toggleDarkMode())}
                    />
                )}
            </FlexContainer>
            <FlexContainer 
                Width="1rem" 
                Height="1rem" 
                BackgroundColor="inherit" 
                Cursor="pointer" 
                AlignItems="center"
                onClick={() => setShowSearchInput(!showSearchInput)}
                ref={searchBtnRef}
            >
                <Icon 
                    className="fa-solid fa-magnifying-glass" 
                    FontSize="1rem"
                    Cursor="pointer"
                    LightColor={true}
                />
            </FlexContainer>
            <FlexContainer
                Width="1rem" 
                Height="1rem" 
                BackgroundColor="inherit" 
                AlignItems="center"
                Position="relative"
                onClick={() => setShowSubmenu(!showSubmenu)}
                ref={subMenuBtnRef}
            >
                <Icon 
                    className="fa-solid fa-user" 
                    FontSize="1rem"
                    Cursor="pointer"
                    LightColor={true}
                />
                {showSubmenu && <SubMenuNav/>}
            </FlexContainer>
        </FlexContainer>
)
}
