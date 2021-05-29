import { ChakraProvider, useColorMode } from "@chakra-ui/react"
import { Global, css } from '@emotion/react'

/* Not sure if this is best way to add global styles */
const GlobalStyle = ({ children }) => { 
  const { colorMode } = useColorMode()

  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #90CDF4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : 'black'};
          }
        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  )
}

export default MyApp
