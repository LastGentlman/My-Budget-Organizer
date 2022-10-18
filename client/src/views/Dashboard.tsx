import { Main, IncomeBtn, ExpenseBtn, LastTransactions } from '../styles/dashboard.style'

interface props {
    eng: boolean,
    currensy: string,
}

let n: number = 0.00

const Dashboard:React.FC <props> = ({ eng, currensy }) => {
    return (
        <Main>
            <section>
                <h1>{eng ? "Wellcome!" : "Bienvenido!"}</h1>
            </section>
            <br/>
            <section>
                <h5>{eng ? 'Total Balance' : 'Balance Total'}: {currensy + n}</h5>
                <br/>
                <IncomeBtn>{eng ? 'Income' : 'Ingreso'}</IncomeBtn>
                <ExpenseBtn>{eng ? 'Expense' : 'Gasto'}</ExpenseBtn>
            </section>
            <br/>
            <LastTransactions>
                <h5>{"< Last 10 Transactions here />"}</h5>
            </LastTransactions>
        </Main>
    )
}

export default Dashboard;