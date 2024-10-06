import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../core/constants/Size";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #282c33;
    width: 100%;
    height: 210px;
    border-top: 1px solid #abb2bf;
    align-items: center;
    @media ${device.mobileM} {
        height: 400px;
    }
`

export const SplitMediaArea = styled.div`
    display: flex;
    width: 100%;
    color: white;
    font-weight: 300;
    @media ${device.mobileM} { 
        align-items: center;
        flex-direction: column;
    }
`
export const ContactArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 900px;
    margin: 40px 300px 40px 173px;
    @media ${device.laptopL} { 
        width: 390px;
    }
    @media ${device.mobileM} { 
        width: 300px;
        margin: 40px 0px;
    }
`
export const DanielName = styled.p`
    font-size: 1.1rem;
`

export const IconContent = styled.p`
    display: inline;
    font-size: 1.2rem;
    padding: 2px;
`

export const NameRightContent = styled.p`
    display: inline;
    font-size: 1.2rem;
    padding: 5px;
`
export const EmailContact = styled.p`
    color: #abb2bf;
    display: inline;
`
export const ContactMediaArea = styled.div`
    width: 500px;
    margin: 40px 176px;
    @media ${device.mobileM} { 
        width: 300px;
    }
`

export const IconsArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem;
    padding: 5px;
    @media ${device.laptopL} { 
        width: 200px;
        margin-left: 350px;
    }
`
export const Copy = styled.p`
    color: #abb2bf;
`
export const MediaTitle = styled.p`
    font-size: 1.5rem;
    margin-left: 13px;
    margin-bottom: 10px;
    @media ${device.laptopL} { 
        margin-left: 350px;
    }
`

export const LinkToSocialMedia = styled(Link)`
    text-decoration: none;
    color: #abb2bf;
`