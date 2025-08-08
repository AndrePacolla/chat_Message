import { useUser } from "@/app/contexts/UserContext";
import { NameInput } from "./NameInput";

export const Chat = () => {


    // Passo1 Saber o nome do Usuário.


    // Passo2  Histórico de mensagens. 

    // Passo3 Input de adicionar mensagens.



    const userCtx = useUser();

    if(!userCtx) return null; // se nao tiver nenhuma informacao . (Boas praticas, quesito Segurança).
    if(!userCtx.user) return <NameInput/>// se nao tivermos um campo prenchido.


    return(
        <div className="border border-white/30 rounded-md">
                ...
        </div>
    )
}