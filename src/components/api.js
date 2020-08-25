import * as axios from "axios";

const instance=axios.create({
baseUrl:"https://localhost:3000/"
});

export const AuthAPI={
    me(){
        return instance.get('user');
    },
    login(email, password){
        return instance.post('login', {email, password});
    },
    logout(){
        return instance.delete('login');
    }
}

export default AuthAPI;