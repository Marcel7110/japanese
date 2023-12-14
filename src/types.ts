export type Grade = 1 | 2 | 3 | 4 | 5 | 6 | 8

export type VocabList = {
    theme: string
    amount: number
}

export type Vocab = {
    en: string
    kanji: string
    furigana: string
    jp: string
}

export type Kanji = {
    en: string
    kanji: string
    onyomi: string[]
    kunyomi: string[]
    grade: Grade
    jlpt: 1 | 2 | 3 | 4 | 5
}