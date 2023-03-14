export function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }

  const map = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const letter = pattern[i];
    const word = words[i];

    // check if letter is already mapped to another word
    if (map.has(letter)) {
      if (map.get(letter) !== word) {
        return false;
      }
    }
    // check if word is already mapped to another letter
    else if (Array.from(map.values()).includes(word)) {
      return false;
    }
    // map letter to word
    else {
      map.set(letter, word);
    }
  }

  return true;
}
