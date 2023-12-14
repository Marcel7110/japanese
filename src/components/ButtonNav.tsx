import { Link } from 'react-router-dom'
import { GrLinkNext } from 'react-icons/gr'

type Props = {
    title: string
    to: string
}

const ButtonNav = ({title, to}:Props) => {
    return ( 
    <Link to={to} className='btn btn-nav'>
        {title}
        <GrLinkNext alt='next'/>
    </Link> 
     );
}
 
export default ButtonNav;