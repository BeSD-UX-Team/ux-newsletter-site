import React from "react"
import { Circle } from "@chakra-ui/react"

export default function NumIcon({ value, variant, ...props }) {

    return (
        <Circle 
            size="36px" 
            bg={variant === "dark" ? "black" : "white"} 
            color={variant === "dark" ? "white" : "black"} 
            fontWeight="black" 
            fontSize="lg" 
            border="4px solid black">
            { value }
        </Circle>
    )
    
}