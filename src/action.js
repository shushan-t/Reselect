import { SERVER_DATA } from './const';

export const getServerData = () => ( dispatch ) => {
    fetch('https://jsonplaceholder.typicode.com/todos/4')  
    .then(response => {
        if(response.status === 200){
            // console.log(response, "response")
           return  response.json()
             }
             else console.log("we have an error")
        })
    .then(data => {
        console.log(data, "data")
        dispatch({
            type: SERVER_DATA,
            payload: data
        })
    })
    .catch(error => console.log(error))
}


// const axios = require('axios');
// export const getServerData = () => ( dispatch ) => {

// // Make a request for a user with a given ID
// axios.get('https://jsonplaceholder.typicode.com/todos')
//   .then(function (response) {
//     console.log(response);
                    
//     return  response.data[0];
//     // handle success
    
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(data => {
//             console.log(data, "data")
//         dispatch({
//                 type: SERVER_DATA,
//                 payload: data
//             })
//   })
// };