import styled from "styled-components";
const Numberselector = ({ error, selectValue, setSelectValue, Seterror }) => {
  const ArrayNum = [1, 2, 3, 4, 5, 6];
  const handler = (value) => {
    setSelectValue(value);
    Seterror("");
  };

  return (
    <>
      <Container>
        <p>{error}</p>
        <div className="flex">
          {ArrayNum.map((value, i) => (
            <Number
              isselect={value === selectValue}
              key={i}
              onClick={() => handler(value)}
            >
              {value}
            </Number>
          ))}
        </div>
        <div className="number">
          <h2>SELECT NUMBER</h2>
        </div>
      </Container>
    </>
  );
};

export default Numberselector;
const Container = styled.div`
max-width: 1000px;

  p {
    color: red;
    font-size: 18px;
  }

  .flex {
    display: flex;
    gap: 24px;
    
  }
  .number {
    display: flex;
    justify-content: end;
    margin-top: 30px;
  }
`;

const Number = styled.div`
  height: 70px;
  width: 70px;
  font-size: 24px;
  font-weight: 600;
  border: 1px solid black;
  display: grid;
  place-items: center;
  background-color: ${(props) => (props.isselect ? "black" : "white")};
  color: ${(props) => (!props.isselect ? "black" : "white")};
`;
