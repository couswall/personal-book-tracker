import { DefaultTheme } from "styled-components";

export const lightTeam: DefaultTheme = {
    mode: 'light',
    colors: {
        primaryColor: '#3A3960',
        secondaryColor: '#DA498D',
        teritaryColor: '#FAC67A',
        lightColor: '#FFFFFE',
        primaryLight: '#783989',
        darkGrey: '#333333',
        disabledButton: '#b7e8e9',
        background: '#FFFFFE',
        searchBarContainer: '#7C444F',
        text:{
            theme: '#000000',
            light: '#676767',
        },
        input:{
            inputBackground: '#FFF',
            labelColor: '#333333',
            errorMsgText: '#FA4032',
        }
    },
    fonts: {
        inter: 'Inter'
    },
    widths: {
        sectionMaxWidth: '1400px'
    },
    paddings: {
        sectionContainer: '0 40px',
    },
    margins: {
        sectionContainer: '0 auto',
    }
};

export const darkTheme: DefaultTheme = {
    mode: 'dark',
    colors: {
        primaryColor: '#3B1C32',
        secondaryColor: '#DA498D',
        teritaryColor: '#A64D79',
        lightColor: '#FFFFFE',
        primaryLight: '#783989',
        darkGrey: '#9fa3a9',
        disabledButton: '#005650',
        background: '#1A1A1D',
        searchBarContainer: '#1D1616',
        text: {
            theme: '#FFFFFE',
            light: '#686868',
        },
        input:{
            inputBackground: '#6A1E55',
            labelColor: '#BBBBBB',
            errorMsgText: '#F86868',
        }

    },
    fonts: {
        inter: 'Inter'
    },
    widths: {
        sectionMaxWidth: '1400px'
    },
    paddings: {
        sectionContainer: '0 40px',
    },
    margins: {
        sectionContainer: '0 auto',
    }
}