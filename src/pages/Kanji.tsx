import { useState } from "react";
import type { Grade } from "../types";
import { useGetKanjiByGradeQuery } from "../redux/api/JapanApi";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorBlock from "../components/ErrorBlock";
import GradeSelector from '../components/GradeSelectors'
import FlashCardKanji from '../components/FlashCardKanji'

const Kanji = () => {
    const [grade,setGrade] = useState<Grade>(1)
    const { data, isSuccess, isLoading, isError } = useGetKanjiByGradeQuery(grade)
    const [activeKanji, setActiveKanji] = useState<number | false>(false)

    const setNewGrade = (newGrade: Grade) => {
        setActiveKanji(false)
        setGrade(newGrade)
    }

    const setActive = (bool: number|false) => {
        setActiveKanji(bool)
        let body = document.querySelector('body')
        if(body) body.style.overflowY = bool !== false ? 'hidden' : 'scroll'
    }

    return ( 
        <>
            <h1 className="title">Kanji</h1>
            <GradeSelector grade={grade} setGrade={setNewGrade}/>
            {isLoading && <LoadingSpinner/>}
            {isError && <ErrorBlock/>}
            {isSuccess && (<>
                <div className="kanji-list">
                    {data.map((item,index) => (
                        <button onClick={() => setActive(index)} key={index}>
                            {item.kanji}
                        </button>
                    ))}
                </div>
                {activeKanji !== false && (
                    <FlashCardKanji kanji={data} current={activeKanji} setCurrent={setActiveKanji} setActive={() => setActive(false)}/>
                )}
            </>)}
        </>
     );
}
 
export default Kanji;