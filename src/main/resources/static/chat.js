const socket = Stomp.over(new SockJS('/gs-guide-websocket')); // importando a lib cliente do sockjs

// acessando os elementos da página
const formulario    = document.getElementById('form_chat');
const campoMensagem = document.getElementById('campo_msg');
const mensagens     = document.getElementById('mensagens');

// quando enviar uma mensagem
formulario.onsubmit = evento => {
    evento.preventDefault();

    let data = {'texto': campoMensagem.value};
    socket.send("/app/chat", {}, JSON.stringify(data));

    campoMensagem.value = '';
    return false;
};

// conecta
socket.connect({}, (frame) => {
    console.log('Conectado: ' + frame);
    // configura o callback para quando receber uma mensagem
    socket.subscribe('/topic/chat', (data) => {
        let mensagem = JSON.parse(data.body);
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(mensagem.texto));
        mensagens.appendChild(item);
    });
});
