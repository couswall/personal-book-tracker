import {useDispatch, useSelector} from 'react-redux';
import {useRef, useState} from 'react';
import {AppDispatch, RootState} from '@store/store';
import {FlexContainer, LighterIconWrapper, LightIcon} from '@components/index';
import {SubMenuNav} from '@components/Navbar/components/index';
import {HamburgerContainer} from '@components/Navbar/styles';
import {SearchingNavbar} from '@components/Navbar/components/SearchingNavbar/SearchingNavbar';
import {toggleDarkMode} from '@store/index';
import {useClickOutside} from '@components/Navbar/hooks/useClickOutside';
import {NavbarIconsProps} from '@components/Navbar/components/interfaces';

export const NavbarIcons: React.FC<NavbarIconsProps> = ({isMenuOpen, setIsMenuOpen}) => {
    const dispatch: AppDispatch = useDispatch();
    const {isDarkMode} = useSelector((state: RootState) => state.darkMode);
    const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
    const subMenuBtnRef = useRef<HTMLDivElement | null>(null);
    useClickOutside([subMenuBtnRef], () => setShowSubmenu(false));

    return (
        <FlexContainer BackgroundColor="inherit" AlignItems="center" Gap="1rem">
            <FlexContainer
                LgDisplay="none"
                BackgroundColor="inherit"
                AlignItems="center"
                Gap="1rem"
            >
                <SearchingNavbar />
                <LighterIconWrapper
                    Height="35px"
                    AlignItems="center"
                    Padding="0.5rem 0.75rem"
                    Cursor="pointer"
                    BorderRadius="0.75rem"
                    onClick={() => dispatch(toggleDarkMode())}
                >
                    <LightIcon
                        className={isDarkMode ? 'fa-regular fa-sun' : 'fa-solid fa-moon'}
                        FontSize="1rem"
                    />
                </LighterIconWrapper>
                <LighterIconWrapper
                    Position="relative"
                    Height="35px"
                    Padding="0.5rem 0.75rem"
                    AlignItems="center"
                    BorderRadius="0.75rem"
                    Cursor="pointer"
                    onClick={() => setShowSubmenu(!showSubmenu)}
                    ref={subMenuBtnRef}
                >
                    <LightIcon className="fa-solid fa-user" FontSize="1rem" />
                    {showSubmenu && <SubMenuNav />}
                </LighterIconWrapper>
            </FlexContainer>
            <HamburgerContainer
                Padding="0.5rem 0.75rem"
                BorderRadius="0.75rem"
                Height="35px"
                AlignItems="center"
                Cursor="pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <LightIcon
                    className={isMenuOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars'}
                    FontSize="1rem"
                />
            </HamburgerContainer>
        </FlexContainer>
    );
};
