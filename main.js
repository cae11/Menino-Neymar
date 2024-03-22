var motivos = [
    "O ney e bonito ",
    "Dribla muito",
    "Namora muito",
    "Tem varios titulos",
      "Artilheiro dentro e fora dos campos"
  ];
  
  var imagens = [ "https://conteudo.imguol.com.br/c/esporte/ce/2018/02/14/neymar-contra-o-real-madrid-1518649439960_615x300.jpg",
    "https://i.ytimg.com/vi/wp1ZltRNdJs/hqdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRl2ziMIb5aMZFoIvziCY4ltDlMa5RixiKjyWdgjsCFgGKxoehj1WrGiCcli2yCWbJGjk&usqp=CAU", "https://i.ytimg.com/vi/vW8gxN2zBAo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJuGv_7NMGqvqg4722kwOgLaqqDw", "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/12/09/806x444/1_neymar__3_-22137992.jpg?20231106111830"
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }