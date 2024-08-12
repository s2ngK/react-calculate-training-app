import '../style/containers.scss';

interface Question {
  num1: number;
  num2: number;
  symbol: Symbol;
}

export type Symbol = '+' | '-' | 'x';

const QuestionContainer = (Question: Question) => {
  return (
    <div className='question-container space-mono-regular'>
      <p>{Question.num1}</p>
      <p>
        {Question.symbol} {Question.num2}
      </p>
    </div>
  );
};

export default QuestionContainer;
