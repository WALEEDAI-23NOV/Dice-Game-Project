
import styled from 'styled-components'

const Showrules = () => {
  return (
    <Rules>
        <h1>How to play dice game</h1>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
    </Rules>
  )
}

export default Showrules
const Rules = styled.div`
background-color: #FBF1F1;
max-width: 800px;
margin: 0 auto;
margin-top: 30px;
h1{
    font-size: 24px;
    font-weight: bold;
}
`