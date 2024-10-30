import { OutlinedInput } from "@mui/material";
import React from "react";
import { isPrime } from "../service/UtilService";


const NumberPlace = (props: any) => {
    const { change, isEditable, number } = props; 
    let isNumPrime = false;
    
    if (!isEditable) {
        isNumPrime = isPrime(number);
    }

    return (
        <OutlinedInput 
            className={isNumPrime ? "prime-number" : ""}
            type="number" 
            onChange={change} 
            value={number} 
            readOnly={!isEditable} 
        />
    )
}

export default NumberPlace;