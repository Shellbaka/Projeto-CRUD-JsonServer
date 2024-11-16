import './styles.css'
import Logo from '../../../public/logo-adc.svg' 
import { useNavigate} from 'react-router-dom'

export function Header() {

    const navigate = useNavigate();
    return (
        <header>
            <img src={Logo} alt="" onClick={()=>navigate('/')} />
            <button onClick={()=>navigate('/createPost')}>Criar Post</button>
        </header>
    )
}