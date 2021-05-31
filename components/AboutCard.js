import React from "react"
import { Box, Text, Container } from "@chakra-ui/react"

export default function AboutCard({image, name, position, message, ...props}) {
  return (
    <Box>
      <svg width="310" height="165" viewBox="0 0 310 165" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.6294 1H295C302.732 1 309 7.26802 309 15V150C309 157.732 302.732 164 295 164H33.729C25.9608 164 19.6779 157.675 19.7293 149.907L19.9819 111.745C19.9954 109.698 18.9645 107.785 17.2471 106.671L2.20696 96.9153L13.623 87.7846C17.4194 84.7483 19.6294 80.1507 19.6294 75.2895V15C19.6294 7.26801 25.8974 1 33.6294 1Z" fill="white" stroke="black" stroke-width="2"/>
      </svg>
    
        
        

    </Box>
  )
}