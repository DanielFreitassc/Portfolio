import { FaDev, FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa"
import { ContactArea, ContactMediaArea, Copy, DanielName, EmailContact, FooterContainer, IconContent, IconsArea, LinkToSocialMedia, MediaTitle, NameRightContent, SplitMediaArea } from "./style"

export const Footer = () => {
    return(
        <FooterContainer>
            <SplitMediaArea>
            <ContactArea>
                <DanielName><IconContent><FaDev/></IconContent><NameRightContent>Daniel</NameRightContent></DanielName>
                <EmailContact>danielfreitassc@gmail.com</EmailContact>
                <p>Desenvolvedor Backend e DevSecOps</p>
            </ContactArea>
            <ContactMediaArea>
                <MediaTitle>Mídias</MediaTitle>
                <IconsArea>
                    <LinkToSocialMedia to={"https://github.com/DanielFreitassc"} target="_blank"><FaGithub /></LinkToSocialMedia>
                    <LinkToSocialMedia to={"https://www.linkedin.com/in/daniel-freitas-26a8a8267/"} target="_blank"><FaLinkedin /></LinkToSocialMedia>
                    <LinkToSocialMedia to={"https://gitlab.com/DanielFreitassc"} target="_blank"><FaGitlab /></LinkToSocialMedia>
                </IconsArea>
            </ContactMediaArea>
            </SplitMediaArea>
            <Copy>© Copyright 2025. Made by Daniel</Copy>
        </FooterContainer>
    )
}