import { useParams } from "react-router-dom";
import { useGetVocabCollectionQuery } from "../redux/api/JapanApi";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorBlock from "../components/ErrorBlock";
import { useState } from "react";
import FlashCardsVocab from "../components/FlashCardsVocab";

const Vocabulary = () => {
    const { theme } = useParams()
    const { data, isSuccess, isLoading, isError } = useGetVocabCollectionQuery(theme || '')
    const [activeVocab,setActiveVocab] = useState<boolean>(false)
    const [current,setCurrent] = useState<number>(0)

    const setActive = (bool: boolean) => {
        setActiveVocab(bool)
        let body = document.querySelector('body')
        if(body) body.style.overflowY = bool ? 'hidden' : 'scroll'
    }

    return ( 
        <>
            <h1 className="title">{ theme }</h1>
            {isLoading && <LoadingSpinner/>}
            {isError && <ErrorBlock/>}
            {isSuccess && (<>
            <button onClick={() => setActive(true)} className="btn btn-func">{theme} Flashcards</button>
            <div className="vocab-list">
                {data.map((item, index) => (
                    <div key={index} className="box"> 
                        <h3>{item.kanji}</h3>
                        <p>{item.furigana}</p>
                        <p>{item.jp}</p>
                        <p>{item.en}</p>
                    </div>
                ))}
            </div>
            {activeVocab !== false && (
                <FlashCardsVocab vocabL={[...data]} current={current} setCurrent={setCurrent} setActive={() => setActive(false)}/>
            )}
            </>)}
        </>
     );
}
 
export default Vocabulary;