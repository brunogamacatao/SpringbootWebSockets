package br.brunocatao.websocket.messages;

import lombok.Data;

@Data
public class Greeting {
  private String content;

  public Greeting() {
    this("");
  }

  public Greeting(String content) {
    this.content = content;
  }
}
