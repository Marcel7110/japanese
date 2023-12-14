import { NavLink, Outlet } from 'react-router-dom'
import { TbHome, TbVocabulary, TbLanguageHiragana, TbMenu, TbX } from 'react-icons/tb'
import { useEffect, useState } from 'react';
import ThemeProvider from './ThemeProvider';

const Navbar = () => {
    const [menuIsActive, setMenuIsActive] = useState<boolean>(false)

    useEffect(() =>{
        const handleResize = () => {
            if(window.innerWidth === 960){
                setMenuIsActive(false)
            }
        }
        window.addEventListener('resize', handleResize)

        return () => {
            removeEventListener('resize', handleResize)
        }
    },[])

    return (
        <> 
        <header>
            <h1 className='logo'>Japanese</h1>
            <button className='btn btn-menu' onClick={() => setMenuIsActive(true)}>
                <TbMenu alt='menu'/>
            </button>
            <nav className={menuIsActive ? 'nav-active' : ' '}>
                <button className='btn btn-menu' onClick={() => setMenuIsActive(false)}>
                    <TbX alt='close'/>
                </button>
                <NavLink to='/' onClick={() => setMenuIsActive(false)} className='btn'>
                    <TbHome alt='home'/>
                    Home
                </NavLink>
                <NavLink to='/vocabulary' onClick={() => setMenuIsActive(false)} className='btn'>
                    <TbVocabulary alt='vocabulary'/>
                    Vocabulary
                </NavLink>
                <NavLink to='/kanji' onClick={() => setMenuIsActive(false)} className='btn'>
                    <TbLanguageHiragana alt='kanji'/>
                    Kanji
                </NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        <ThemeProvider/>
        </>
    );
}
 
export default Navbar;