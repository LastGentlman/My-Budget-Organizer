import { Main, IncomeBtn, ExpenseBtn } from '../styles/dashboard.style'

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
            <br/>
            <section>
                <h5>{eng ? 'Total Balance' : 'Balance Total'}: {currency[0] + n}</h5>
                <br/>
                <IncomeBtn>{eng ? 'Income' : 'Ingreso'}</IncomeBtn>
                <ExpenseBtn>{eng ? 'Expense' : 'Gasto'}</ExpenseBtn>
            </section>
            <br/>
            <section>
                <h5>{"< Last 10 Transactions here />"}</h5>
            </section>            
        </Main>
    )
}

export default Dashboard;