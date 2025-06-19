import { useNavigate } from "react-router"
import { useRef, useState } from "react"
import { Container } from "@components/Containers"
import { FlexContainer } from "@components/FlexContainer"
import { TitleH1 } from "@components/Typography"
import {NavbarStyled} from "@components/Navbar/styles"
import { NavbarItems, SearchBarNav } from "@components/Navbar/components"

export const Navbar = () => {
    const navigate = useNavigate();
    const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
    const searchBarRef = useRef<HTMLDivElement | null>(null);

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
                        searchBarRef={searchBarRef}
                    />
                </FlexContainer>
                <SearchBarNav 
                    showSearchInput={showSearchInput} 
                    setShowSearchInput={setShowSearchInput}
                    searchBarRef={searchBarRef}
                />
            </Container>
        </NavbarStyled>
    )
}
