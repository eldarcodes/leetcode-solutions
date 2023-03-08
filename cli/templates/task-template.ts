export const getTaskTemplate = (taskName: string) => {
  return `export const ${taskName} = (input: any): any => {
  return null;
};
`;
};
