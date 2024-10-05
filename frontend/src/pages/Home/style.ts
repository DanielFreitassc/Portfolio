import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerHome = styled.div`
    background-color: #282c33;
    width: 100%;
    padding: 0 173px;
`
export const ContentAboutAndImage = styled.div`
    display: flex;
    align-items: flex-start;
`
export const AboutDaniel = styled.div`
    display: flex;
    flex-direction: column;
    width: 517px;
`
export const AboutSubTitle = styled.p`
    color: #abb2bf;
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
    margin-top: 22px;
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
`
export const ImageDots = styled.img`
    position: absolute;
    z-index: 9;
    left: 350px;
    bottom: 60px;
`
export const ImageMan = styled.img`
    position: absolute;
    z-index: 2;
    left: 15px;
`
export const ImageLogo = styled.img`
    position: absolute;
    z-index: 1;
    left: 20px;
    bottom: 150px;
`

export const ContentCurrently = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #abb2bf;
    padding: 5px;
    gap: 10px;
    font-size: 1rem;
    width: 400px;
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
export const CootainerSkillAndImg = styled.div`
    display: flex;
    justify-content: space-around;
`
export const ImageBoxes = styled.img`
    width: 349;
    object-fit: contain;
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

`
export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
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
    gap: 20px;
    margin-top: 20px;
`
export const SecondarySkillsList = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    margin-top: 20px;
`

export const AboutMeContainer = styled.div`
    margin-top: 100px;
`

export const SplitAbout = styled.div`
    display: flex;
    justify-content: space-arounds;
`

export const AboutTextArea = styled.div`
    width: 500px;
    color: #abb2bf;
`

export const ContentManTwo = styled.img`
    margin-left: 160px;
`

export const AboutTitle = styled.h3`
    margin: 40px 0;

`

export const AboutBodyText = styled.p`
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
    margin-top: 22px;
`

export const ContactContainer = styled.div`
    width: 100%;
    max-width: 1920px;
`
export const SplitContacts = styled.div`
    display: flex;
    
`
export const ContainerContentBodyText = styled.div`
    margin-top: 50px;
    margin-bottom: 145px;

`
export const ContentBodyText = styled.p`
    width: 490px;
    color: #abb2bf;

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