class Player {
  constructor (){}

getCount(){
  var playerCountRef = database.ref('playerCount');
  playerCountRef.on ("value",(data)=>{
      playerCount = data.val();

  })
}
//metodo de atualização de contagem
updateCount (count){
  database.ref("/").update({ //atualiza no banco de dados com referência no nó principal
    playerCount: count //aumenta a contagem de jogadores conforme adicionado um novo nome
  });
}
}
