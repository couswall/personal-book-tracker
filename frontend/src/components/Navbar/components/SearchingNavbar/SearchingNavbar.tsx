import {FieldValues, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router';
import {useEffect} from 'react';
import {AppDispatch, RootState} from '@store/store';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDebounce} from '@components/Navbar/hooks/useDebounce';
import {
    FlexContainer,
    FormContainer,
    LoadingSpinner,
    MutedIcon,
    Paragraph,
} from '@components/index';
import {BookInfoCard} from '@pages/Search/BookInfoCard';
import {SearchInputWrapper, SearchInputNavbar} from '@components/Navbar/styles';
import {searchBook} from '@store/index';
import {schemaSearchBook} from '@pages/Search/schemaSearchBook';
import {privateRoutes} from '@routes/routes';

export const SearchingNavbar = () => {
    const dispatch: AppDispatch = useDispatch();
    const {register, watch, reset, handleSubmit} = useForm({
        defaultValues: {searchText: ''},
        resolver: yupResolver(schemaSearchBook),
    });
    const searchText = watch('searchText');
    const navigate = useNavigate();
    const {token} = useSelector((state: RootState) => state.auth);
    const {searchBookData, loadings} = useSelector((state: RootState) => state.searchBook);
    const debouncedValue = useDebounce(searchText);
    const truncatedSearchText =
        debouncedValue.length > 18 ? debouncedValue.substring(0, 18) + '...' : debouncedValue;

    const onSubmit = (data: FieldValues) => {
        navigate(privateRoutes.search, {state: data});
        reset();
    };

    useEffect(() => {
        if (debouncedValue.length > 2) {
            const params = {searchText: debouncedValue, maxResults: 5};
            dispatch(searchBook({token, params, isNavbarSearch: true}));
        }
    }, [debouncedValue]);

    return (
        <>
            <FormContainer
                BackgroundColor="inherit"
                Position="relative"
                Width="350px"
                onSubmit={handleSubmit(onSubmit)}
            >
                <SearchInputWrapper
                    Background="unset"
                    Gap="0.5rem"
                    Padding="0.5rem 0.875rem"
                    AlignItems="center"
                    Width="100%"
                    BorderRadius="0.75rem"
                    Height="35px"
                >
                    {loadings.navbar ? (
                        <LoadingSpinner Width="1rem" Padding="3px" BackGroundColor="#FFFFFE" />
                    ) : (
                        <MutedIcon className="fa-solid fa-magnifying-glass" FontSize="1rem" />
                    )}
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
                        {searchBookData.navbar?.books.map((book) => (
                            <BookInfoCard
                                key={book.id}
                                book={book}
                                imageHeight="50px"
                                onClickOption={() => reset()}
                            />
                        ))}
                        <FlexContainer Padding="0.5rem" JustifyContent="center" AlignItems="center">
                            <Paragraph
                                size="sm"
                                variant="muted"
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
