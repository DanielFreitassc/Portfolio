import { FaDev } from "react-icons/fa"
import { ContainerHeader, ContentLink, ContentName, LinkPurple, LinkWhite, LogoName, NavBar, TabsTitle } from "./style"
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.hash) {
            if (location.pathname === "/") {
                const targetElement = document.getElementById(location.hash.substring(1));
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                navigate("/");
                
                setTimeout(() => {
                    const targetElement = document.getElementById(location.hash.substring(1));
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100);
            }
        }
    }, [location, navigate]);

    return(
        <ContainerHeader>
            <ContentName>
                <LogoName>
                    <FaDev /> Daniel
                </LogoName>
            </ContentName>

            <NavBar>          
            <TabsTitle to={"/"}>
                <ContentLink>
                    <LinkPurple>#</LinkPurple> 
                    <LinkWhite>home</LinkWhite>
                </ContentLink>
            </TabsTitle>
   
            <TabsTitle to={"/projects"}>
                <ContentLink>
                    <LinkPurple>#</LinkPurple> 
                    <LinkWhite>Projetos</LinkWhite>
                </ContentLink>
            </TabsTitle>

            <TabsTitle to={"#about-me"}>
                <ContentLink>
                    <LinkPurple>#</LinkPurple> 
                    <LinkWhite>sobre-mim</LinkWhite>
                </ContentLink>
            </TabsTitle>
            
            <TabsTitle to={"#contacts"}>
                <ContentLink>
                    <LinkPurple>#</LinkPurple> 
                    <LinkWhite>contatos</LinkWhite>
                </ContentLink>
            </TabsTitle>
            </NavBar>
        </ContainerHeader>
    )
}