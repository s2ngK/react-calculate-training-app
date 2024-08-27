export const getRandInt = (digit: number): number => {
  const reqDigit = 10 ** digit;
  const rand = Math.floor(Math.random() * reqDigit);
  const randDigits = Math.floor(Math.log10(rand)) + 1;
  if (randDigits < digit) {
    return getRandInt(digit);
  }
  return rand;
};

export const getSymbol = (ran: number) => {
  if (ran < 1) return '+';
  else if (ran < 2) return '-';
  else return 'x';
};
