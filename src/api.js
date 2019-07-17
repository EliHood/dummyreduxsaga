import axios from 'axios';


export default {
    json:{
        getData: () => 
            axios.get('https://jsonplaceholder.typicode.com/todos/1').then( res => res.data)
    }
}