import App from '../App'

interface props {
    eng: boolean,
}

const Login:React.FC <props> = ({eng}) => {

    return(
        <>
            <h3>
                <i className="fa-money-check-alt"></i>
                {eng ? 'My Budget Organizer' : 'Presupuesto Personal'}
            </h3>
            <section>
                <p>{eng ? 'Personal Budget Admin app' : 'Administracion de presupuesto personal'}</p>
                <p>{eng ? 'Finantial Culture App' : 'App de educacion financiera'}</p>
            </section>
        </>
    )
}

export default Login;