import styled from 'styled-components'

export const Container = styled.div `
    margin: 12px auto;
    text-align: center;
    max-width: 800px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    & form {
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 6px;
    }
`

export const Input = styled.input `
    width: 12em;
`

export const Label = styled.label `
    font-size: 1em;
    margin-right: 5px;
`
