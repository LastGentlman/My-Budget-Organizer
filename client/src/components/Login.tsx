import { Container } from '../styles/login.style'
import axios from 'axios'
import { useState } from 'react'
interface props {
    eng: boolean,
}

// request to api login

const Login:React.FC <props> = ({eng}) => {

    return(
        <Container>
            <h3>
                <i className="fas fa-search-dollar"></i> {eng ? 'My Budget Organizer' : 'Presupuesto Personal'}
            </h3>
            <p>{eng ? 'Personal Budget Admin app' : 'Administracion de presupuesto personal'}</p>
            <p>{eng ? 'Financial Culture App' : 'App de educacion financiera'}</p>
            <hr />
            <a className="button" href='./auth/google'>
                <i className="fab fa-google"></i> Access
            </a>
        </Container>
    )
}

export default Login;