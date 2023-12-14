import { GrClose, GrNext, GrPrevious } from 'react-icons/gr'
import { TbArrowsRandom, TbArrowsDoubleSwNe, TbEyeQuestion } from 'react-icons/tb'
import { useState } from 'react';
import type { Vocab } from '../types';


type Props = {
    vocabL: Vocab[]
    current: number,
    setCurrent: React.Dispatch<React.SetStateAction<number>>
    setActive: (bool:boolean) => void
}

const FlashCardsVocab = ({vocabL, current, setCurrent, setActive}:Props) => {
    const [isCovered,setIsCovered] = useState<boolean>(false)
    const [isSwapped,setIsSwapped] = useState<boolean>(false)
    const [vocab,setVocab] = useState<Vocab[]>([...vocabL])

    const handleCurrentVocab = (type: 'prev' | 'next') => {
        if(type === 'prev'){
            if(current !== 0){
                setCurrent(current-1)
            }
        }else if(type === 'next'){
            if(vocab.length-1 !== current){
                setCurrent(current+1)
            }
        }
    }

    const handleCover = () => {
        setIsCovered(prev => !prev)
    }

    const handleSwap = () => {
        setIsSwapped(prev => !prev)
    }

    const handleRandomize = () => {
        let temp = [...vocab]
        for(let i = temp.length-1; i>0;i--){
            let random = Math.floor(Math.random() * i)
            let j =  temp[i]
            temp[i] = temp[random]
            temp[random] = j
        }
        setVocab(temp)
        setCurrent(0)
    }

    return ( 
        <div className="modal-background">
            <div className="modal-main">
                <div className='modal-btn-box'>
                    <button className={`btn-second ${isCovered ? 'btn-modal__active' : ' '}`} onClick={handleCover}>
                        <TbEyeQuestion/>
                    </button>
                    <button className='btn-second' onClick={handleRandomize}>
                        <TbArrowsRandom/>
                    </button>
                    <button className='btn-second' onClick={handleSwap}>
                        <TbArrowsDoubleSwNe/>
                    </button>
                    <button className="btn-second" onClick={() => setActive(false)}>
                        <GrClose alt='close'/>
                    </button>
                </div>
                <div className='flashcard'>
                    <div className='flashcard-btn-box'>
                        <button className='btn-second' onClick={() => handleCurrentVocab('prev')}>
                            <GrPrevious/>
                        </button>
                        <button className='btn-second' onClick={() => handleCurrentVocab('next')}>
                            <GrNext/>
                        </button>
                    </div>
                    <h1>{isSwapped ? vocab[current].en : vocab[current].kanji ? vocab[current].kanji : vocab[current].furigana}</h1>
                    <div className={`flashcard-vocab ${isCovered ? "flashcard__blur" : " "}`}>
                        <h2>{isSwapped ? vocab[current].kanji : vocab[current].en}</h2>
                        <p>{vocab[current].furigana}</p>
                        <p>{vocab[current].jp}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FlashCardsVocab;