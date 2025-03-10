import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const FOMR = styled.form`
margin-top: 100px;
    color: white;
    background-color: #333;
    width: 800px;
    padding: 20px;
    h1{
        text-align:center; 
    }
    label{
        margin-top: 40px;
        display: block;
    }
    label span{
        font-size: 20px;
        font-weight: bold;
    }
    label input{
        width: 100%;
        padding: 10px 10px;
        display: block;
        margin-top: 10px;
        font-size: 20px;
    }
    .btn{
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button{
        font-size: 16px;
        padding: 10px 30px;
    }
`
export { FOMR, Container };