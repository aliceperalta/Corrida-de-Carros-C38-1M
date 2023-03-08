class Player {
  constructor (){}
//metodo de obter a contagem de jogadores
getCount(){
  var playerCountRef = database.ref('playerCount'); //variavel de quantidade de jogadores ligada ao nó no banco de dados
  playerCountRef.on ("value",(data)=>{ //função arrow/seta para obter o valor
      playerCount = data.val(); //aumenta em +1 a contagem a cada nome adicionado

  })
}
//metodo de atualização de contagem
updateCount (count){
  database.ref("/").update({ //atualiza no banco de dados com referência no nó principal
    playerCount: count //aumenta a contagem de jogadores conforme adicionado um novo nome
  });
}
}
