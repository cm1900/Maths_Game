var playing = false;
var score;
var action;
var action2;
var timeRemaining;
var correctAnswer;

//if we click on start/ reset
document.getElementById("startreset").onclick = function(){
    
    if(playing){        //if we are playing
        location.reload();  //reload page
        
    }else{                  //if we are not playing yet
        
        playing = true;
        score = 0;          //set score to zero
        timeRemaining = 60;
        document.getElementById("scorevalue").innerHTML = score;
        showElement("timeremaining");       //show countdown box
        hideElement("gameover");
        startCountdown();
        generateQa();
        document.getElementById("startreset").innerHTML = "Reset Game";         //change button to reset
    }
}
    
function showElement(elementId){
    document.getElementById(elementId).style.display = "block";
}

function hideElement(elementId){
    document.getElementById(elementId).style.display = "none";
}

function startCountdown(){
    action = setInterval(function(){
        timeRemaining -= 1;     //reduce time by one second in loop
        if(timeRemaining ==0){
            stopCountdown();
            document.getElementById("gameover").innerHTML = "<p>Game Over!<p/><p>Your score is "+ score +"<p/>.";
            hideElement("timeremaining");
            hideElement("correct");
            hideElement("wrong");
            showElement("gameover");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
        document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
    },1000);
}

function stopCountdown(){
    clearInterval(action);
}

function generateQa(){
    var x = 1 + Math.round(11*Math.random());
    var y = 1 + Math.round(11*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1 + Math.round(3*Math.random());
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer;
    var answer = [correctAnswer];
    for(i= 1; i<5; i++){
        if(i!= correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer = (1 + Math.round(11*Math.random()))*(1 + Math.round(11*Math.random()));
                document.getElementById("box" + i).innerHTML = wrongAnswer;
            }while(answer.indexOf(wrongAnswer)> -1)
                answer.push(wrongAnswer);
            
        }
    }
}
for(i=1; i< 5; i++){
    document.getElementById("box"+i).onclick = function(){
    if(playing){
        if(this.innerHTML == correctAnswer){
            score+= 1;
            document.getElementById("scorevalue").innerHTML = score;
            hideElement("wrong");
            showElement("correct");
            generateQa();
            setTimeout(function(){
                hideElement("correct");
            }, 1000)
        }else{
            score-= 2;
            document.getElementById("scorevalue").innerHTML = score;
            showElement("wrong");
            hideElement("correct");
            setTimeout(function(){
                hideElement("wrong");
            }, 1000)
        }
    }
}
}
    
        
        
        
           //if we click on answer box
    //if we are playing
        //yes
            //increase score
            //show correct box for one second
            //generate new Q&A
        //no
            //show try again box for one second