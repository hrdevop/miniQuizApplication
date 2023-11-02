export interface QuizQuestionInterface {
    id: string,
    question: string,
    options: string[],
}
export interface QuizAnswerInterface extends QuizQuestionInterface {
    answer: string
}
export interface QuizPostAnswerInterface {
    id: string,
    answer: string
}
export interface QuizResponseAnswerInterface {
    questionId: string,
    answer: string
}
export interface QuizResultInterface {
    questions: number,
    answered: number,
    correct: number
}

