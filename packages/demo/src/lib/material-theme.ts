import {createTheme, responsiveFontSizes} from '@mui/material'

const systemFonts = [
  'cursive',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
]

const theme = createTheme({
  typography: {
    fontFamily: ['Permanent Marker', ...systemFonts].join(',')
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff'
    },
    background: {
      paper: 'rgba(242, 242, 242, 1)',
      default: '#1f9bb4'
    }
  }
})

export default responsiveFontSizes(theme)
