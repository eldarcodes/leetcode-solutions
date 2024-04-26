import { camelCase } from "lodash";

export const getTaskTemplate = (taskName: string) => {
  return `/**
  Input: 
  Output: 

  Time complexity = O()
  Space complexity = O()
*/
export const ${camelCase(taskName)} = (input: any): any => {
  return null;
};
`;
};
