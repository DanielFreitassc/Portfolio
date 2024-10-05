import { 
    AboutDaniel, 
    AboutSubTitle, 
    BoxImage, 
    ButtonContact, 
    CardGrid, 
    ContainerHome, 
    ContainerImageMan, 
    ContainerSkills, 
    ContentAboutAndImage,
    ContentContainerImageAndCurrently, 
    ContentCurrently, 
    ContentLink, 
    ContentSkill, 
    ContentTitle, 
    CootainerSkillAndImg, 
    CurrentlyJob, 
    ExternalSkillsList, 
    ImageBoxes, 
    ImageDots, 
    ImageLogo, 
    ImageMan, 
    ItemListSkills, 
    JoinTitle, 
    LinkToProjects, 
    ListSkills, 
    PrimaySkillsList, 
    ProjectsContainer, 
    ProjectsLink, 
    SecondarySkillsList, 
    StylePurpleInTitle, 
    TextCurrently,
    TitleSkill
} from "./style"

import { Projeto } from "../../core/constants/Projetos"

import Man from "../../assets/Man.png"
import Dots from "../../assets/Dots.png"
import Logo from "../../assets/Logo.png"
import Box from "../../assets/Rectangle.png"
import DotsAndBoxes from "../../assets/Group.png"
import { Card } from "../../components/Card"


export const Home = () => {
    const projetos = Projeto.projeto;
    return(
        <ContainerHome>
                <ContentAboutAndImage>
                    <AboutDaniel>
                        <JoinTitle>
                            <ContentTitle>
                                Daniel é um <StylePurpleInTitle>Dev Backend</StylePurpleInTitle> com Experiência em <StylePurpleInTitle>Infraestrutura</StylePurpleInTitle></ContentTitle>
                        </JoinTitle>

                        <AboutSubTitle>
                            Dedicado, focado em construir APIs de backend escaláveis 
                            e soluções eficientes.
                        </AboutSubTitle>
                        <ButtonContact>Contate-me!!</ButtonContact>
                    </AboutDaniel>

                    <ContentContainerImageAndCurrently>
                        <ContainerImageMan>
                            <ImageDots src={Dots} alt="Foto pontos brancos" />
                            <ImageMan src={Man} alt="Foto de um homem de capuz e moletom" />
                            <ImageLogo src={Logo} alt="Foto uma logo" />
                        </ContainerImageMan>
                        <ContentCurrently>
                            <BoxImage src={Box} alt="Caixa decorativa rosa" />
                            <TextCurrently>Atuamente trabalhando em</TextCurrently><CurrentlyJob>LABTEC</CurrentlyJob>
                        </ContentCurrently>
                    </ContentContainerImageAndCurrently>
                </ContentAboutAndImage>
                <ProjectsContainer>
                    <ContentLink>
                        #<ProjectsLink>Projetos </ProjectsLink>----------------  <LinkToProjects to={"#"}>View all~~&gt;</LinkToProjects>
                    </ContentLink>
                    <CardGrid>
                        <Card projeto={projetos}/>
                    </CardGrid>
                </ProjectsContainer>
                <ContainerSkills>
                    <ContentLink>
                        #<ProjectsLink>Habilidades  </ProjectsLink>----------
                    </ContentLink>
                    <CootainerSkillAndImg>

                        <ImageBoxes src={DotsAndBoxes} alt="" />
                        <ExternalSkillsList>
                            <PrimaySkillsList>
                                <ContentSkill>
                                    <TitleSkill>Linguagens</TitleSkill>
                                    <ListSkills>
                                        <ItemListSkills>Java </ItemListSkills>
                                        <ItemListSkills>Javscript</ItemListSkills>
                                        <ItemListSkills>Php</ItemListSkills>
                                        <ItemListSkills>Bash</ItemListSkills>
                                    </ListSkills>
                                </ContentSkill>
                                <ContentSkill>
                                    <TitleSkill>Banco de dados</TitleSkill>
                                    <ListSkills>
                                        <ItemListSkills>PostgresSQl</ItemListSkills>
                                        <ItemListSkills>SQLServer</ItemListSkills>
                                        <ItemListSkills>H2 Database</ItemListSkills>
                                    </ListSkills>
                                </ContentSkill>
                                <ContentSkill>
                                    <TitleSkill>Ferramentas</TitleSkill>
                                    <ListSkills>
                                        <ItemListSkills>VSCode</ItemListSkills>
                                        <ItemListSkills>Linux</ItemListSkills>
                                        <ItemListSkills>Git/Github</ItemListSkills>
                                        <ItemListSkills>Api Dog</ItemListSkills>
                                        <ItemListSkills>Proxmox</ItemListSkills>
                                        <ItemListSkills>Docker</ItemListSkills>
                                        <ItemListSkills>VBox / VMWare</ItemListSkills>
                                    </ListSkills>
                                </ContentSkill>
                            </PrimaySkillsList>
                            <SecondarySkillsList>
                            <ContentSkill>
                                    <TitleSkill>Frameworks</TitleSkill>
                                    <ListSkills>
                                        <ItemListSkills>Spring</ItemListSkills>
                                    </ListSkills>
                                </ContentSkill>
                                <ContentSkill>
                                    <TitleSkill>Outros</TitleSkill>
                                    <ListSkills>
                                        <ItemListSkills>HTML/CSS</ItemListSkills>
                                        <ItemListSkills>React</ItemListSkills>
                                    </ListSkills>
                                </ContentSkill>
                            </SecondarySkillsList>
                        </ExternalSkillsList>
                        
                    </CootainerSkillAndImg>
                </ContainerSkills>
        </ContainerHome>
    )
}