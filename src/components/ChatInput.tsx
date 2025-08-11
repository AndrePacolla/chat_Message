import { useChat } from "@/app/contexts/ChatContext";
import { KeyboardEvent, useState } from "react";

type Props = {
    name: string
}

export const ChatInput = ({name}: Props) => {

const chatCtx = useChat();

const [chatInput, setChatInput] = useState("");

const handleChatInputAction = (event: KeyboardEvent<HTMLInputElement>) => {

    if(event.code.toLowerCase() === "enter"){
        if(chatInput.trim() !== ''){
          chatCtx?.addMessage(name, chatInput.trim());
          setChatInput("");
        }
    }

     
}

    return(

        <input
            className="w-full bg-transparent text-white text-md outline-none"
            placeholder={`{ ${name} }, digite uma mensagem ( e aperte Enter )`}
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyUp={handleChatInputAction}
        />

    )
};