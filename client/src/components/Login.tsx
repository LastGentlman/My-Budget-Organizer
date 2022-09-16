import { Container } from '../styles/login.style'

interface props {
    eng: boolean,
}

const Login:React.FC <props> = ({eng}) => {

    return(
        <Container>
            <h3>
                <i className="fas fa-search-dollar"></i> {eng ? 'My Budget Organizer' : 'Presupuesto Personal'}
            </h3>
            <p>{eng ? 'Personal Budget Admin app' : 'Administracion de presupuesto personal'}</p>
            <p>{eng ? 'Financial Culture App' : 'App de educacion financiera'}</p>
            <hr />
            <button>
                <i className="fab fa-google"></i> Access
            </button>
        </Container>
    )
}

export default Login;