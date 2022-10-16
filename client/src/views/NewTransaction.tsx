import { Container } from '../styles/newTransaction.style'

interface props {
    eng: boolean,
}

const NewTransaction:React.FC <props> = ({eng}) => {
    return (
        <Container>
            <h1>{eng ? 'New Transaction' : 'Nueva Transaccion'}</h1>
        </Container>
    )
}