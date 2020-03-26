package br.brunocatao.websocket.controllers;

import br.brunocatao.websocket.messages.Mensagem;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
  @MessageMapping("/chat") // de onde vem
  @SendTo("/topic/chat") // para onde vai
  public Mensagem sendMessage(Mensagem mensagem) throws Exception {
    return mensagem;
  }
}
