type TaskDifficulty = "easy" | "medium" | "hard";

export interface CreateTaskAnswers {
  difficulty: TaskDifficulty;
  taskName: string;
}

export interface SubmitTaskAnswers {
  difficulty: TaskDifficulty;
  taskName: string;
  isCommitNeeded: boolean;
}
