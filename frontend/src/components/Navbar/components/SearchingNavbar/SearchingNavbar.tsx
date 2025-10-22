import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router';
import {useDebounce} from '@components/Navbar/hooks/useDebounce';
import {FlexContainer, FormContainer, LightIcon, Paragraph} from '@components/index';
import {SearchInputWrapper, SearchInputNavbar} from '@components/Navbar/styles';
import {CoverBookImg} from '@pages/Book/components/index';
import {searchingBookMock} from '@components/Navbar/constants';

export const SearchingNavbar = () => {
    const {register, watch, reset} = useForm({defaultValues: {searchText: ''}});
    const searchText = watch('searchText');
    const navigate = useNavigate();
    const debouncedValue = useDebounce(searchText);
    const truncatedSearchText =
        debouncedValue.length > 18 ? debouncedValue.substring(0, 18) + '...' : debouncedValue;

    const handleSelectOption = (bookId: string) => {
        navigate(`/book/${bookId}`);
        reset();
    };

    return (
        <>
            <FormContainer BackgroundColor="inherit" Position="relative" Width="350px">
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
                        {...register('searchText')}
                    />
                </SearchInputWrapper>
                {debouncedValue.length > 3 && (
                    <FlexContainer
                        Position="absolute"
                        Width="350px"
                        Top="2.5rem"
                        FlexDirection="column"
                        Gap="0.5rem"
                        BorderRadius="1rem"
                        Overflow="hidden"
                        BoxShadow="rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
                        ZIndex="2"
                    >
                        {searchingBookMock.map((book) => (
                            <FlexContainer
                                key={book.id}
                                Gap="0.5rem"
                                Padding="0.5rem"
                                Cursor="pointer"
                                HBackgroundColor="rgba(112, 112, 112, 0.2)"
                                onClick={() => handleSelectOption(book.id)}
                            >
                                <CoverBookImg
                                    imgSrc={book.imageCover}
                                    width="50px"
                                    height="50px"
                                    flex="none"
                                />

                                <FlexContainer
                                    FlexDirection="column"
                                    Gap="0.25rem"
                                    Overflow="hidden"
                                    BackgroundColor="transparent"
                                >
                                    <Paragraph
                                        FontSize="0.875rem"
                                        FontWeight="600"
                                        WhiteSpace="nowrap"
                                        Width="100%"
                                        Overflow="hidden"
                                        TextOverflow="ellipsis"
                                    >
                                        {book.title}
                                    </Paragraph>
                                    <Paragraph
                                        FontSize="0.75rem"
                                        WhiteSpace="nowrap"
                                        Width="100%"
                                        Overflow="hidden"
                                        TextOverflow="ellipsis"
                                    >{`by ${book.authors.join(',')}`}</Paragraph>
                                </FlexContainer>
                            </FlexContainer>
                        ))}
                        <FlexContainer Padding="0.5rem" JustifyContent="center" AlignItems="center">
                            <Paragraph
                                FontSize="0.875rem"
                                FontColorVariant="light"
                                Cursor="pointer"
                                HTextDecoration="underline"
                            >
                                {`Search all results for "${truncatedSearchText}"`}
                            </Paragraph>
                        </FlexContainer>
                    </FlexContainer>
                )}
            </FormContainer>
        </>
    );
};
