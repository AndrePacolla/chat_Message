
import { useUser } from "@/app/contexts/UserContext";
import { KeyboardEvent, useState } from "react"

export const NameInput = () => {

    const useCtx = useUser();


    const [nameInput, setNameInput] = useState("");

    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.code.toLowerCase() === "enter"){
            if(nameInput.trim() !== "" && nameInput !== "bot"){
              useCtx?.setUser(nameInput.trim());

            }
        }
    }

    return(
        <div className="mt-14">
            <p className="text-xl mb-4">Qual o seu nome ?</p>
            <div className="flex gap-3 items-center text-lg">
                <input type="text"
                className=" flex-1 border border-white/30 rounded-md outline-none px-4 py-3 text-white bg-white/10"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onKeyUp={handleKeyUpAction}
                />
            </div>


        </div>
    )
}