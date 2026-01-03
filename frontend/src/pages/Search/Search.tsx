import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {useLocation} from 'react-router';
import {useEffect} from 'react';
import {AppDispatch, RootState} from '@store/store';
import {searchBook} from '@store/index';
import {
    Button,
    FlexContainer,
    FormContainer,
    Input,
    InputContainer,
    TitleH1,
} from '@components/index';
import {BookInfoCard} from '@pages/Search/BookInfoCard';

export const Search = () => {
    const {state} = useLocation();
    const dispatch: AppDispatch = useDispatch();
    const {register, handleSubmit, reset} = useForm({defaultValues: {searchText: ''}});
    const {token} = useSelector((state: RootState) => state.auth);
    const {searchBookData} = useSelector((state: RootState) => state.searchBook);

    const onSubmit = ({searchText}: {searchText: string}) => {
        const params = {searchText, maxResults: 10};
        dispatch(searchBook({token, params, isNavbarSearch: false}));
    };

    useEffect(() => {
        if (!state.searchText) return;
        reset({searchText: state.searchText});
    }, [state]);

    // TODO: Loading and pagination
    return (
        <FlexContainer
            MinHeight="100vh"
            MaxWidth="1400px"
            Padding="40px"
            Gap="1.5rem"
            FlexDirection="column"
        >
            <TitleH1 Width="100%">{'Search'}</TitleH1>

            <FormContainer MaxWidth="500px" Gap="0.5rem" onSubmit={handleSubmit(onSubmit)}>
                <InputContainer
                    Gap="0.5rem"
                    Padding="0.5rem 0.875rem"
                    AlignItems="center"
                    Width="100%"
                    BorderRadius="0.75rem"
                    Flex="2"
                    onKeyDown={(e) => {
                        if (e.code === 'Enter') {
                            e.preventDefault();
                        }
                    }}
                >
                    <Input
                        placeholder="Search by book title"
                        Width="100%"
                        Height="100%"
                        BackgroundColor="transparent"
                        Border="unset"
                        {...register('searchText')}
                    />
                </InputContainer>
                <Button MaxWidth="100px">{'Search'}</Button>
            </FormContainer>

            <FlexContainer FlexDirection="column" Height="max-content">
                {searchBookData.page?.books.map((book) => (
                    <BookInfoCard key={book.id} book={book} />
                ))}
            </FlexContainer>
        </FlexContainer>
    );
};
