import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@store/store';
import {FlexContainer, LighterIconWrapper, MutedIcon} from '@components/index';
import {SubMenuNav} from '@components/Navbar/components/index';
import {HamburgerContainer, SubMenuTrigger} from '@components/Navbar/styles';
import {SearchingNavbar} from '@components/Navbar/components/SearchingNavbar/SearchingNavbar';
import {toggleDarkMode} from '@store/index';
import {NavbarIconsProps} from '@components/Navbar/components/interfaces';

export const NavbarIcons: React.FC<NavbarIconsProps> = ({isMenuOpen, setIsMenuOpen}) => {
    const dispatch: AppDispatch = useDispatch();
    const {isDarkMode} = useSelector((state: RootState) => state.darkMode);

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
                    <MutedIcon
                        className={isDarkMode ? 'fa-regular fa-sun' : 'fa-solid fa-moon'}
                        FontSize="1rem"
                    />
                </LighterIconWrapper>
                <SubMenuTrigger
                    Position="relative"
                    Height="35px"
                    Padding="0.5rem 0.75rem"
                    AlignItems="center"
                    BorderRadius="0.75rem"
                    Cursor="pointer"
                >
                    <MutedIcon className="fa-solid fa-user" FontSize="1rem" />
                    <SubMenuNav />
                </SubMenuTrigger>
            </FlexContainer>
            <HamburgerContainer
                Padding="0.5rem 0.75rem"
                BorderRadius="0.75rem"
                Height="35px"
                AlignItems="center"
                Cursor="pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <MutedIcon
                    className={isMenuOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars'}
                    FontSize="1rem"
                />
            </HamburgerContainer>
        </FlexContainer>
    );
};
