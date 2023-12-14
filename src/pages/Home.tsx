import RandomKanji from '../components/RandomKanji'
import ButtonNav from '../components/ButtonNav'

const Home = () => {
    return ( 
        <div className="home-list">
            <div className='box info-card'>
                <ButtonNav title='Vocabulary' to='/vocabulary'/>
                <p>Vocabulary splited into collection based on themes with flashcards for every group</p>
            </div>
            <div className='box info-card'>
                <ButtonNav title='Kanji' to='/kanji'/>
                <p>List of Kanji grouped by 常用 grades</p>
            </div>
            <RandomKanji/>
        </div>
     );
}
 
export default Home;