import styled from "styled-components";
const Score = ({score}) => {
  return (
    <Container>
      <h1 >{score}</h1>
      <p>SCORE</p>
    </Container>
  );
};

export default Score;

const Container = styled.div`
  max-width: 180px;
  height: 151px;
  display: grid;
  place-items: center;

  h1 {
    font-size: 100px;
    font-weight: 500;
    line-height: 90px;
  }
  p {
    font-size: 24px;
  }
`;
