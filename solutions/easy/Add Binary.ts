export function addBinary(a: string, b: string): string {
  let carry = 0;
  let result = "";

  let first = a.split("").reverse().join("");
  let second = b.split("").reverse().join("");

  for (let i = 0; i < Math.max(first.length, second.length); i++) {
    let firstDigit = first[i] ? parseInt(first[i]) : 0;
    let secondDigit = second[i] ? parseInt(second[i]) : 0;

    let total = firstDigit + secondDigit + carry;
    result = `${total % 2}${result}`;

    carry = Math.floor(total / 2);
  }

  if (carry) {
    result = `${carry}${result}`;
  }

  return result;
}
