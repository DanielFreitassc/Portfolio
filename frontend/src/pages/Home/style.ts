import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../core/constants/Size";

export const ContainerHome = styled.div`
    background-color: #282c33;
    width: 100%;
    padding: 100px 173px;
    @media ${device.tablet} {
        padding: 100px 20px;
    }
    @media ${device.mobileL} {
        padding: 100px 20px;
    }
    @media ${device.mobileM} {
        padding: 100px 20px;
    }
    @media ${device.mobileS} {
        padding: 100px 5px;
    }
`
export const ContentAboutAndImage = styled.div`
    display: flex;
    align-items: flex-start;

    @media ${device.tablet} {
        flex-direction: column;
        align-items: center;
    }
    @media ${device.mobileL} {
        flex-direction: column;
        align-items: center;
    }
    @media ${device.mobileM} {
        flex-direction: column;
        align-items: center;
    }
    @media ${device.mobileS} {
        flex-direction: column;
        align-items: center;
    }
`
export const AboutDaniel = styled.div`
    display: flex;
    flex-direction: column;
    width: 517px;

    @media ${device.laptopL} {
        width: 700px;
    }
    @media ${device.tablet} {
        width: 400px;
    }
    @media ${device.mobileL} {
       width: 400px;
    }
    @media ${device.mobileM} {
        width: 300px;
    }
    @media ${device.mobileS} {
        width: 300px;
    }
`
export const AboutSubTitle = styled.p`
    color: #abb2bf;
    font-size: 1rem;
    margin-top: 10px;

    @media ${device.laptopL} {
        font-size: 1.5rem;
    }
    @media ${device.tablet} {
        font-size: 1rem;
    }
    @media ${device.mobileL} {
       font-size: 1rem;
    }
    @media ${device.mobileM} {
        font-size: 1rem;
    }
    @media ${device.mobileS} {
        font-size: 1rem;
    }
`
export const ButtonContact = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 148px;
    height: 37px;
    background-color: transparent;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    border: 1px solid #c778dd;
    margin-top: 40px;
    &:hover {
    background-color: rgba(199, 120, 221, 0.1);
    }
`
export const JoinTitle = styled.div`
    display: flex;
  
`
export const ContentTitle = styled.h1`
    font-size: 2rem;
    font-weight: 400;
    color: white;
    display: inline;
    margin-top: 20px;

    @media ${device.laptopL} {
        font-size: 3rem;
    }
`
export const StylePurpleInTitle = styled.p`
    color: #c778dd;
    display: inline;
`
export const ContentContainerImageAndCurrently = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerImageMan = styled.div`
    position: relative;
    width: 470px;
    height: 390px;

    @media ${device.laptopL} {
        margin-left: 280px;
    }
    @media ${device.tablet} {
        width: 400px;
    }
    @media ${device.mobileL} {
       width: 400px;
    }
    @media ${device.mobileM} {
        width: 350px;
    }
    @media ${device.mobileS} {
        width: 350px;
    }
`
export const ImageDots = styled.img`
    position: absolute;
    z-index: 9;
    left: 350px;
    bottom: 40px;
    @media ${device.laptopL} {
        width: 100px;
        bottom: 30px;
    }
    @media ${device.tablet} {
        width: 50px;
        left: 270px;
    }
    @media ${device.mobileL} {
        width: 50px;
        left: 270px;
    }
    @media ${device.mobileM} {
        width: 50px;
        left: 270px;
    }
    @media ${device.mobileS} {
        width: 50px;
        left: 270px;
    }
`
export const ImageMan = styled.img`
    position: absolute;
    z-index: 2;
    left: 15px;
    @media ${device.laptopL} {
        width: 490px;
        bottom: 1px;
    }
    @media ${device.tablet} {
        bottom: 1px;
        left: 0px;
        width: 350px;
    }
    @media ${device.mobileL} {
        bottom: 1px;
        left: 0px;
        width: 350px;
    }
    @media ${device.mobileM} {
        bottom: 1px;
        left: 0px;
        width: 350px;
    }
    @media ${device.mobileS} {
        bottom: 1px;
        left: 0px;
        width: 340px;
    }
`
export const ImageLogo = styled.img`
    position: absolute;
    z-index: 1;
    left: 20px;
    bottom: 150px;
    @media ${device.laptopL} {
        width: 180px;
        bottom: 140px;
    }
    @media ${device.tablet} {
        width: 100px;
        left: 10px;
        bottom: 120px;
    }
    @media ${device.mobileL} {
        width: 100px;
        left: 10px;
        bottom: 120px;
    }
    @media ${device.mobileM} {
        width: 100px;
        left: 10px;
        bottom: 120px;
    }
    @media ${device.mobileS} {
        width: 100px;
        left: 30px;
        bottom: 120px;
    }
`

export const ContentCurrently = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #abb2bf;
    padding: 5px;
    gap: 10px;
    font-size: 1rem;
    width: 400px;

    @media ${device.laptopL} {
        margin-left: 310px;
    }
    @media ${device.tablet} {
        width: 330px;
        font-size: 0.9rem;
        margin-right: 20px;
    }
    @media ${device.mobileL} {
        width: 330px;
        font-size: 0.9rem;
        margin-right: 20px;
    }
    @media ${device.mobileM} {
       width: 330px;
       font-size: 0.9rem;
       margin-right: 20px;
    }
    @media ${device.mobileS} {
        width: 300px;
        font-size: 0.8rem;
        margin-right: 20px;
    }
`
export const BoxImage = styled.img` 
`
export const TextCurrently = styled.p`
    color: #abb2bf;
    display: inline;
`
export const CurrentlyJob = styled.p`
    color: white;
    display: inline;
`

export const ProjectsContainer = styled.div`
    width: 100%;
    max-width: 1920px;
    margin-top: 100px;
`

export const ContentLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    text-decoration: none;
    color: #c778dd;
    display: inline; 
`

export const LineDecoration = styled.div`
    display: inline;
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
export const CootainerSkillAndImg = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    @media ${device.tablet} {
        flex-direction: column;
    }
    @media ${device.mobileL} {
        flex-direction: column;
    }
    @media ${device.mobileM} {
        flex-direction: column;
    }
    @media ${device.mobileS} {
        flex-direction: column;
    }
`
export const ImageBoxes = styled.img`
    width: 349;
    object-fit: contain;
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
export const ProjectsLink = styled.p`
    display: inline;
    color: white;
` 

export const LinkToProjects = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1rem;
    margin-left: 373px;

    @media ${device.laptopL} {
        margin-left: 780px; 
    }
    @media ${device.tablet} {
        margin-left: 30px;
    }
    @media ${device.mobileL} {
        margin-left: 30px;
    }
    @media ${device.mobileM} {
        margin-left: 30px;
    }
    @media ${device.mobileS} {
        margin-left: 0px;
    }
`

export const CardGrid = styled.div`
    max-width: 1920px;
    display: flex;
    gap: 20px;
    margin-top: 100px;
    justify-content: center;
    @media ${device.laptopL} {
        justify-content: flex-end;
        margin-right: 140px;
    }
    @media ${device.tablet} {
        flex-direction: column;
        align-items: center;
    }
    @media ${device.mobileL} {
        flex-direction: column;
        align-items: center;
    }
    @media ${device.mobileM} {
        flex-direction: column;
        align-items: center;
    }
    @media ${device.mobileS} {
        flex-direction: column;
        align-items: center;
    }
`

export const ContainerSkills = styled.div`
    width: 100%;
    margin-top: 100px;
    max-width: 1920px;
`
export const ContentSkill = styled.div`
    border: 1px solid #abb2bf;
    width: 190px;
    height: 100%;
`
export const TitleSkill = styled.h3`
    color: white;
    font-size: 1rem;
    font-weight: 300;
    border: 1px solid #abb2bf;
    padding: 4px;
    @media ${device.tablet} {
       font-size: 1rem;
    }
    @media ${device.mobileL} {
        font-size: 0.9rem;
    }
    @media ${device.mobileM} {
        font-size: 0.9rem;
    }
    @media ${device.mobileS} {
        font-size: 0.9rem;
    }
`

export const ListSkills = styled.ul`
    list-style-type: none;
`
export const ItemListSkills = styled.li`
    padding: 5px;
    color: #abb2bf;
    font-size: 1rem;
`
export const ExternalSkillsList = styled.div`
    display: flex;
    flex-direction: column;
`
export const PrimaySkillsList = styled.div`
    display: flex;
    width: 100%;
    height: 280px;
    gap: 20px;
    @media ${device.tablet} {
        gap: 10px;
    }
    @media ${device.mobileL} {
        gap: 10px;
    }
    @media ${device.mobileM} {
        gap: 10px;
    }
    @media ${device.mobileS} {
        gap: 3px;
    }
`
export const SecondarySkillsList = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    margin-top: 20px;
    @media ${device.tablet} {
        gap: 10px;
    }
    @media ${device.mobileL} {
        gap: 10px;
    }
    @media ${device.mobileM} {
        gap: 10px;
    }
    @media ${device.mobileS} {
        gap: 5px;
        
    }
`

export const AboutMeContainer = styled.div`
    margin-top: 50px;
    @media ${device.mobileM} {
    }
`

export const SplitAbout = styled.div`
    display: flex;
    justify-content: space-arounds;
    @media ${device.tablet} {
        flex-direction: column;
    }
    @media ${device.mobileL} {
        flex-direction: column;
    }
    @media ${device.mobileM} {
        flex-direction: column;
    }
    @media ${device.mobileS} {
        flex-direction: column;
    }
`

export const AboutTextArea = styled.div`
    width: 500px;
    color: #abb2bf;
    @media ${device.tablet} {
        width: 100%;
    }
    @media ${device.mobileL} {
        width: 100%;
    }
    @media ${device.mobileM} {
        width: 100%;
    }
    @media ${device.mobileS} {
        width: 100%;
        padding: 10px;
    }
`

export const ContentManTwo = styled.img`
    margin-left: 160px;
    @media ${device.tablet} {
        width: 400px;
        margin-left: 500px;
        font-size: 2rem;
    }
    @media ${device.laptopL} {
        width: 400px;
        margin-left: 500px;
        font-size: 2rem;
    }
    @media ${device.mobileS} {
        margin-left: 80px;
    }
`

export const AboutTitle = styled.h3`
    font-size: 1.5rem;
    margin: 30px 0;
    @media ${device.laptopL} {
        font-size: 2rem;
    }
    @media ${device.tablet} {
        font-size: 1rem;
    }
    @media ${device.mobileL} {
        font-size: 1rem;
    }
    @media ${device.mobileM} {
        font-size: 1rem;
    }
    @media ${device.mobileS} {
        font-size: 1rem;
    }
`

export const AboutBodyText = styled.p`
    font-size: 1.1rem;
    @media ${device.laptopL} {
        font-size: 1.3rem;
    }
    @media ${device.tablet} {
        font-size: 1rem;
        width: 360px;
    }
    @media ${device.mobileL} {
        font-size: 1rem;
        width: 360px;
    }
    @media ${device.mobileM} {
        font-size: 1rem;
        width: 360px;
    }
    @media ${device.mobileS} {
        font-size: 1rem;
        width: 310px;
    }
`

export const AboutLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 148px;
    height: 37px;
    background-color: transparent;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    border: 1px solid #c778dd;
    margin-top: 40px;
    &:hover {
    background-color: rgba(199, 120, 221, 0.1);
    }
`

export const ContactContainer = styled.div`
    width: 100%;
    max-width: 1920px;
`
export const SplitContacts = styled.div`
    display: flex;
    @media ${device.tablet} {
        flex-direction: column;
        align-items: center;
    }
    @media ${device.mobileL} {
        flex-direction: column;
        align-items: center;
    }
    @media ${device.mobileM} {
        flex-direction: column;
        align-items: center;
    }
    @media ${device.mobileS} {
        flex-direction: column;
        align-items: center;
    }
    
`
export const ContainerContentBodyText = styled.div`
    margin-top: 30px;
    margin-bottom: 50px;

`
export const ContentBodyText = styled.p`
    font-size: 1.1rem;
    width: 490px;
    color: #abb2bf;
    @media ${device.laptopL} { 
        font-size: 1.3rem;
    }
    @media ${device.tablet} {
        font-size: 1rem;
        width: 360px;
    }
    @media ${device.mobileL} {
        font-size: 1rem;
        width: 360px;
    }
    @media ${device.mobileM} {
        font-size: 1rem;
        width: 360px;
    }
    @media ${device.mobileS} {
        font-size: 1rem;
        width: 310px;
    }
`

export const TitleContacts = styled.h3`
    font-size: 1rem;
    text-align: center;
`

export const ContentContacts = styled.div`
    width: 350px;
    height: 141px;
    color: #abb2bf;
    border: 1px solid #abb2bf;
    padding: 10px;
    margin-left: 200px;
    margin-top: 30px;

    @media ${device.laptopL} { 
        margin-left: 550px;
    }
    @media ${device.tablet} {
        margin-right: 200px;
    }
    @media ${device.mobileL} {
        margin-right: 200px;
    }
    @media ${device.mobileM} {
        margin-right: 200px;
    }
    @media ${device.mobileS} {
        width: 300px;
        margin-right: 200px;
    }
`
export const ContactContent = styled(Link)`
    display: block;
    text-decoration: none;
    font-size: 1rem;
    color: #abb2bf;
    margin-top: 15px;
`
export const IconsContact = styled.p`
    display: inline;
    font-size: 1rem;
    margin: 10px 10px 10px 20px;
`