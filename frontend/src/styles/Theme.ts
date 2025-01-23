import { DefaultTheme } from "styled-components";

export const lightTeam: DefaultTheme = {
    colors: {
        primaryColor: '#3A3960',
        secondaryColor: '#DA498D',
        teritaryColor: '#FAC67A',
        lightColor: '#FFFFFE',
        primaryLight: '#783989',
        darkGrey: '#9fa3a9',
        disabledButton: '#b7e8e9',
        background: '#FFFFFE',
        inputBackground: '#FFF',
        themeText: '#000000',
        searchBarContainer: '#7C444F',
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
    colors: {
        primaryColor: '#3B1C32',
        secondaryColor: '#DA498D',
        teritaryColor: '#A64D79',
        lightColor: '#FFFFFE',
        primaryLight: '#783989',
        darkGrey: '#9fa3a9',
        disabledButton: '#b7e8e9',
        background: '#1A1A1D',
        inputBackground: '#6A1E55',
        themeText: '#FFFFFE',
        searchBarContainer: '#1D1616',
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