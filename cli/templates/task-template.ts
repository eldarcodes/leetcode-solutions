import { camelCase } from "lodash";

export const getTaskTemplate = (taskName: string) => {
  return `export const ${camelCase(taskName)} = (input: any): any => {
  return null;
};
`;
};
