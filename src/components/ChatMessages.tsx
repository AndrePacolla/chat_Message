import { useChat } from "@/app/contexts/ChatContext";
import { useUser } from "@/app/contexts/UserContext";

export const ChatMessages = () => {

    const chatCtx = useChat();
    const userCtx = useUser();

    
    console.log(chatCtx)
    
    console.log(userCtx)

    return(
        <div className="flex flex-col gap-3">
            {chatCtx?.chat.map(item => (
                <div
                key={item.id}
                className={`border border-white/20 rounded-md text-sm 
                    ${item.user === userCtx?.user ?
                         "self-end bg-white/10 p-3 rounded-md" : 
                         "self-start bg-green-950 p-3 rounded md"
                        }
                    
                `}
            
                >

                <div className="font-bold">{item.user}</div>
                
                <p>{item.text}</p>

                </div>

            ))}


        </div>

    );
}