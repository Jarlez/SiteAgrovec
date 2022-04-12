import React from 'react';

export default function Register() {
    const userName = localStorage.getItem('userName')
    return ( <
        h1 style = {
            { textAlign: 'center', color: 'red', fontSize: 100 } } > Registro DE USUÁRIO, Bem vindo fela da puta { userName } < /h1>
    )
}