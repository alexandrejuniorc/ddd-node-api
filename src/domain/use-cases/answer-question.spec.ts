import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase();
  const answer = answerQuestion.execute({
    instructorId: "instructor-1",
    questionId: "question-1",
    content: "This is an answer",
  });

  expect(answer.content).toEqual("This is an answer");
});
