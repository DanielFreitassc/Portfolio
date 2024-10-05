import { ContainerHeader, ContentLink, ContentName, LinkPurple, LinkWhite, TabsTitle } from "./style"

export const Header = () => {
    return(
        <ContainerHeader>
            <ContentName>
                Daniel
            </ContentName>


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
        </ContainerHeader>
    )
}