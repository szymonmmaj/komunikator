package pl.majewski.komunikator;

import org.aspectj.bridge.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller

public class komunikatorConfig {

    @MessageMapping("/komunikator")
    @SendTo("/topic/information")

    public Message get(Message message) {
    return message;
    }

    }


