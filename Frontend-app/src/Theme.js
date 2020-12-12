import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        primary: "#AE1D1D",
        primaryLight: "#fff3F3",
        secondary: "#00FF19",
        light: "#ffffff"
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme = {theme}>{ children }</ThemeProvider>
)

export default Theme