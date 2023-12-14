import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { VocabList, Vocab, Kanji, Grade } from '../../types'

export const JapanApi = createApi({
    reducerPath: 'JapanApi',
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_APP}),
    endpoints: (builder) => ({
        getVocabList: builder.query<VocabList[], null>({
            query: () => '/vocab/list'
        }),
        getVocabCollection: builder.query<Vocab[], string>({
            query: (theme) => `/vocab/collection/${theme}`
        }),
        getKanjiByGrade: builder.query<Kanji[], Grade>({
            query: (grade) => `/kanji/list/${grade}`
        }),
        getRandomKanji: builder.query<Kanji, null>({
            query: () => '/kanji/random/'
        })
    })
})

export const { useGetVocabListQuery, useGetVocabCollectionQuery, useGetKanjiByGradeQuery, useGetRandomKanjiQuery } = JapanApi