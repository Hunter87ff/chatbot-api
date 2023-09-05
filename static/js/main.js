function sel(id_class){
    let element = document.querySelector(id_class);
    return element
}
//add a sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
let header = sel('.header');
let main = sel('.main');
let footer = sel('.footer');
let body = sel('body');
let chat = sel('.chat');
let send = sel("#send");
let sent_n = sel("#sent");
let received_n = sel("#received");
//click send when clicking enter
sel("#message").addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        send.click();
    }
});
main.style.marginTop = header.offsetHeight + 'px';
main.style.marginBottom= footer.offsetHeight + 'px';
function aclass(element, class_name){
    element.classList.add(class_name);
}
function rclass(element, class_name){
    element.classList.remove(class_name);
}
//append child to chat
function ach(element, child){
    element.appendChild(child);
}
//create element
function clm(element){
    return document.createElement(element);
}
send.addEventListener('click', async function(){
    let message = sel("#message").value;
    if(message == ''){return alert("Enter Something")};
    let message_element = clm('p');
    aclass(message_element, 'h-chat');
    message_element.innerHTML = message;
    ach(chat, message_element);
    sel("#message").value = '';
    //console.log(message);
    //request that message to an api and get a response api url= https://dashboard.87-hunter.repl.co/api/ask?q=message
    fetch(`https://dashboard.87-hunter.repl.co/api/query?q=${message}`)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        let message_element = clm('p');
        aclass(message_element, 'b-chat');
        message_element.innerHTML = data.a;
        setTimeout(function() {
            // Code to be executed after the delay
            ach(chat, message_element);
            let blm = document.querySelectorAll(".h-chat");
            let bbm = elm[elm.length - 1];
            bbm.scrollIntoView();
            received_n.play();
          }, 2000);
    })
        let elm = document.querySelectorAll(".b-chat");
        let llm = elm[elm.length - 1];
        llm.scrollIntoView();
        sent_n.play();
}
);