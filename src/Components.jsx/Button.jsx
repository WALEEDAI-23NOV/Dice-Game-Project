import styled from "styled-components";
export const Button = styled.button`
  display: flex;
  min-width: 220px;
  padding: 10px 18px;
  justify-content: center;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: 1px solid transparent;
  font-size: 16px;
  transition: 0.4s background ease-out;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;
export const Outline = styled(Button)`
background-color: white;
color: black;
border: 1px solid black;
 &:hover {
    background-color:black;
    color: white;
    border: 1px solid transparent;
    
  }
    
`