import { Main } from '../styles/dashboard.style'

interface props {
    eng: boolean,
}

const Dashboard:React.FC <props> = ({ eng }) => {
    return (
        <Main>
            <h1>{eng ? "Wellcome!" : "Bienvenido!"}</h1>
        </Main>
    )
}

export default Dashboard;