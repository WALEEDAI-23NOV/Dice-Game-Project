import Numberselector from "./Numberselector";
import RoleDice from "./RoleDice";
import Score from "./Score";
import styled from "styled-components";
import { useState } from "react";
import { Button, Outline } from "./Button";
import Showrules from "./Showrules";

const StartGame = () => {
  const [score, setScore] = useState(0);
  const [selectValue, SetSelectValue] = useState();
  const [Random, setRandom] = useState(1);
  const [error, Seterror] = useState("");
  const [visible, SetVisible] = useState(false)
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const randomnum = () => {
    if (!selectValue) {
      Seterror("You have not Selected any number ");
      return;
    }
    const num = getRndInteger(1, 7);
    setRandom((prev) => num);
    if (selectValue === num) {
      setScore((prev) => prev + num);
    } else {
      setScore((prev) => prev - 2);
    }
    SetSelectValue(undefined);
  };
  const set = ()=>{
    setScore(0)
  }
  
  return (
    <>
      <Main>
        <Score score={score} />
        <Numberselector
          error={error}
          Seterror={Seterror}
          selectValue={selectValue}
          setSelectValue={SetSelectValue}
        />
      </Main>
      <RoleDice Random={Random} setRandom={setRandom} randomnum={randomnum} />
      <Btns>
        <Outline onClick={set}> Reset </Outline>
        <Button onClick={()=>SetVisible((prev)=>!prev)}>{visible ? "Hide":"Show"}  Rules </Button>
      </Btns>
      { visible && <Showrules/>}
    </>
  );
};

export default StartGame;
const Main = styled.div`
  max-width: 1200px;
  padding: 64px 80px;
  margin: 0 auto;
  gap: 700px;
  display: flex;
  justify-content: space-between;
`;
const Btns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;
