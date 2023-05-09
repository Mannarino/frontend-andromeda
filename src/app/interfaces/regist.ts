export interface Regist {
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
        regist:boolean,
    }  
}
