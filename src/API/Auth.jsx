const API = process.env.REACT_APP_BACKENDAPI;

export const CheckUserExist = (username) =>{
    return fetch(`http://167.71.237.202/api/check-user-existence/`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
            // Origin: 'http://localhost:3000'
            // 'Access-Control-Allow-Origin': '*' 

        },
        body: JSON.stringify(username)
        
    })
    .then(res=>{
        console.log(res);
        return res.json();
    })
    .catch(err=>{
        console.log(err);
    })
}


export const loginUser = (user) =>{
    return fetch(`http://167.71.237.202/api/login/`, {
       method: "POST",
       headers:{
            "Content-Type": "application/json",
            "Accept": 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res=>{
        console.log(res);
        return res.json()
    })
    .catch(err=>console.log(err)) 
        
}

export const authenticate =(data, next)=>{
    if(typeof window !== "undefined"){
        localStorage.setItem("userdata", JSON.stringify(data));
        next();
    }
}

export const validateOtp = (otp) =>{
    return fetch(`http://167.71.237.202/api/validate-otp/`, {
        method: "POST",
        headers:{
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(otp)
    })
    .then(res=>{
        console.log(res);
        return res.json()
    })
    .catch(err=>console.log(err))
}

export const registerUser = (userdetails)=>{
    return fetch(`http://167.71.237.202/api/register/`, {
        method: "POST",
        headers:{
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(userdetails)
    })
    .then(res=>{
        console.log(res);
        return res.json();
    })
    .catch(err=>console.log(err))
}

export const isAuthenticated = () =>{
    if(typeof window == 'undefined'){
        return false;
    }
    if(localStorage.getItem('userdata')){
      return JSON.parse(localStorage.getItem('userdata'))
    }

   else{
    return false;
   }
   
}