export function mostWordsFound(sentences: string[]): number {
  let result = 0;

  for (let i = 0; i < sentences.length; i++) {
    const words = sentences[i].split(" ");
    result = Math.max(result, words.length);
  }

  return result;
}
