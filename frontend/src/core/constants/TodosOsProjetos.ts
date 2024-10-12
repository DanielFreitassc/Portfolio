import { IProjeto } from "../projeto/IProjeto";
import Arq from "../../assets/arquitetura.png"
import Frotas from "../../assets/frotas.jpg"
import Market from "../../assets/market.jpg"
import List from "../../assets/lista.jpg";
export const  TodosOsProjeto:IProjeto = {
    projeto:[
        {    
            id:1,
            image:Frotas,
            skill: "Java Springboot PostgreSQL",
            title:"Solução Frotas",
            description:"Gestão de Frotas permite gerenciar motoristas, veículos, reservas e multas",
            linkProject:"https://github.com/DanielFreitassc/SolucaoFrotas"
        },
        {    
            id:2,
            image:Arq,
            skill: "Java Springboot H2",
            title:"Desafio UOL",
            description:"Cadastre jogadores com codinomes de listas específicas....",
            linkProject:"https://github.com/DanielFreitassc/desafio-uol"
        },
        {    
            id:3,
            image:Market,
            skill: "Java Springboot H2",
            title:"Marketplace",
            description:"API de Produtos para marketplace permite CRUD completo de produtos..",
            linkProject:"https://github.com/DanielFreitassc/Marketplace"
        },
        {    
            id:4,
            image:List,
            skill: "Java Spring H2 Docker",
            title:"Lista Telefônica",
            description:"API de lista telefônica..",
            linkProject:"https://github.com/DanielFreitassc/lista_telefonica_react_and_spring"
        }
    ]
    
}