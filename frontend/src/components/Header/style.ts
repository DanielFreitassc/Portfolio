import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../core/constants/Size";

export const ContainerHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #282c33;
`

export const ContentName = styled.div`
    max-width: 1920px;
    display: flex;
    color: white;
    font-size: 1.2rem;
    margin-top: 37px;
    margin-left: 173px;

    @media ${device.tablet} {
        display: none;
    }
    @media ${device.mobileL} {
        display: none;
    }
    
    @media ${device.mobileM} {
        display: none;
    }
    @media ${device.mobileS} {
        display: none;
    }
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
    @media ${device.tablet} {
        font-size: 1rem;
    }
    @media ${device.mobileL} {
        font-size: 0.9rem;
    }
    @media ${device.mobileM} {
        font-size: 0.8rem;
    }
    @media ${device.mobileS} {
        font-size: 0.8rem;
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
    @media ${device.tablet} {
        width: 500px;
    }
    @media ${device.mobileL} {
        width: 500px;
    }
    @media ${device.mobileM} {
        width: 400px; 
    }
    @media ${device.mobileS} {
        width: 400px;
    }
`