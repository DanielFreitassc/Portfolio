import { Card } from "../../components/Card"
import { ApisPequenas } from "../../core/constants/ApisPequenas";
import { TodosOsProjeto } from "../../core/constants/TodosOsProjetos";
import { ContentLink, ProjectsLink } from "../Home/style"
import { ContainerApiSmall, ContainerProject, ContentsProjectsCards, SubTitle } from "./style"

export const Projects = () => {
    const projetos = TodosOsProjeto.projeto;
    const projetos2 = ApisPequenas.projeto;
    return(
        <ContainerProject>
            <ContentLink>
                /<ProjectsLink>Projetos</ProjectsLink>
            </ContentLink>
                <SubTitle>Uma lista dos meus projetos</SubTitle>
            <ContentLink>
                #<ProjectsLink>Apis completas</ProjectsLink>
            </ContentLink>
            <ContentsProjectsCards>
                <Card projeto={projetos}/>
            </ContentsProjectsCards>
            
            <ContainerApiSmall>
                <ContentLink>
                    #<ProjectsLink>Apis pequenas</ProjectsLink>
                </ContentLink>

                <ContentsProjectsCards>
                    <Card projeto={projetos2}/>
                </ContentsProjectsCards>

            </ContainerApiSmall>
        </ContainerProject>
    )
}