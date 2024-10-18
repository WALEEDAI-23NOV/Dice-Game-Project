import { useState } from "react"
import styled from "styled-components"


const RoleDice = ( {Random , randomnum}) => {
    

    
  return (
    <Dice>
        <div className="image" onClick={randomnum}>
            
            <img src={`./Dice/dice_${Random}.png`}></img>
            <p>Click on Dice to roll</p>
        </div>
    </Dice>
  )
}

export default RoleDice
const Dice = styled.div`
    display: flex;
    flex-direction:column ;
    align-items: center;
    p{
        text-align: center;
        font-size: 24px;
    }


`