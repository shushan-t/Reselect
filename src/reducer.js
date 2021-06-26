import { SERVER_DATA } from './const';


export const servserReduser = (state = [], action) => {
    console.log(action.payload)
    switch(action.type){
        case SERVER_DATA:
            
        return {
            ...state,
            ...action.payload
        };
        default:
        return state
    }
}


// const ACTION_HENDELER={
//     [SERVER_DATA]:(state,action)=>{
//         return {
//             ...state,
//             serverData:[...action.payload]
//         }
//     },
//   }

//   const initialState={
//       serverData:[]
//   }
// export const servserReduser = (state = initialState, action) => {
//   const handeler = ACTION_HENDELER[action.type];
//   return handeler?handeler(state,action):state;
// }