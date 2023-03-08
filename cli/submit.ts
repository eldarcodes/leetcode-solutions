import * as inquirer from "inquirer";
import * as colors from "colors";
import messages from "./templates/messages";

import simpleGit, { SimpleGit } from "simple-git";
import { SubmitTaskAnswers } from "./types";

const git: SimpleGit = simpleGit();

const questions: inquirer.QuestionCollection<SubmitTaskAnswers> = [
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
  {
    name: "isCommitNeeded",
    type: "confirm",
    message: "Do you want to commit?",
  },
];

inquirer
  .prompt(questions)
  .then(async ({ taskName, difficulty, isCommitNeeded }) => {
    const message = `feat(${difficulty}): resolve \`${taskName}\` problem`;

    console.log(`${messages.yourCommitIs} ${colors.cyan(message)}`);

    if (isCommitNeeded) {
      console.log(messages.doingCommit);
      await git.add(".");
      await git.commit(message);
      console.log(messages.commitIsDone);
    }
  });
