import { IProjeto } from "../projeto/IProjeto";
import Arq from "../../assets/arquitetura.png"
import Frotas from "../../assets/frotas.jpg"
import Market from "../../assets/market.jpg"
import List from "../../assets/lista.jpg";
import Reserva from "../../assets/reserve.jpg"
export const  TodosOsProjeto:IProjeto = {
    projeto:[
        {    
            id:1,
            image:Reserva,
            skill: "Java Spring PostgreSQL Docker",
            title:"Reserva de Salas",
            description:"Uma API simples e eficiente para reserva de espaços...",
            linkProject:"https://github.com/DanielFreitassc/SistemaDeReservasDeSalas"
        },
        {    
            id:2,
            image:Frotas,
            skill: "Java Spring PostgreSQL",
            title:"Solução Frotas",
            description:"Gestão de Frotas permite gerenciar motoristas, veículos, reservas e multas",
            linkProject:"https://github.com/DanielFreitassc/SolucaoFrotas"
        },
        {    
            id:3,
            image:Arq,
            skill: "Java Spring H2",
            title:"Desafio UOL",
            description:"Cadastre jogadores com codinomes de listas específicas....",
            linkProject:"https://github.com/DanielFreitassc/desafio-uol"
        },
        {    
            id:4,
            image:Market,
            skill: "Java Spring H2",
            title:"Marketplace",
            description:"API de Produtos para marketplace permite CRUD completo de produtos..",
            linkProject:"https://github.com/DanielFreitassc/Marketplace"
        },
        {    
            id:5,
            image:List,
            skill: "Java Spring H2 Docker",
            title:"Lista Telefônica",
            description:"API de lista telefônica..",
            linkProject:"https://github.com/DanielFreitassc/lista_telefonica_react_and_spring"
        }
    ]
    
}