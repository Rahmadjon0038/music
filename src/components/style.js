import styled from "styled-components";

const Icon = styled.div`
    color:white;
    span{
    font-size:20px;
    background: #333;
    padding: 20px;
    border-radius: 100%;
    cursor: pointer;
    }
`
const Link = styled.a`
color: white;
position: absolute;
z-index: 100;
left: 30px;
top: 65px;
`
export { Icon, Link }