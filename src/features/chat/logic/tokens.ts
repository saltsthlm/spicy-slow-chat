export type Token = { weekly: number; daily: number };

export function calculateRemainingTokens(
  numberOfFetches: number,
  initialTokens: Token,
): Token {
  if (numberOfFetches === 0) return initialTokens;

  let { weekly, daily } = initialTokens;

  if (daily === 1) {
    daily = 0;
    numberOfFetches--;
  }
  if (numberOfFetches > 0) {
    weekly -= numberOfFetches;
  }

  return { weekly, daily };
}

export function calculateTokens(numbersOfFetches: number[]) {
  const initialTokens = { weekly: 2, daily: 1 };

  return numbersOfFetches.reduce((tokens, numberOfFetches) => {
    const refilledTokens = { ...tokens, daily: 1 };
    return calculateRemainingTokens(numberOfFetches, refilledTokens);
  }, initialTokens);
}
