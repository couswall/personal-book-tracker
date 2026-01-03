import {createSlice} from '@reduxjs/toolkit';
import {searchBook} from '@store/books/searchBook/thunks';
import {ISearchBookReducer} from '@store/books/searchBook/interfaces';

export const initialState: ISearchBookReducer = {
    searchBookData: {page: null, navbar: null},
    loadings: {
        page: false,
        navbar: false,
    },
};

export const searchBookSlice = createSlice({
    name: 'searchBook',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchBook.pending, (state, action) => {
                const {isNavbarSearch} = action.meta.arg;

                if (isNavbarSearch) state.loadings.navbar = true;
                else state.loadings.page = true;

                state.error = undefined;
            })
            .addCase(searchBook.fulfilled, (state, action) => {
                const {isNavbarSearch} = action.meta.arg;

                if (isNavbarSearch) {
                    state.loadings.navbar = false;
                    state.searchBookData.navbar = action.payload;
                } else {
                    state.loadings.page = false;
                    state.searchBookData.page = action.payload;
                }
                state.error = undefined;
            })
            .addCase(searchBook.rejected, (state, action) => {
                const {isNavbarSearch} = action.meta.arg;

                if (isNavbarSearch) state.loadings.navbar = false;
                else state.loadings.page = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Unknown error';
            });
    },
});
