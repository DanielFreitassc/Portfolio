import styled from "styled-components";
import { device } from "../../core/constants/Size";

export const ContainerProject = styled.div`
    background-color: #282c33;
    padding: 100px 173px;

    
    @media ${device.tablet} {
        padding: 100px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    /* Responsivo mobile */
    @media ${device.mobileL} {
        padding: 100px 50px;
    }
    @media ${device.mobileM} {
        padding: 100px 20px; 
    }
    @media ${device.mobileS} {
        padding: 100px 5px;
    }
`

export const SubTitle = styled.p`
    color: white;
    text-align: 1rem;
    margin-bottom: 80px;
`
export const ContentsProjectsCards = styled.div`
    display: grid;
    max-width: 1920px;
    display: flex;
    gap: 20px;
    margin-top: 100px;
    justify-content: center;   

  
`

export const ContainerApiSmall = styled.div`
    margin-top: 100px;

`

export const CardsAlls = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 98px auto;
    max-width: 1366px;  
    gap: 20px;
    @media ${device.desktopS} {
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${device.laptop} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${device.mobileL} {
        grid-template-columns: repeat(1, 1fr);
    }
    @media ${device.mobileM} {
        grid-template-columns: repeat(1, 1fr);
    }
    @media ${device.mobileS} {
        grid-template-columns: repeat(1, 1fr);
    }
`