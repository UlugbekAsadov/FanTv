export const recommendedDonatinoGenerator = (minDonation: number) => {
  const arrayLength = 6;
  const result = [];

  for (let i = 0; i < arrayLength; i++) {
    result.push(minDonation * Math.pow(2, i));
  }

  return result;
};
