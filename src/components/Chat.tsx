import { useUser } from "@/app/contexts/UserContext";
import { NameInput } from "./NameInput";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

export const Chat = () => {



    const userCtx = useUser();

    if(!userCtx) return null; // se nao tiver nenhuma informacao . (Boas praticas, quesito Segurança).
    if(!userCtx.user) return <NameInput/>// dentro do chat crio input para coletar nome.


    return(
        <div className="border border-white/30 rounded-md mt-20">
              <div className="h-96 p-3 overflow-y-scroll break-words">
                 <ChatMessages/>
              </div>

              <div className="border-t border-t-white/30 p-3">
                 <ChatInput name={userCtx.user}/>
              </div>
              <div className="border-t border-t-white/30 p-3">
                 <ChatInput name="robô"/>
              </div>
        </div>
    )
}











    // Passo1 Saber o nome do Usuário.


    // Passo2  Input de adicionar mensagens.

    // Passo3 Histórico de mensagens. 