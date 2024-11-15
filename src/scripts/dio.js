// CLASSIFICADOR DE NÍVEL DE HERÓI

function classificacaoHeroi(XP){
  if (XP <=1000){
    return 'Ferro';
  } else if (XP > 1000 && XP < 2000){
    return 'Bronze';
  }else if (XP > 2000 && XP <= 5000){
    return 'Prata';
  }else if (XP > 5000 && XP <= 7000){
    return 'Ouro';
  }else if (XP > 7000 && XP <= 8000){
    return 'Platina';
  }else if (XP > 8000 && XP <= 9000){
    return 'Ascendente';
  }else if (XP > 9000 && XP <= 10000){
    return 'Imortal';
  } else if (XP > 10000){
    return 'Radiante';
  }
    
}

  function main (){
    const nome = 'Maria'
    console.log('O Herói de nome ' + nome + ' está no nível de ' + classificacaoHeroi(5001))
  }

  main()


  