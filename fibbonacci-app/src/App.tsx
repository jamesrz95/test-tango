import React, { useState, useEffect } from "react";
// import styled-components
import styled from "styled-components";

function App() {
  const [nthFibonacci, setNthFibonacci] = useState(0);
  const [fibonacciResult, setFibonacciResult] = useState(0);
  const [nthFibonacciApi, setNthFibonacciApi] = useState(0);
  console.log(React.version);
  // Calculator
  let nthFibonacciCalculator = (nthFib: number) => {
    let result: number = 0;
    let f0: number = 0;
    let f1: number = 1;
    if (isNaN(nthFib)) {
      console.log("try again");
      return;
    }
    if (nthFib === 0) {
      setFibonacciResult(f0);
      return f0;
    } else if (nthFib === 1) {
      setFibonacciResult(f1);
      return f1;
    } else if (nthFib > 1) {
      for (let i: number = 0; i < nthFib; i++) {
        if (i > 0) {
          result = f0 + f1;
          f0 = f1;
          f1 = result;
        }
      }
      setFibonacciResult(result);
      return result;
    }
  };

  useEffect(() => {
    fetch("http://localhost:3333/api/fibonacci/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNthFibonacciApi(data);
        nthFibonacciCalculator(nthFibonacciApi);
      })
      .catch((error) => console.log("ERROR"));
  }, [nthFibonacciApi]);

  return (
    <Wrapper>
      <div className="title">
        <h1>Calculate Fibonacci!</h1>
      </div>
      <CalculatorSection>
        <form action="">
          <input
            type="text"
            placeholder="6"
            required
            onChange={(e) => setNthFibonacci(parseInt(e.target.value))}
          />
        </form>
        <button
          className="calculate-button"
          onClick={() => {
            nthFibonacciCalculator(nthFibonacci);
          }}
        >
          Calculate
        </button>
      </CalculatorSection>
      <ResultSection>
        <div className="number-from-api">
          <h1>Fibonacci Num From Api: </h1>
          <h2> {nthFibonacciApi}</h2>
        </div>

        <div className="result-from-app">
          <h1>Fibonacci Result: </h1>
          <div className="result">
            <h2> {fibonacciResult}</h2>
          </div>
        </div>
      </ResultSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CalculatorSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
  .calculate-button {
    margin-left: 2%;
  }
`;
const ResultSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 1%;
  .result-from-app,
  .number-from-api {
    display: flex;
  }
  h2 {
    font-size: 1.8em;
    font-weight: 700;
  }
  .result-from-app {
    h1 {
      font-weight: 600;
    }
  }
`;

export default App;
