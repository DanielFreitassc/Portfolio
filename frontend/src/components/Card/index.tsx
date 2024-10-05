import { IProjeto } from "../../core/projeto/IProjeto";
import { CardContainer, ContentSkills, ContentTitleAndDescription, ImageContent, ImageSkill, RedirectToGithub, TextSkills, TextSubTitle, TextTitle } from "./style"

export const Card = ({projeto}: IProjeto) => {
    return(
        <>
            {projeto.map((item) => (
                <CardContainer key={item.id}>
                <ImageContent>
                    <ImageSkill src={item.image} alt="" />
                </ImageContent>
                <ContentSkills>
                    <TextSkills>{item.skill}</TextSkills>
                </ContentSkills>
                <ContentTitleAndDescription>
                    <TextTitle>{item.title}</TextTitle>
                    <TextSubTitle>{item.description}</TextSubTitle>
                </ContentTitleAndDescription>
                <RedirectToGithub to={item.linkProject}>Ver Projeto</RedirectToGithub>
            </CardContainer>
            ))}
        </>
        
    )
}