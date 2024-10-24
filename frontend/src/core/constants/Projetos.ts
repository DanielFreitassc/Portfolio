import { IProjeto } from "../projeto/IProjeto";
import Frotas from "../../assets/frotas.jpg"
import Market from "../../assets/market.jpg"
import Reserve from "../../assets/reserve.jpg"
export const  Projeto:IProjeto = {
    projeto:[
        {    
            id:1,
            image:Reserve,
            skill: "Java Spring PostgreSQL Docker",
            title:"Reserva de Salas",
            description:"Uma API simples e eficiente para reserva de espaços...",
            linkProject:"https://github.com/DanielFreitassc/SistemaDeReservasDeSalas"
        },
        {    
            id:2,
            image:Frotas,
            skill: "Java Springboot PostgreSQL",
            title:"Solução Frotas",
            description:"Gestão de Frotas permite gerenciar motoristas, veículos, reservas e multas",
            linkProject:"https://github.com/DanielFreitassc/SolucaoFrotas"
        },
        {    
            id:3,
            image:Market,
            skill: "Java Springboot H2",
            title:"Marketplace",
            description:"API de Produtos para marketplace permite CRUD completo de produtos..",
            linkProject:"https://github.com/DanielFreitassc/Marketplace"
        }
    ]
    
}