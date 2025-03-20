import styled from "styled-components";

const Container = styled.div`
    font-size: 44px;
    color: blue;
    text-align: center;
`
const H3 = styled.h3`
    color: white;
    background: ${(props) => props.active ? 'blue' : '#333'};
    padding: 10px 10px;
    border-radius: 5px;
    padding-left: 20px;
    margin: 10px 5px;
    cursor: pointer;
    transition: 0.5;
    &:active{
        background-color: red;
    }
`
const Loading = styled.div`
    position: absolute;
    background:#333;
    top: 0;
    left: 0;
    height: 100vh;
    width:100%;
`

export {
    Container,
    H3,
    Loading
}