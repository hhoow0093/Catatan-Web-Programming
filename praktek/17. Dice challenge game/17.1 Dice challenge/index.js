let result1;
let result2;

function checkResults(){
    if(isNaN(result1) || isNaN(result2)){
        return;
    }
    else{
        setTimeout(() =>{
            if(result1 > result2){
                alert(`player1 won`);
            }
            
            else if(result2 > result1){
                alert(`player2 won`);
            }
            
            else{
                alert(`its a tie`);
            }
            window.location.reload();
        }, 500);
    }

}

document.querySelector('.box1 .go').addEventListener("click", function(){
    const button1 =  document.querySelector('.box1 .go');
    button1.classList.remove('go');
    button1.classList.add('stop');
    button1.innerHTML = "stop";
    let flag = true;
    let number1 = 0;
    const interval = setInterval(() =>{
        if(flag === false){
            console.log(number1);
            result1 = number1;
            clearInterval(interval);
            checkResults();
            return;
        }
        let random = Math.floor(Math.random() * 6) + 1;
        if(random === 1){
            image = document.querySelector('.box1 > img');
            image.src = "./SVG/one.svg";

        }
        else if(random === 2){
            image = document.querySelector('.box1 > img');
            image.src = "./SVG/two.svg";

        }
        else if(random === 3){
            image = document.querySelector('.box1 > img');
            image.src = "./SVG/three.svg";
        }
        else if(random === 4){
            image = document.querySelector('.box1 > img');
            image.src = "./SVG/four.svg";
        }
        else if(random === 5){
            image = document.querySelector('.box1 > img');
            image.src = "./SVG/five.svg";
        }
        else if(random === 6){
            image = document.querySelector('.box1 > img');
            image.src = "./SVG/six.svg";
        }
        number1 = random;

    }, 1);
    document.querySelector('.box1 .stop').addEventListener("click", function(){
      flag = false;
      button1Stop = document.querySelector('.box1 .stop');
      button1Stop.classList.remove('stop');
      button1Stop.classList.add('go');
      button1Stop.innerHTML = "start";      
    });
});


document.querySelector('.box2 .go').addEventListener("click", function(){
    const button2 =  document.querySelector('.box2 .go');
    button2.classList.remove('go');
    button2.classList.add('stop');
    button2.innerHTML = "stop";
    let flag = true;
    let number2 = 0;
    const interval = setInterval(() =>{
        if(flag === false){
            console.log(number2);
            result2 = number2;
            clearInterval(interval);
            checkResults();
            return;
        }
        let random = Math.floor(Math.random() * 6) + 1;
        if(random === 1){
            image = document.querySelector('.box2 > img');
            image.src = "./SVG/one.svg";

        }
        else if(random === 2){
            image = document.querySelector('.box2 > img');
            image.src = "./SVG/two.svg";

        }
        else if(random === 3){
            image = document.querySelector('.box2 > img');
            image.src = "./SVG/three.svg";
        }
        else if(random === 4){
            image = document.querySelector('.box2 > img');
            image.src = "./SVG/four.svg";
        }
        else if(random === 5){
            image = document.querySelector('.box2 > img');
            image.src = "./SVG/five.svg";
        }
        else if(random === 6){
            image = document.querySelector('.box2 > img');
            image.src = "./SVG/six.svg";
        }
        number2 = random;

    }, 1);

    document.querySelector('.box2 .stop').addEventListener("click", function(){
        flag = false;
        button1Stop = document.querySelector('.box2 .stop');
        button1Stop.classList.remove('stop');
        button1Stop.classList.add('go');
        button1Stop.innerHTML = "start";      
      });


});


