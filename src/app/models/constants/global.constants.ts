import { IMenuItem, ISocialItem } from "../global.interface";

export const MenuItems:IMenuItem[] = [
    {title:'Perfil Personal', image:'mdi-account-box-outline'},
    {title:'Registro de Programas', image:'mdi-text-box-plus-outline'},
    {title:'Docentes', image:'mdi-account-search-outline'},
    {title:'Postulantes', image:'mdi-account-question-outline'},
    {title:'Programas', image:'mdi-text-box-outline'},
    {title:'Certificaciones Docentes', image:'mdi-certificate-outline'}
];

export const SocialItems:ISocialItem[]=[
    {name:'facebook', icon:'mdi-facebook', url:'https://www.facebook.com/esamcochabambasucursal'},
    {name:'linkedin',icon:'mdi-linkedin', url:'https://www.linkedin.com/company/esam-cochabamba/'},
    {name:'instagram', icon:'mdi-instagram', url:'https://www.instagram.com/esamcochabambasucursal/'}
]
