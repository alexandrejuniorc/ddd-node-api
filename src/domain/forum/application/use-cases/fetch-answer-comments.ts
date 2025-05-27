import { AnswerComment } from '../../enterprise/entities/answer-comment'
import { AnswerCommentsRepository } from '../repositories/answer-comments-repository'

interface FetchAnswerCommentsUseCaseRequest {
  questionId: string
  page: number
}

interface FetchAnswerCommentsUseCaseResponse {
  answerComments: AnswerComment[]
}

export class FetchAnswerCommentsUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    questionId,
    page,
  }: FetchAnswerCommentsUseCaseRequest): Promise<FetchAnswerCommentsUseCaseResponse> {
    const answerComments =
      await this.answerCommentsRepository.findManyByAnswerId(questionId, {
        page,
      })

    return { answerComments }
  }
}
