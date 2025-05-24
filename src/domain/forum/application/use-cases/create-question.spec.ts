import { QuestionsRepository } from '../repositories/questions-repository'
import { Question } from '../../enterprise/entities/question'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)
  const { question } = await createQuestion.execute({
    authorId: 'author-1',
    title: 'This is a question',
    content: 'This is the content of the question',
  })

  expect(question.id).toBeTruthy()
})
