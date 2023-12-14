import ButtonNav from "../components/ButtonNav";
import ErrorBlock from "../components/ErrorBlock";
import LoadingSpinner from "../components/LoadingSpinner";
import { useGetVocabListQuery } from "../redux/api/JapanApi";

const VocabList = () => {
    const { data, isSuccess, isError, isLoading } = useGetVocabListQuery(null)

    return ( 
        <>
            <h1 className="title">Vocabulary list</h1>
            {isLoading && <LoadingSpinner/>}
            {isError && <ErrorBlock/>}
            {isSuccess && (
                <div className="theme-list">
                    {data.map((item,index) => (
                        <div key={index} className="box">
                            <h3>{item.theme}</h3>
                            <p>words - {item.amount}</p>
                            <ButtonNav title='check' to={`/vocabulary/theme/${item.theme}`}/>
                        </div>
                    ))}
                </div>
            )}
        </>
     );
}
 
export default VocabList;