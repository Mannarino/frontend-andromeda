export interface Login {
    data:{
        token:string,
        user:{
           name:string,
           email:string,
           rol:string
        }
    }
    message:string,
    operation:{
        login:boolean,
    }  
}
