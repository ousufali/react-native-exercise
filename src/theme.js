import { Platform } from "react-native";

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        // mainBackground: '#e1e4e8',
        barBackgroundColor: '#24292e',
        mainBackground: '#E7E2E2',
        error: '#d73a4a'

    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            main: 'System'
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },

};

export default theme;