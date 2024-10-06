import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../core/constants/Size";

export const ContainerHeader = styled.div`
    width: 100%;
    display: flex;
    background-color: #282c33;
`

export const ContentName = styled.div`
    max-width: 1920px;
    display: flex;
    color: white;
    font-size: 1.2rem;
    margin-top: 37px;
    margin-left: 173px;
`

export const LogoName = styled.div`
    max-width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-right: 30vw;
    @media ${device.laptopL} {
        margin-right: 700px;
    }
`
export const TabsTitle = styled(Link)`
    font-size: 1rem;
    text-decoration: none;
    margin-bottom: 81px;
    @media ${device.laptopL} {
        font-size: 1.3rem;
    }
   
`

export const ContentLink = styled.div`
    max-width: 1920px;
    display: flex;
    margin: 5px;
`

export const LinkPurple = styled.p`
    color: #c778dd;
    
`
export const LinkWhite = styled.p`
    color: white;
`
export const NavBar = styled.nav`
    max-width: 1920px;
    width: 500px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    gap: 10px;
    margin-top: 37px;
    @media ${device.laptopL} {
        width: 700px;
    }
`