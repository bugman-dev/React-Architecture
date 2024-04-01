export function getStoredValue(name:string) {
    const token = localStorage.getItem(name);
    if(token){
        return token
    }
    return null;
}