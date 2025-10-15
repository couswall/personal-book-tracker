import {FormContainer, LightIcon} from '@components/index';
import {SearchInputWrapper, SearchInputNavbar} from '@components/Navbar/styles';

export const SearchingNavbar = () => {
    return (
        <>
            <FormContainer BackgroundColor="inherit">
                <SearchInputWrapper
                    Gap="0.5rem"
                    Padding="0.5rem 0.875rem"
                    AlignItems="center"
                    Width="100%"
                    BorderRadius="0.75rem"
                    Height="35px"
                >
                    <LightIcon className="fa-solid fa-magnifying-glass" FontSize="1rem" />
                    <SearchInputNavbar
                        placeholder="Search books"
                        Height="100%"
                        BackgroundColor="transparent"
                        Border="unset"
                    />
                </SearchInputWrapper>
            </FormContainer>
        </>
    );
};
