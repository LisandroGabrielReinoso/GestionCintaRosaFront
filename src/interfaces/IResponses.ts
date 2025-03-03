export default interface Responses<T=null>{
    success:boolean;
    message?:string;
    data?:T;
    token?:string;
}