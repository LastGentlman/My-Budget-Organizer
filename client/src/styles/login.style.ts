import styled from "styled-components"

export const Container = styled.div `
    margin: 2em auto;
    max-width: 800px;
    height: auto;
    text-align: center;
    user-select: none;

    & h3 i {
        color: yellow;
        background: lightgreen;
        border-radius: 12px;
    }

    & hr {
        margin: 5px 20px;
    }

    & .button {
        height: 45px;
        width: 175px;
        color: white;
        font-size: 1.8em;
        font-weight: bold;
        background: brown;
        margin: 0 0 5px 0;
        border: 1px brown solid;
        border-radius: 8px;
        cursor: pointer;
        text-decoration: none;
    }
`