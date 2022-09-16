import { Main } from '../styles/dashboard.style'

interface props {
    eng: boolean,
}
                        // dlr, euro, libra, yuan, rublo, rupia
let currency: string[] = ['$', '€', '£', '¥', '₽', '₹']
let n: number = 0.00

const Dashboard:React.FC <props> = ({ eng }) => {
    return (
        <Main>
            <section>
                <h1>{eng ? "Wellcome!" : "Bienvenido!"}</h1>
            </section>
            <section>
                <h5>Total Balance: {currency[0] + n}</h5>
                <button>Income</button> <button>Expense</button>
            </section>
            <section>
                <h5>{"< Last Transactions here />"}</h5>
            </section>            
        </Main>
    )
}

export default Dashboard;