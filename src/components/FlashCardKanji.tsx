import { GrClose, GrNext, GrPrevious } from 'react-icons/gr'
import { Kanji } from '../types';
import { useState } from 'react';
import { TbEyeQuestion } from 'react-icons/tb'

type Props = {
    kanji: Kanji[]
    current: number
    setCurrent: React.Dispatch<React.SetStateAction<number | false>>
    setActive: () => void
}

const FlashCardKanji = ({kanji, current, setCurrent, setActive}:Props) => {
    const [isCovered,setIsCovered] = useState<boolean>(false)

    const handleCurrentKanji = (type: 'prev' | 'next') => {
        if(type === 'prev'){
            if(current !== 0){
                setCurrent(current-1)
            }
        }else if(type === 'next'){
            if(kanji.length-1 !== current){
                setCurrent(current+1)
            }
        }
    }
    
    const handleCover = () => {
        setIsCovered(prev => !prev)
    }

    return ( 
        <div className="modal-background">
            <div className="modal-main">
                <div className="modal-btn-box">
                    <button className={`btn-second ${isCovered ? 'btn-modal__active' : ' '}`} onClick={handleCover}>
                        <TbEyeQuestion/>
                    </button>
                    <button className="btn-second" onClick={setActive}>
                        <GrClose alt='close'/>
                    </button>
                </div>
                <div className="flashcard">
                    <div className='flashcard-btn-box'>
                        <button className='btn-second' onClick={() => handleCurrentKanji('prev')}>
                            <GrPrevious/>
                        </button>
                        <button className='btn-second' onClick={() => handleCurrentKanji('next')}>
                            <GrNext/>
                        </button>
                    </div>
                    <h1>{kanji[current].kanji}</h1>
                    <div className={`flashcard-kanji ${isCovered ? "flashcard__blur" : " "}`}>
                        <h2>{kanji[current].en}</h2>
                        <div>
                            <div>
                                <h3>Grade - {kanji[current].grade}</h3>
                                <h3>On'yomi</h3>
                                <p>{kanji[current].onyomi.join(' 、 ')}</p>
                            </div>
                            <div>
                                <h3>JLPT - {kanji[current].jlpt}</h3>
                                <h3>Kun'yomi</h3>
                                <p>{kanji[current].kunyomi.join(' 、 ')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FlashCardKanji;