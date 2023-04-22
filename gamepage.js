var y = Math.floor(Math.random() * 10 + 1);

var x = document.getElementById("guessField").value;

if(x==y)
{
    alert("CONGRATULATIONS!!!"+playername+"YOUGUESSED IT RIGHT" + guess + " GUESS ");
    guess= 1;
}
else if (x > y)

{
    guess++;
    alert("TRY GUESSING A SMALLER NUMBER");
}
else
{
    guess++
    alert("TRY GUESSING A GREATER NUMBER")
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}