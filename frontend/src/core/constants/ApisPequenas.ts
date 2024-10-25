import { IProjeto } from "../projeto/IProjeto";
import Todo from "../../assets/todo.jpg";
import List from "../../assets/lista.jpg";
export const  ApisPequenas:IProjeto = {
    projeto:[
        {    
            id:1,
            image:Todo,
            skill: "Java Springboot H2",
            title:"Lista de Tarefas",
            description:"Lista de tarefas feitas com spring...",
            linkProject:"https://github.com/DanielFreitassc/TodolistSpring"
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