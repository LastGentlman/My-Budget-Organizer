import { Container, Label, Input } from '../styles/newTransaction.style'

interface props {
    eng: boolean,
    currensy: string,
}

const NewTransaction:React.FC <props> = ({eng, currensy}) => {
    return (
        <Container>
            <h1>{eng ? 'New Transaction' : 'Nueva Transaccion'}</h1>

            <form>
                <div>
                    <Label>{eng ? 'Type' : 'Tipo'}</Label>
                    <Input type="" />
                </div>
                <div>
                    <Label htmlFor="date">{eng ? 'Date' : 'Fecha'}</Label>
                    <Input type="date" name="date" id="date" required/>
                </div>
                <div>
                    <Label htmlFor="amount">{eng ? 'Amount' : 'Monto'}</Label>
                    {currensy}
                    <Input type="number" min="1" step="10" name="amount" id="amount" required/>
                </div>
                <div>
                    <Label htmlFor="concept">{eng ? 'Concept' : 'Concepto'}</Label>
                    <Input type="text" name="concept" id="concept"/>
                </div>
                <div>
                    <Input type="button" value="Cancel"/>
                    <Input type="submit"/>
                </div>
            </form>
        </Container>
    )
}

export default NewTransaction