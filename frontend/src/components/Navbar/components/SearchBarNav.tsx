import { useSelector } from 'react-redux'
import React from 'react'
import { FormContainer } from '@components/FlexContainer'
import { SearchBarContainer } from '@components/Navbar/styles'
import { Input, InputContainer } from '@components/Input'
import { Icon } from '@components/Icon'
import { RootState } from '@store/store'
import { SearchBarNavProps } from '@components/Navbar/components/interfaces'

export const SearchBarNav: React.FC<SearchBarNavProps> = ({showSearchInput, setShowSearchInput, searchBarRef}) => {
    const {isDarkMode} = useSelector((state: RootState) => state.darkMode);
    return (
    <>
        <SearchBarContainer
            Width="100%"
            Position="absolute"
            JustifyContent="center"
            Top="80px"
            Left="0"
            className={showSearchInput ? 'expand-search-bar' : ''}
            ref={searchBarRef}
        >
            <FormContainer 
                Height="100%" 
                Width='100%' 
                BorderRadius="0.5rem" 
                MaxWidth="800px"
            >
                <InputContainer 
                    Padding="0.5rem 1rem" 
                    Gap="0.5rem" 
                    AlignItems="center"
                    BorderRadius="0.5rem"
                    Width="100%"
                >
                    <Input
                        placeholder="Search books"
                        Height="100%"
                        Width="calc(100% - 1rem)"
                        Border="none"
                    />
                    <Icon
                        className="fa-solid fa-solid fa-x" 
                        FontSize="1rem"
                        Cursor="pointer"
                        LightColor={isDarkMode}
                        onClick={() => setShowSearchInput(!showSearchInput)}
                    />
                </InputContainer>
            </FormContainer>
        </SearchBarContainer>
    </>
  )
}
