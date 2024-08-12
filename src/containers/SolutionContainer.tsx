import '../style/containers.scss';

const SolutionContainer = ({ solution }: { solution: string }) => {
  return <div className='solution-display space-mono-regular'>{solution}</div>;
};

export default SolutionContainer;
