 
function writeCards(names,event){
    const messages = [];
    for(let i = 0;  i < 3; i++ ){
        const greetingMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(greetingMessage);
    }
return messages;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));


//countdown  function

function countDown(){
let i = 10;
while(i >= 0){
    console.log(i);
    i--;
}
}

countDown();
