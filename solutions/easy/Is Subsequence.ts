export function isSubsequence(substr: string, input: string): boolean {
  let j = 0;

  for (let i = 0; i < input.length; i++) {
    const substringLetter = substr[j];
    const inputLetter = input[i];

    if (substringLetter === inputLetter) j++;
  }

  return substr.length === j;
}
