import { useState, useEffect } from "react";
import styled from "styled-components";

interface AdviceTypes {
  slip: {
    id: number;
    advice: string;
  };
}

function App() {
  const [advice, setAdvice] = useState<AdviceTypes>();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        if (!data) {
          throw Error("Something went wrong!");
        }
        setAdvice(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [count]);

  return (
    <>
      <Container>
        <span>ADVICE # {advice?.slip.id}</span>
        <p>"{advice?.slip.advice}"</p>
        <img src="/assets/pattern-divider-mobile.svg"></img>
        <button onClick={() => setCount((prev: number) => prev + 1)}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 34.3rem;
  margin: 12rem auto;
  text-align: center;
  background-color: #313a48;
  border-radius: 1rem;
  padding: 2.4rem;
  font-weight: 800;
  position: relative;

  @media (min-width: 540px) {
    width: 54rem;
    padding: 4.8rem;
  }
  & > span {
    display: inline-block;
    font-family: Manrope;
    font-size: 1.1rem;
    line-height: 1.503rem;
    letter-spacing: 3.4571425914764404px;
    text-align: center;
    color: #53ffaa;
    margin-bottom: 2.4rem;
  }
  & > p {
    font-size: 2.4rem;
    line-height: 3.278rem;
    letter-spacing: -0.2571428716182709px;
    text-align: center;
    color: #cee3e9;
    margin-bottom: 2rem;
    @media (min-width: 540px) {
      margin-bottom: 4rem;
    }
  }
  & > img {
    margin-bottom: 4rem;
  }
  & > button {
    position: absolute;
    transform: translate(50%, -50%);
    bottom: -22%;
    right: 50%;
    background-color: #53ffaa;
    color: #202733;
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 40px 0 #53ffa9a9;
    }
  }
`;
