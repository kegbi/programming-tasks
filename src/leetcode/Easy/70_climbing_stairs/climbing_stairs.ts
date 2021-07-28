export default function climbStairs(n: number): number {
  const memo = {};
  const climb_Stairs = (currentStep: number, destinationStep: number) => {
    // if we overstepped, we return 0
    if (currentStep > destinationStep) {
      return 0;
    }
    // if we hit the right one - we return 1, to add this possibility to our count
    if (currentStep === destinationStep) {
      return 1;
    }

    // Checking if we already stored result for this func and if yes - returning it, if not - calculating and storing it
    if (currentStep in memo) {
      return memo[currentStep];
    } else {
      const stairs =
        climb_Stairs(currentStep + 1, destinationStep) +
        climb_Stairs(currentStep + 2, destinationStep);
      memo[currentStep] = stairs;
      return stairs;
    }
  };

  return climb_Stairs(0, n);
}
