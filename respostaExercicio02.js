/** * 
💡 Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;

Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, 
cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** 
cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
 */let estudantes = [
    {
        nome: 'MARCELLO',
        notaOne: 4,
        notaTwo: 8
     },
     {
         nome: 'CATARINA',
         notaOne: 6,
         notaTwo: 9 
      },
      {
         nome: 'DUDA',
         notaOne: 9,
         notaTwo: 9 
      },
      {
         nome: 'BEBETE',
         notaOne: 8,
         notaTwo: 7 
      },
 ];
 
 function calMedia(estudante) {
     return ((estudante.notaOne + estudante.notaTwo) / 2).toFixed(2);
 }
 
 // Iterar sobre cada estudante na lista
 for (let estudante of estudantes) {
     let mediaDoEstudante = calMedia(estudante);
     
     // Verificar se o estudante obteve sucesso ou não
     let sucessoNoConcurso = mediaDoEstudante >= 7;
 
     // Exibir mensagem na tela
     alert(`ALUNO ${estudante.nome}, MÉDIA: ${mediaDoEstudante}, ${sucessoNoConcurso ? 'SUCESSO' : 'FALHOU'} NO CONCURSO`);
 }
 