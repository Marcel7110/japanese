import { useGetRandomKanjiQuery } from "../redux/api/JapanApi";
import ErrorBlock from "./ErrorBlock";
import LoadingSpinner from "./LoadingSpinner";

const RandomKanji = () => {
    const { data, isSuccess, isLoading, isError } = useGetRandomKanjiQuery(null) 

    return ( 
        <div className="box kanji-random">
            <h2>Random 漢字</h2>
            {isLoading && <LoadingSpinner/>}
            {isError && <ErrorBlock/>}
            {isSuccess && (<>
                <div className="kanji-random__box">
                    <h1>{data.kanji}</h1>
                    <div>
                        <p><span>Meaning: </span> {data.en}</p>
                        <p><span>JLPT:</span> {data.jlpt}</p>
                        <p><span>常用 grade:</span> {data.grade}</p>
                    </div>
                </div>
                <p><span>On'yomi:</span> {data.onyomi.join(' 、 ')}</p>
                <p><span>Kun'yomi:</span> {data.kunyomi.join(' 、 ')}</p>
            </>)}
        </div>
     );
}
 
export default RandomKanji;