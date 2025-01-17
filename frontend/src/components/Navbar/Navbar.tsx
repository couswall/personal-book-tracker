import { useNavigate } from "react-router"
import { Container } from "../Containers"
import { FlexContainer } from "../FlexContainer"
import { TitleH1, TitleH4 } from "../Typography"
import { HamburgerContainer, NavbarElement, NavbarLink, NavbarList, NavbarStyled } from "./styles"
import { privateRoutes } from "../../routes/routes"
import { Icon } from "../Icon"
import { useState } from "react"

export const navbarRoutes = [
    {label: 'Home', route: '/'},
    {label: 'My Books', route: privateRoutes.MyBooks},
    {label: 'Browse', route: '/Browse'},
]

export const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const isDarkMode = false;
    return (
        <NavbarStyled
            Height="80px"
            Width="100%"
            AlignItems="center"
            JustifyContent="space-between"
            Position="relative"
        >
            <Container Width="100%" >
                <FlexContainer 
                    BackgroundColor="inherit" 
                    JustifyContent="space-between" 
                    AlignItems="center"
                    // Position="relative"
                >
                    <TitleH1 
                        FontSize="1.5rem" 
                        LightColor={true} 
                        Cursor="pointer"
                        onClick={() => navigate('/')}
                    >
                        {'Book Tracker'}
                    </TitleH1>
                    <NavbarList className={isMenuOpen ? 'show-menu' : ''}>
                        {navbarRoutes.map((item, index) => (
                            <NavbarElement key={index} onClick={() => navigate(item.route)}>
                                <NavbarLink LightColor={true} FontWeight="300" FontSize="1rem">
                                    {item.label}
                                </NavbarLink>
                            </NavbarElement>
                        ))}
                        {/* <NavbarElement>
                            {(isDarkMode) ? (
                                <Icon className="fa-regular fa-sun" FontSize="1rem" LightColor={true}/>
                            ) : (
                                <Icon className="fa-solid fa-moon" FontSize="1rem" LightColor={true}/>
                            )}
                        </NavbarElement> */}
                    </NavbarList>
                    <HamburgerContainer>
                        {isMenuOpen ? (
                            <Icon 
                                className="fa-solid fa-x" 
                                FontSize="1.5rem" 
                                LightColor={true}
                                Cursor="pointer"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            />
                        ) : (
                            <Icon 
                                className="fa-solid fa-bars" 
                                FontSize="1.5rem" 
                                LightColor={true}
                                Cursor="pointer"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            />
                        )}
                    </HamburgerContainer>
                </FlexContainer>
            </Container>
        </NavbarStyled>
    )
}
