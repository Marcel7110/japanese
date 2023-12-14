import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";


const ThemeProvider = () => {
    const ls = localStorage.getItem('Darkmode') || "light"
    const [darkmode, setDarkmode] = useState<string>(ls)

    const handleDarkmode = () => {
        let next = darkmode === 'light' ? 'dark' : 'light'
        localStorage.setItem('Darkmode', next)
        setDarkmode(next)
        
    }
    
    useEffect(( )=>{
        document.querySelector('body')?.setAttribute('data-theme', darkmode)
    },[darkmode])

    return (
        <button className="btn-theme btn-second" onClick={handleDarkmode}>
            {darkmode === 'light' ? <BsSun alt='sun'/> : <BsMoon alt='moon'/>}
        </button>
    )
}
 
export default ThemeProvider;