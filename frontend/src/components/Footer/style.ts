import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #282c33;
    width: 100%;
    height: 210px;
    border-top: 1px solid #abb2bf;
    align-items: center;
`

export const SplitMediaArea = styled.div`
    display: flex;
    width: 100%;
    color: white;
    font-weight: 300;

`
export const ContactArea = styled.div`
    width: 100%;
    margin: 40px 370px 40px 176px;

`
export const DanielName = styled.p`
    font-size: 1.1rem;
    display: inline;
    margin: 5px;
`
export const EmailContact = styled.p`
    color: #abb2bf;
    display: inline;
`
export const ContactMediaArea = styled.div`
    width: 100%;
    margin: 40px 176px;
`

export const IconsArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem;
    padding: 5px;
`
export const Copy = styled.p`
    color: #abb2bf;
`
export const MediaTitle = styled.p`
    font-size: 1.5rem;
    margin-left: 13px;
    margin-bottom: 10px;

`

export const LinkToSocialMedia = styled(Link)`
    text-decoration: none;
    color: #abb2bf;
`