import '../style/components.scss';

const KeyPad = ({
  addClass,
  content,
  onClick,
}: {
  addClass?: string;
  content: string;
  onClick?: () => void;
}) => {
  const classNames = () => {
    return addClass ? `keypad ${addClass}` : 'keypad';
  };
  const clickHandle = () => {
    console.log('click event triggerd!', onClick);
    if (onClick) onClick();
  };
  return (
    <button className={classNames()} onClick={clickHandle}>
      {content}
    </button>
  );
};

export default KeyPad;
