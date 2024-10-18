import styled from "styled-components";
const Gameplay = ({ toggle }) => {
  
  return (
    <Container>
      <div>
        <img src="./images/dices.png"></img>
      </div>
      <div className="content">
        <h1> DICE GAME</h1>
        <div className="button">
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </div>
    </Container>
  );
};

export default Gameplay;
const Container = styled.div`
  display: flex;
  max-width: 1180px;
  margin: 0 auto;
  height: 100vh;
  gap: 5px;
  align-items: center;
  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
  .content .button {
    display: flex;
    justify-content: end;
  }
`;
const Button = styled.button`
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
