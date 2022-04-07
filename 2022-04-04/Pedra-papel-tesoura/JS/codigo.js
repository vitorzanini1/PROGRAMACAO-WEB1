


   


function verificar(escolha) {

        let button = document.getElementById("button");
        
        var randomNumber = Math.floor(Math.random() * (3 - 0) + 1);
    
        switch(escolha){ 
            case 1:
                switch(randomNumber){
                    case 1: 
                        alert("Pedra! você: EMPATOU");
                        break;
                
                    case 2: 
                        alert("Papel! você: PERDEU");
                        break;

                    case 3:
                        alert("Tesoura! você: VENCEU");
                        break;
                }  
                break;

            case 2: 
                switch(randomNumber){
                    case 1: 
                        alert("Pedra! você: VENCEU");
                        break;
                
                    case 2: 
                        alert("Papel! você: EMPATOU");
                        break;

                    case 3:
                        alert("Tesoura! você: PERDEU");
                        break;
                }  
                break;
            
            case 3: 
                switch (randomNumber) {
                    case 1: 
                        alert("Tesoura! você: PERDEU");
                        break;
                
                    case 2: 
                        alert("Papel! você: VENCEU");
                        break;

                    case 3:
                        alert("Tesoura! você: EMPATOU");
                        break;
                }  
                break;
        }
}
