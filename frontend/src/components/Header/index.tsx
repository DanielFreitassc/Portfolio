import { FaDev } from "react-icons/fa"
import { ContainerHeader, ContentLink, ContentName, LinkPurple, LinkWhite, LogoName, NavBar, TabsTitle } from "./style"
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const smoothScrollTo = (target: HTMLElement) => {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Duração em milissegundos
        let startTime: number | null = null;
    
        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
    
        const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        requestAnimationFrame(animation);
    };
    
    useEffect(() => {
        if (location.hash) {
            if (location.pathname === "/") {
                const targetElement = document.getElementById(location.hash.substring(1)) as HTMLElement;
                if (targetElement) {
                    smoothScrollTo(targetElement);
                }
            } else {
                navigate("/");
    
                setTimeout(() => {
                    const targetElement = document.getElementById(location.hash.substring(1)) as HTMLElement;
                    if (targetElement) {
                        smoothScrollTo(targetElement);
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