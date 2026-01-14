import {useDispatch, useSelector} from 'react-redux';
import {FieldValues, useForm, useWatch} from 'react-hook-form';
import {useLocation} from 'react-router';
import {useEffect, useState} from 'react';
import {AppDispatch, RootState} from '@store/store';
import {yupResolver} from '@hookform/resolvers/yup';
import {searchBook} from '@store/index';
import {
    Button,
    FlexContainer,
    FormContainer,
    Input,
    InputContainer,
    LoadingSpinner,
    Paragraph,
    TitleH1,
} from '@components/index';
import {BookInfoCard} from '@pages/Search/BookInfoCard';
import {ErrorMessage} from '@pages/Login/ErrorMessage';
import {schemaSearchBook} from '@pages/Search/schemaSearchBook';
import {SEARCH_PAGE, MAX_RESULTS} from '@pages/Search/constants';

export const Search = () => {
    const {state} = useLocation();
    const dispatch: AppDispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: {errors},
    } = useForm({
        defaultValues: {searchText: ''},
        resolver: yupResolver(schemaSearchBook),
    });
    const {token} = useSelector((state: RootState) => state.auth);
    const {searchBookData, loadings} = useSelector((state: RootState) => state.searchBook);
    const searchTextValue = useWatch({control, name: 'searchText'});
    const [currentPage, setCurrentPage] = useState<number>(1);
    const errorMsg = errors.searchText?.message ? String(errors.searchText.message) : undefined;

    const performSearch = (searchText: string, page: number) => {
        const params = {searchText, maxResults: MAX_RESULTS, page};
        dispatch(searchBook({token, params, isNavbarSearch: false}));
    };

    const onSubmit = ({searchText}: FieldValues) => {
        setCurrentPage(1);
        performSearch(searchText, 1);
    };

    const handleKeyEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'Enter') {
            e.preventDefault();
            setCurrentPage(1);
            performSearch(searchTextValue, 1);
        }
    };

    const handlePreviousPage = () => {
        const newPage = currentPage - 1;
        setCurrentPage(newPage);
        performSearch(searchTextValue, newPage);
    };

    const handleNextPage = () => {
        const newPage = currentPage + 1;
        setCurrentPage(newPage);
        performSearch(searchTextValue, newPage);
    };

    const isLastPage = searchBookData.page?.books && !searchBookData.page.books.length;

    useEffect(() => {
        if (!state?.searchText) return;
        reset({searchText: state.searchText});
        performSearch(state.searchText, 1);
    }, [state, reset]);

    return (
        <FlexContainer
            MinHeight="100vh"
            MaxWidth="1400px"
            Padding="40px"
            Gap="1.5rem"
            FlexDirection="column"
        >
            <TitleH1 Width="100%">{SEARCH_PAGE.TITLE}</TitleH1>

            <FormContainer MaxWidth="500px" Gap="0.5rem" onSubmit={handleSubmit(onSubmit)}>
                <FlexContainer Gap="0.5rem" FlexDirection="column" Width="100%" AlignItems="start">
                    <InputContainer
                        Gap="0.5rem"
                        Padding="0.5rem 0.875rem"
                        AlignItems="center"
                        Width="100%"
                        BorderRadius="0.75rem"
                        Flex="2 0 50px"
                        onKeyDown={handleKeyEnter}
                        hasError={!!errorMsg}
                    >
                        <Input
                            placeholder={SEARCH_PAGE.PLACEHOLDER}
                            Width="100%"
                            Height="100%"
                            BackgroundColor="transparent"
                            Border="unset"
                            {...register('searchText')}
                            minLength={2}
                            maxLength={50}
                        />
                    </InputContainer>
                    {errorMsg && <ErrorMessage message={errorMsg} />}
                </FlexContainer>
                <Button MaxWidth="100px" Height="50px">
                    {SEARCH_PAGE.SEARCH_BTN}
                </Button>
            </FormContainer>

            <FlexContainer FlexDirection="column">
                {loadings.page ? (
                    <FlexContainer Height="40vh" JustifyContent="center" AlignItems="center">
                        <LoadingSpinner />
                    </FlexContainer>
                ) : (
                    searchBookData.page?.books.map((book) => (
                        <BookInfoCard key={book.id} book={book} />
                    ))
                )}
            </FlexContainer>

            {searchBookData.page?.books && !loadings.page && (
                <FlexContainer Gap="1rem" JustifyContent="center" AlignItems="center">
                    <Button
                        MaxWidth="120px"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1 || loadings.page}
                    >
                        {SEARCH_PAGE.PREVIOUS_BTN}
                    </Button>
                    <Paragraph>{`${SEARCH_PAGE.PAGE} ${currentPage}`}</Paragraph>
                    <Button
                        MaxWidth="120px"
                        onClick={handleNextPage}
                        disabled={isLastPage || loadings.page}
                    >
                        {SEARCH_PAGE.NEXT_BTN}
                    </Button>
                </FlexContainer>
            )}
        </FlexContainer>
    );
};
