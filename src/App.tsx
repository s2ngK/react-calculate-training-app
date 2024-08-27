import { useState, useEffect } from 'react';
import { Controls } from './interfaces';
import * as util from './utils';
import { Symbol } from './containers/QuestionContainer';
import KeyPadContainer from './containers/KeyPadContainer';
import QuestionContainer from './containers/QuestionContainer';
import SolutionContainer from './containers/SolutionContainer';
import './App.scss';

function App() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [symbol, setSymbol] = useState<Symbol>('+');
  const [solution, setSolution] = useState<string>('');

  useEffect(() => {
    createQuestion();
  }, []);

  const createQuestion = () => {
    const symbolRan = Math.floor(Math.random() * 3);
    let digits = 2;
    if (symbolRan < 2) digits = 5; // +, - 자리수 증가
    const num1 = util.getRandInt(digits);
    const num2 = util.getRandInt(digits);
    setSymbol(util.getSymbol(symbolRan));
    setNum1(num1);
    setNum2(num2);
    if (symbolRan === 1 && num2 > num1) {
      // 빼기 일 때 음수 결과 안나오도록 스왑
      setNum1(num2);
      setNum2(num1);
    }
  };

  const insertKeypad = (value: string) => {
    setSolution(solution.concat(value));
  };

  const clearSolution = () => {
    setSolution('');
  };

  const deleteOneDigit = () => {
    setSolution(solution.slice(0, -1));
  };

  const controls: Controls = {
    clear: clearSolution,
    next: createQuestion,
    delete: deleteOneDigit,
    type: insertKeypad,
  };

  return (
    <div className='App'>
      <QuestionContainer num1={num1} num2={num2} symbol={symbol} />
      <hr className='div' />
      <SolutionContainer solution={solution} />
      <KeyPadContainer controls={controls} />
    </div>
  );
}

export default App;
