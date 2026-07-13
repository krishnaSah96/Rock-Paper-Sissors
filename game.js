 let score= JSON.parse(localStorage.getItem('score')) || {
            win: 0,
            lose: 0,
            tie: 0
        };
       
        updateScoreElement();


        function playGame(playerMove){
            const computerMove = pickComputerMove();
            
            let result= '';
            if (playerMove === 'scissors'){
                if(computerMove === 'rock'){
                    result = 'You Lose';
                } else if (computerMove === 'paper'){
                    result = 'You Win';
                } else if (computerMove === 'scissors'){
                    result = 'Tie';
                }
            }else if (playerMove === 'paper'){
                    if(computerMove === 'rock'){
                    result = 'You Win';
                } else if (computerMove === 'scissors'){
                    result = 'You Lose';
                } else if (computerMove === 'paper'){
                    result = 'Tie';
                }
            }else if (playerMove === 'rock' ){
                    if(computerMove === 'paper'){
                    result = 'You Lose';
                } else if (computerMove === 'scissors'){
                    result = 'You Win';
                } else if (computerMove === 'rock'){
                    result = 'Tie';
                }
            }
            if( result === 'You Win'){
                score.win +=1;
            }else if( result === 'You Lose'){
                score.lose +=1;
            }
            else if ( result === 'Tie'){
                score.tie +=1;
            }
            localStorage.setItem('score',JSON.stringify(score));

            document.querySelector('.js-result').innerHTML= result;

            document.querySelector('.js-moves').innerHTML=`You ${playerMove}- ${computerMove} Computer`;
            updateScoreElement();
        }
        function updateScoreElement(){
             document.querySelector('.js-score')
              .innerHTML=`Wins: ${score.win}, Lose: ${score.lose}, Tie: ${score.tie}`;
        }

    function pickComputerMove(){
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber>=0 && randomNumber < 1/3){
            computerMove = 'rock';
        }else if( randomNumber >= 1/3 && randomNumber < 2/3){
            computerMove='paper';
        }else if( randomNumber >= 2/3 && randomNumber <1){
            computerMove ='scissors';
        }
        return computerMove;
    }