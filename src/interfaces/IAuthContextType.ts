export default interface ContextType{
    isAuthenticated:boolean;
    login:()=>void,
    logout:()=>void,
}