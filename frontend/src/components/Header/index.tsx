import { FaDev } from "react-icons/fa"
import { ContainerHeader, ContentLink, ContentName, LinkPurple, LinkWhite, LogoName, NavBar, TabsTitle } from "./style"

export const Header = () => {
    return(
        <ContainerHeader>
            <ContentName>
                <LogoName>
                    <FaDev /> Daniel
                </LogoName>
            </ContentName>

            <NavBar>          
            <TabsTitle to={"home"}>
                <ContentLink>
                    <LinkPurple>#</LinkPurple> 
                    <LinkWhite>home</LinkWhite>
                </ContentLink>
            </TabsTitle>
   
            <TabsTitle to={"works"}>
                <ContentLink>
                    <LinkPurple>#</LinkPurple> 
                    <LinkWhite>Trabalhos</LinkWhite>
                </ContentLink>
            </TabsTitle>

            <TabsTitle to={"about-me"}>
                <ContentLink>
                    <LinkPurple>#</LinkPurple> 
                    <LinkWhite>sobre-mim</LinkWhite>
                </ContentLink>
            </TabsTitle>
            
            <TabsTitle to={"contacts"}>
                <ContentLink>
                    <LinkPurple>#</LinkPurple> 
                    <LinkWhite>contatos</LinkWhite>
                </ContentLink>
            </TabsTitle>
            </NavBar>
        </ContainerHeader>
    )
}