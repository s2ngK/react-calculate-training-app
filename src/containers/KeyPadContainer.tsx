import { Controls } from '../interfaces';
import KeyPad from '../components/KeyPad';
import '../style/containers.scss';

const KeyPadContainer = ({ controls }: { controls: Controls }) => {
  // const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const reverseNumArr = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  const getPadArr = (numberArr: number[]) => {
    return numberArr.map((num) => {
      const numStr = String(num);
      return (
        <KeyPad
          key={num}
          content={numStr}
          onClick={() => controls.type(numStr)}
        />
      );
    });
  };

  const numPadArr = getPadArr(reverseNumArr);

  return (
    <div className='keypad-container'>
      {numPadArr}
      <KeyPad
        addClass={'clear'}
        content={'cls'}
        onClick={() => controls.clear()}
      />
      <KeyPad content={'0'} onClick={() => controls.type('0')} />
      <KeyPad
        addClass={'delete'}
        content={'del'}
        onClick={() => controls.delete()}
      />
      <KeyPad
        addClass={'full start'}
        content={'next'}
        onClick={() => controls.next()}
      />
    </div>
  );
};

export default KeyPadContainer;
