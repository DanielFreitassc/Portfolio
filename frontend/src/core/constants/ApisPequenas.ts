import { IProjeto } from "../projeto/IProjeto";
import Todo from "../../assets/todo.jpg";
import ToBase64 from "../../assets/toBase64.jpg";
export const  ApisPequenas:IProjeto = {
    projeto:[
        {    
            id:1,
            image:ToBase64,
            skill: "Java Springboot PostgreSQL",
            title:"Converter foto para base64",
            description:"API para converter fotos em base64...",
            linkProject:"https://github.com/DanielFreitassc/FIleToBase64"
        },
        {    
            id:2,
            image:Todo,
            skill: "Java Springboot H2",
            title:"Lista de Tarefas",
            description:"Lista de tarefas feitas com spring...",
            linkProject:"https://github.com/DanielFreitassc/TodolistSpring"
        }
    ]
    
}