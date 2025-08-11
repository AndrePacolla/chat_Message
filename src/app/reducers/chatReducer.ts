import { Message } from "../types/Message"


type AddAction = {
    type: "add";
    payload: {
        user: string;
        text: string;
    }
}


type ChatActions = AddAction;


export const chatReducer = (state: Message[], actions: ChatActions) => { // primero dados iniciais, seg. açoes.
    switch(actions.type){
        case "add":
        return [...state,{
            id: state.length,
            user: actions.payload.user,
            text: actions.payload.text
        }];

        default:
            return state;
    }
}



