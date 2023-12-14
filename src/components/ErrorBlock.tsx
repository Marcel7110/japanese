import { TbFaceIdError } from 'react-icons/tb'

type Props = {
    children?: React.ReactNode
}

const ErrorBlock = ({children}:Props) => {
    return ( 
        <div className="error-block">
            <h2>Something went wrong</h2>
            {children && <p>{children}</p>}
            <TbFaceIdError alt='error'/>
        </div>
     );
}
 
export default ErrorBlock;