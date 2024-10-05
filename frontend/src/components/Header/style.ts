import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 36px 173px;
    background-color: #282c33;
`

export const ContentName = styled.div`
    display: flex;
    color: white;
    font-size: 1.2rem;
    margin: 0px 503px 81px 0px;
`

export const TabsTitle = styled(Link)`
    font-size: 1rem;
    text-decoration: none;
    margin-bottom: 81px;
   
`

export const ContentLink = styled.div`
    display: flex;
    margin: 5px;
`

export const LinkPurple = styled.p`
    color: #c778dd;
    
`
export const LinkWhite = styled.p`
    color: white;
`