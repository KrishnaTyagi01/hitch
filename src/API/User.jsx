export const getProfile = () => {
    return fetch(`http://167.71.237.202/profiles/3/`, {
        method: "GET"

    })
    .then(res=>{
        console.log(res)
        return res.json();
    })
    .catch(err=>{
        console.log(err);
    })
} 


export const getSelfProfile = (token) =>{
    return fetch(`http://167.71.237.202/profiles/self/`,{
        method: "GET",
        headers:{
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `Token ${token}`
        }
    })
    .then(res=>{
        console.log(res)
        return res.json()
    })
    .catch(err=>{
        console.log(err)
    })
}