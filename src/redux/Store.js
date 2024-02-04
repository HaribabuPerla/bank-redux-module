import { createStore } from "redux"


const initialState=[{
    balance:0,
    date:'',
    mobilenumber:'',
    acType:'',
   
    

}]




function accountReducer(state=initialState,action){
    
    
    switch(action.type){
        case "Deposit":
                        return([ ...state,{
               
                            balance: action.payload.balance,
                            date:action.payload.date,
                            mobilenumber:action.payload.mobilenumber,
                            acType:action.payload.acType
                        }
                        ]
                        
                        )
    case "Withdraw":
                return [...state,{

                    balance: action.payload.balance,
                    date:action.payload.date,
                    mobilenumber:action.payload.mobilenumber,
                    acType:action.payload.acType
                }
                ]

     default :
            return state
                        
    }
}

export const store =createStore(accountReducer)