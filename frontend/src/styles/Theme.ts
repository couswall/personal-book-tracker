import {DefaultTheme} from 'styled-components';

export const lightTheme: DefaultTheme = {
    mode: 'light',
    colors: {
        // Brand Identity
        primaryColor: '#EC7F13', // Primary Orange - buttons, progress bars, active states
        primaryHover: '#D47211', // Brand Hover - interactive hover states
        primaryLight: '#FDF2E7', // Brand Light - badge backgrounds, highlights
        secondaryColor: '#DA498D', // Secondary accent
        tertiaryColor: '#FAC67A', // Tertiary accent

        // Surfaces & Foundations
        background: '#F8F7F6', // Global Background - clean off-white
        backgroundSecondary: '#FFFFFF', // Surface White - cards, floating containers
        borderColor: '#E6E0DB', // Border Color - separators, container outlines

        // Typography
        text: {
            theme: '#181411', // Main Text - deep charcoal-brown
            light: '#897561', // Muted Text - warm taupe for metadata
            accent: '#EC7F13', // Accent Text - links, emphasis
        },

        // UI Elements
        lightColor: '#FFFFFF',
        darkGrey: '#333333',
        disabledButton: '#FFA45B',
        searchBarContainer: '#7C444F',

        // Input
        input: {
            inputBackground: '#FFFFFF',
            labelColor: '#333333',
            errorMsgText: '#FA4032',
        },
    },
    fonts: {
        lexend: 'Lexend',
    },
    widths: {
        sectionMaxWidth: '1400px',
    },
    paddings: {
        sectionContainer: '0 40px',
    },
    margins: {
        sectionContainer: '0 auto',
    },
};

export const darkTheme: DefaultTheme = {
    mode: 'dark',
    colors: {
        // Brand Identity
        primaryColor: '#FF6B6B', // Vivid Coral - CTAs, buttons, active status
        primaryHover: '#FF5252', // Darker coral for hover states
        primaryLight: '#FFD1AA', // Light Peach - icons, secondary highlights
        secondaryColor: '#FFD1AA', // Light Peach - secondary accent
        tertiaryColor: '#A64D79', // Tertiary accent

        // Surfaces & Foundations
        background: '#0F1B2A', // Sapphire Deep - main background
        backgroundSecondary: '#1A2C40', // Cerulean Card - cards, sidebar, containers
        borderColor: '#2A3F55', // Border color for dark mode

        // Typography
        text: {
            theme: '#FFFFFF', // Pure White - headings, critical data
            light: '#94A3B8', // Slate Muted - author names, descriptions, metadata
            accent: '#FF6B6B', // Accent Text - links, emphasis
        },

        // UI Elements
        lightColor: '#FFFFFF',
        darkGrey: '#94A3B8',
        disabledButton: '#005650',
        searchBarContainer: '#1A2C40',

        // Input
        input: {
            inputBackground: '#1A2C40',
            labelColor: '#94A3B8',
            errorMsgText: '#F86868',
        },
    },
    fonts: {
        lexend: 'Lexend',
    },
    widths: {
        sectionMaxWidth: '1400px',
    },
    paddings: {
        sectionContainer: '0 40px',
    },
    margins: {
        sectionContainer: '0 auto',
    },
};

// Keep the old name for backwards compatibility
export const lightTeam = lightTheme;
