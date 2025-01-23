import { useNavigate } from "react-router"
import { Container } from "../Containers"
import { FlexContainer } from "../FlexContainer"
import { TitleH1 } from "../Typography"
import {NavbarStyled} from "./styles"
import { useState } from "react"
import { NavbarItems, SearchBarNav } from "./components"

export const Navbar = () => {
    const navigate = useNavigate();
    const [showSearchInput, setShowSearchInput] = useState<boolean>(false);

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
                    Gap="16px"
                >
                    <TitleH1 
                        FontSize="1.5rem" 
                        Cursor="pointer"
                        onClick={() => navigate('/')}
                        FontColor='#FFFFFE'
                        Width="max-content"
                    >
                        {'Book Tracker'}
                    </TitleH1>
                    
                    <NavbarItems
                        showSearchInput={showSearchInput} 
                        setShowSearchInput={setShowSearchInput}
                    />
                </FlexContainer>
                <SearchBarNav 
                    showSearchInput={showSearchInput} 
                    setShowSearchInput={setShowSearchInput}
                />
            </Container>
        </NavbarStyled>
    )
}
