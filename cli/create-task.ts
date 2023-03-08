import * as inquirer from "inquirer";
import * as fs from "fs";
import * as path from "path";
import messages from "./templates/messages";
import { getTaskTemplate } from "./templates/task-template";
import { CreateTaskAnswers } from "./types";

const questions: inquirer.QuestionCollection<CreateTaskAnswers> = [
  {
    name: "difficulty",
    type: "list",
    message: "What is the difficulty of this task?",
    choices: ["easy", "medium", "hard"],
  },
  {
    name: "taskName",
    type: "input",
    message: "Task name:",
    validate: function (value) {
      if (value.trim().length === 0) {
        return "Please enter task name.";
      } else {
        return true;
      }
    },
  },
];

inquirer.prompt(questions).then(async ({ taskName, difficulty }) => {
  const folderPath = path.join(__dirname, `../solutions/${difficulty}`);
  const filePath = `${folderPath}/${taskName}.ts`;

  const taskTemplate = getTaskTemplate(taskName);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(messages.folderCreated);
  }

  fs.writeFile(filePath, taskTemplate, (error) => {
    if (error) throw error;
    console.log(messages.fileCreated);
  });

  fs.appendFileSync(
    `${folderPath}/index.ts`,
    `export * from "./${taskName}";` + "\r\n"
  );
});
