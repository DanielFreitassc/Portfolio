import { IProjeto } from "../projeto/IProjeto";
import Frotas from "../../assets/frotas.jpg"
import EnvVault from "../../assets/envvault.png"
import Reserve from "../../assets/reserve.jpg"
export const  Projeto:IProjeto = {
    projeto:[
        {    
            id:1,
            image:EnvVault,
            skill: "Java Springboot H2 Next Docker Nginx",
            title:"EnvVault",
            description:"Um software de gerenciamento de variáveis de ambiente...",
            linkProject:"https://github.com/NextSyntaxDev/EnvVault"
        },
        {    
            id:2,
            image:Reserve,
            skill: "Java Spring PostgreSQL Docker",
            title:"Reserva de Salas",
            description:"Uma API simples e eficiente para reserva de espaços...",
            linkProject:"https://github.com/DanielFreitassc/SistemaDeReservasDeSalas"
        },
        {    
            id:3,
            image:Frotas,
            skill: "Java Springboot PostgreSQL",
            title:"Solução Frotas",
            description:"Gerencie motoristas, veículos, reservas e multas",
            linkProject:"https://github.com/DanielFreitassc/SolucaoFrotas"
        }
    ]
    
}