// =========================
// CHATBOT
// =========================

const chatButton = document.getElementById("chatButton");
const chatContainer = document.getElementById("chatContainer");
const closeChat = document.getElementById("closeChat");
const sendButton = document.getElementById("sendButton");
const userMessage = document.getElementById("userMessage");
const chatMessages = document.getElementById("chatMessages");

chatButton.addEventListener("click", () => {
    chatContainer.style.display = "block";
});

closeChat.addEventListener("click", () => {
    chatContainer.style.display = "none";
});

function addMessage(text, className) {

    const message = document.createElement("div");

    message.className = className;

    message.innerHTML = text;

    chatMessages.appendChild(message);

    chatMessages.scrollTop = chatMessages.scrollHeight;

}

function getBotReply(message) {

    message = message.toLowerCase();

    if(message.includes("price") || message.includes("cost")){

        return "Hair Cutting: €25-45<br>Hair Colouring: €60-120<br>Hair Styling: €30-80<br>Hair Extensions: €150-400<br>Perm: €70-110";

    }

    if(message.includes("service")){

        return "We offer Hair Cutting, Hair Colouring, Hair Styling, Hair Extensions and Perm.";

    }

    if(message.includes("opening") || message.includes("hours")){

        return "Monday-Friday: 9:00 AM - 6:00 PM<br>Saturday: 9:00 AM - 3:00 PM<br>Sunday: Closed";

    }

    if(message.includes("contact") || message.includes("phone")){

        return "Phone: 0771 5485498557<br>Email: goldentouchhairstudio@gmail.com";

    }

    if(message.includes("address") || message.includes("where")){

        return "You can find us at Tallheimerstr. 10.";

    }

    if(message.includes("book")){

        return "Please use the booking form on this page to request an appointment.";

    }

    return "Sorry, I can only answer questions about Golden Touch Hair Studio.";

}

sendButton.addEventListener("click", () => {

    const message = userMessage.value.trim();

    if(message === "") return;

    addMessage(message,"user");

    const reply = getBotReply(message);

    setTimeout(()=>{

        addMessage(reply,"bot");

    },500);

    userMessage.value="";

});

userMessage.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        sendButton.click();

    }

});