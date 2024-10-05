import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa"
import { ContactArea, ContactMediaArea, Copy, DanielName, EmailContact, FooterContainer, IconsArea, LinkToSocialMedia, MediaTitle, SplitMediaArea } from "./style"

export const Footer = () => {
    return(
        <FooterContainer>
            <SplitMediaArea>
            <ContactArea>
                <DanielName>Daniel</DanielName>
                <EmailContact>danielfreitassc@gmail.com</EmailContact>
                <p>Desenvolvedor Backend e DevOps</p>
            </ContactArea>
            <ContactMediaArea>
                <MediaTitle>Media</MediaTitle>
            <IconsArea>
                <LinkToSocialMedia to={"#"}><FaGithub /></LinkToSocialMedia>
                <LinkToSocialMedia to={"#"}><FaLinkedin /></LinkToSocialMedia>
                <LinkToSocialMedia to={"#"}><FaGitlab /></LinkToSocialMedia>
                
            </IconsArea>
            </ContactMediaArea>
            </SplitMediaArea>
            <Copy>© Copyright 2024. Made by Daniel</Copy>
        </FooterContainer>
    )
}