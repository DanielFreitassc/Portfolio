import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../core/constants/Size";

export const CardContainer = styled.div`
    border: 1px solid #abb2bf;
    width: 320px;
    height: 428px;
`
export const ImageContent = styled.div`
    border: 1px solid #abb2bf;
    width: 100%;
    height: 200px;
    overflow: hidden;
`
export const ImageSkill = styled.img`
    width: 100%;
    height: 100%;
`
export const ContentSkills = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #abb2bf;
    height: 38px;
    padding: 10px;
`
export const TextSkills = styled.p`
    color: #abb2bf;
`
export const ContentTitleAndDescription = styled.div`
    padding: 20px;
`

export const RedirectToGithub = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 10px 19px; 
    font-size: 1rem;
    border: 1px solid #c778dd;
    margin-left: 20px;
    &:hover {
    background-color: rgba(199, 120, 221, 0.1);
    }
`
export const TextTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    @media ${device.tablet} {
        font-size: 1.3rem;
    }
`
export const TextSubTitle = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: #abb2bf;
    @media ${device.tablet} {
        font-size: 0.8rem;
    }
`