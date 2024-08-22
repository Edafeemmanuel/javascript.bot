
var apikey = '921e2f2f0b90758e6558902434f62c2b';
//Convert to 12 hour format

function getCurrentTime(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var ampm = hours >= 12? 'PM' : "AM";


hours = hours % 12;
hours = hours ? hours : 12; //Handle midnight (0 hours)

//pad minutes with leading zero if neccessary
minutes = minutes < 10 ? '0' + minutes : minutes;

//create the formatted string 
var  formattedTime = hours + ':' + minutes + " " + ampm;
return formattedTime;
}
function sendMessage(){
    var userInput = document.getElementById("userInput");
    var message = userInput.value;

    if(message.trim() !== ""){
        appendMessage("You", message);
        userInput.value = "";
        processMessage(message);
    }
    
}
function appendMessage (sender, message) {
    var chatContainer = document.getElementById("chatContainer");
    var messageElement = document.createElement('p');
    messageElement.innerHTML = '<strong>' + sender + ':</strong>' + message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;

}

function processMessage(message){
    if(message.includes("hello")) {
        response = "I am a chatbot, so I don't have feelings, but thank you asking";
    }else if (message.includes('weather')){ 
        getWeather('Davao');  
        appendMessage('Chatbot',response);
        return;
    } else if (message.includes('pizza')){
        response = "I love pizza! What's your favorite topping?";
    } else if (message.includes('music')){   
        response = "I enjoy listening to various genres of music."; 
    } else if (message.includes('movie')){  
        response = "Have you watched any good movies lately?"; 
    } else if (message.includes('book')){ 
        response = "I'm an avid reader. Do you have any book suggestions?";     
    } else if (message.includes('vacation')){  
        response = "I could use a vacation right now! where would you like to go?";
    } else if (message.includes('exercise')){   
        response = "Regular exercise is important for a healthy lifestyle."; 
    } else if (message.includes('coffee')){  
        response = "I can't start my day without a good cup of coffee."; 
    } else if (message.includes('joke')){ 
        response = "Sure, here's a joke for you: why don't scientists trust atoms?."; 
    } else if (message.includes('news')){ 
        response = "I can provide you with the latest news update. What topic are you looking for?";
    } else if (message.includes('game')){
        response = "I enjoy playing games. What's your favorite game?";
    } else if (message.includes('sport')){
        response = "Sports are exciting! which sport do you enjoy watching or playing?";
    }  else if (message.includes('time')){
        var formattedTime = getCurrentTime();
        response = "The current time is " + formattedTime; 
    }                           
     setTimeout(function() {
        appendMessage("Chatbot", response); 
    }, 5000);

}


function getWeather(city){
    var apikey = '921e2f2f0b90758e6558902434f62c2b';
    var apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;



fetch(apiurl).then(response => response.json())
.then(data => {
    var description = data.weather[0].description;
    response = `The weather today is ${description}.`
    appendMessage('Chatbot', response);
}).catch(error => {
    console.log ('Error:',error);
});
}