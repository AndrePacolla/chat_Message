import { Message } from "../types/Message"


type AddAction = {
    type: "add";
    payload: {
        user: string;
        text: string;
    }
}


type ChatActions = AddAction;


export const chatReducer = (state: Message[] , actions: ChatActions) => { // paramentro, 1 dados iniciais , dps acões.
    switch(actions.type){
        case "add":
            return [ ...state, {
                id: state.length,
                user: actions.payload.user,
                text: actions.payload.text
            }] ;

        default: 
            return state;
    }


}