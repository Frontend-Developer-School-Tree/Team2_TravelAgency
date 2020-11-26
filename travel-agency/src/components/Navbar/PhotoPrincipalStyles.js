import styled from 'styled-components'
import terrazza from "../../img/terrazza.svg";

export const ImgNav = styled.div`
        background-image: url(${terrazza});
        background-repeat:no-repeat;
        background-position:center;
        width:100%;
        height: 100vh;
        position:absolute;
        z-index:1; 
        @media (max-width: 720px){
            /* background-image:none; */
        }`
        
export const SfondoBlack = styled.div`
        width: 100%;
        height:100vh;
        position:absolute;
        background-color:rgba(0, 0, 0, 0.4);
        z-index:9999;
        color: white;`

export const Logo = styled.img`
        margin: 3rem 3rem;
        @media (max-width: 720px){
        margin-bottom: 1rem;
    }`

export const TextPres = styled.div`
    text-align: right;
    vertical-align: baseline;
    padding-top: 30vh;
    padding-right: 3vh;
    @media (max-width: 720px){
        padding-top: 0;
        font-size: small;
    }`