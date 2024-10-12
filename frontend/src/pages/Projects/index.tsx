import { Card } from "../../components/Card"
import { ApisPequenas } from "../../core/constants/ApisPequenas";
import { TodosOsProjeto } from "../../core/constants/TodosOsProjetos";
import { ContentLink, ProjectsLink } from "../Home/style"
import { CardsAlls, ContainerApiSmall, ContainerProject, SubTitle } from "./style"

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
            <CardsAlls>
                <Card projeto={projetos}/>
            </CardsAlls>
            
            <ContainerApiSmall>
                <ContentLink>
                    #<ProjectsLink>Apis pequenas</ProjectsLink>
                </ContentLink>
            
                <CardsAlls>
                    <Card projeto={projetos2}/>
                </CardsAlls>
                
            </ContainerApiSmall>
        </ContainerProject>
    )
}