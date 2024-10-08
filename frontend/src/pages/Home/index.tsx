import { 
    AboutBodyText,
    AboutDaniel, 
    AboutLink, 
    AboutMeContainer, 
    AboutSubTitle, 
    AboutTextArea, 
    AboutTitle, 
    BoxImage, 
    ButtonContact, 
    CardGrid, 
    ContactContainer, 
    ContactContent, 
    ContainerContentBodyText, 
    ContainerHome, 
    ContainerImageMan, 
    ContainerSkills, 
    ContentAboutAndImage,
    ContentBodyText,
    ContentContacts,
    ContentContainerImageAndCurrently, 
    ContentCurrently, 
    ContentLink, 
    ContentManTwo, 
    ContentSkill, 
    ContentTitle, 
    CootainerSkillAndImg, 
    CurrentlyJob, 
    ExternalSkillsList, 
    IconsContact, 
    ImageBoxes, 
    ImageDots, 
    ImageLogo, 
    ImageMan, 
    ItemListSkills, 
    JoinTitle, 
    LineDecoration, 
    LinkToProjects, 
    ListSkills, 
    PrimaySkillsList, 
    ProjectsContainer, 
    ProjectsLink, 
    SecondarySkillsList, 
    SplitAbout, 
    SplitContacts, 
    StylePurpleInTitle, 
    TextCurrently,
    TitleContacts,
    TitleSkill
} from "./style"

import { Projeto } from "../../core/constants/Projetos"
import Man from "../../assets/Man.png"
import Dots from "../../assets/Dots.png"
import Logo from "../../assets/Logo.png"
import Box from "../../assets/Rectangle.png"
import DotsAndBoxes from "../../assets/Group.png"
import { Card } from "../../components/Card"
import ManTwo from "../../assets/ManTwo.png"
import { MdEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"

export const Home = () => {
    const projetos = Projeto.projeto;
    return(
        <ContainerHome>
                <ContentAboutAndImage>
                    <AboutDaniel>
                        <JoinTitle>
                            <ContentTitle>
                                Daniel é um <StylePurpleInTitle>Dev Backend</StylePurpleInTitle> com Experiência em <StylePurpleInTitle>Infraestrutura</StylePurpleInTitle>
                            </ContentTitle>
                        </JoinTitle>

                        <AboutSubTitle>
                            Dedicado, focado em construir APIs de backend escaláveis 
                            e soluções eficientes.
                        </AboutSubTitle>
                        <ButtonContact to={"#"} target="_blank">Contate-me!!</ButtonContact>
                    </AboutDaniel>

                    <ContentContainerImageAndCurrently>
                        <ContainerImageMan>
                            <ImageDots src={Dots} alt="Foto pontos brancos" />
                            <ImageMan src={Man} alt="Foto de um homem de capuz e moletom" />
                            <ImageLogo src={Logo} alt="Foto uma logo" />
                        </ContainerImageMan>
                        <ContentCurrently>
                            <BoxImage src={Box} alt="Caixa decorativa rosa" />
                            <TextCurrently>Atuamente trabalhando em</TextCurrently><CurrentlyJob>LABTEC/SATC</CurrentlyJob>
                        </ContentCurrently>
                    </ContentContainerImageAndCurrently>
                </ContentAboutAndImage>
                <ProjectsContainer>
                    <ContentLink>
                        #<ProjectsLink>Projetos </ProjectsLink><LineDecoration>----------------</LineDecoration><LinkToProjects to={"/projects"}>Ver tudo~~&gt;</LinkToProjects>
                    </ContentLink>
                        <CardGrid>
                            <Card projeto={projetos}/>
                        </CardGrid>
                </ProjectsContainer>
                <ContainerSkills>
                    <ContentLink>
                        #<ProjectsLink>Habilidades  </ProjectsLink><LineDecoration>----------</LineDecoration>
                    </ContentLink>
                    <CootainerSkillAndImg>

                        <ImageBoxes src={DotsAndBoxes} alt="" />
                        <ExternalSkillsList>
                            <PrimaySkillsList>
                                <ContentSkill>
                                    <TitleSkill>Linguagens</TitleSkill>
                                    <ListSkills>
                                        <ItemListSkills>Java </ItemListSkills>
                                        <ItemListSkills>Javascript</ItemListSkills>
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
                <AboutMeContainer>
                    <ContentLink>
                        #<ProjectsLink>Sobre-mim  </ProjectsLink><LineDecoration>-----------------</LineDecoration>
                    </ContentLink>

                    <SplitAbout>
                    <AboutTextArea>  
                            <AboutTitle>Olá, eu sou Daniel!</AboutTitle>
                            <AboutBodyText>
                            Sou estudante de Engenharia de Computação e
                            desde muito jovem, tenho um grande interesse
                            por servidores. Atualmente, trabalho como estagiário na SATC/LABTEC,
                            onde sou responsável pela infraestrutura e pelo backend de
                            nossos sites. Tenho um forte interesse
                            na área de DevSecOps.
                            <AboutLink to={"#"} target="_blank">sobre</AboutLink>
                            </AboutBodyText>
                            
                    </AboutTextArea>
                    <ContentManTwo src={ManTwo} alt="Homem com mão no rosto de capuz" />
                    </SplitAbout>
                </AboutMeContainer>
                <ContactContainer>
                    <ContentLink>
                        #<ProjectsLink>Contatos  </ProjectsLink>------
                    </ContentLink>

                    <SplitContacts>
                        <ContainerContentBodyText>
                        <ContentBodyText>
                        Se você tiver interesse em discutir oportunidades ou
                        precisar de suporte para algum projeto, não hesite em
                        me contatar. Estou disponível para trabalho freelance e
                        sempre aberto a novas colaborações.
                        </ContentBodyText>
                        </ContainerContentBodyText>
                        <ContentContacts>
                            <TitleContacts> Me envie uma mensagem</TitleContacts>
                            <ContactContent to={"https://www.linkedin.com/in/daniel-freitas-26a8a8267/"} target="_blank"><IconsContact><FaLinkedin /></IconsContact>linkedin.com</ContactContent>
                           
                            <ContactContent to={"mailto:danielfreitassc@gmail.com"}><IconsContact><MdEmail /></IconsContact>danielfreitassc@gmail.com</ContactContent>
                        </ContentContacts>
                    </SplitContacts>
                </ContactContainer>
        </ContainerHome>
    )
}