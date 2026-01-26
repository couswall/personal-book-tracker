import {useRef, useState} from 'react';
import {Container} from '@components/Containers';
import {FlexContainer} from '@components/FlexContainer';
import {NavbarStyled} from '@components/Navbar/styles';
import {NavbarItems, NavbarIcons} from '@components/Navbar/components';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
    const searchBarRef = useRef<HTMLDivElement | null>(null);

    return (
        <NavbarStyled
            Height="80px"
            Width="100%"
            AlignItems="center"
            JustifyContent="space-between"
            Position="relative"
            BackgroundColorVariant="tertiary"
        >
            <Container Width="100%">
                <FlexContainer
                    BackgroundColor="inherit"
                    JustifyContent="space-between"
                    AlignItems="center"
                    Gap="16px"
                >
                    <NavbarItems
                        showSearchInput={showSearchInput}
                        setShowSearchInput={setShowSearchInput}
                        searchBarRef={searchBarRef}
                        isMenuOpen={isMenuOpen}
                    />
                    <NavbarIcons isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </FlexContainer>
            </Container>
        </NavbarStyled>
    );
};
