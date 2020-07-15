// Baseado no desafio anterior, utilize a mesma lista de usuários construída.

const usuarios = [
    {
        nome: 'Carlos',
        tecnologias: ['HTML', 'CSS']
    },
    {
        nome: 'Jasmine',
        tecnologias: ['JavaScript', 'CSS']
    },
    {
        nome:'Tuane',
        tecnologias: ['HTML', 'Node.js']
    }
]

//Crie uma função que recebe os dados de um objeto de usuário 
//e retorna SE o usuário trabalha com CSS ou não. 
//Essa função deve retornar um boolean true/false.
function checaSeUsuarioUsaCSS(usuario) {
// Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    for ( let tecnologia of usuario.tecnologias) {
    const encontreiTecnologiaCSS = tecnologia === `CSS`
        if (encontreiTecnologiaCSS) {
            return true
        }
    }
    return false
// SE encontrar, retorne true da função, caso contrário retorne false  

}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
  }



    


