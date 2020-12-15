import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'
import {registerUser, authenticate} from '../../API/Auth';

const RegisterComponent = ()=>{

    const [values, setValues] = useState({
        name:'',
        email:'',
        password: '',
        error:'',
        loading: false,
        redirectUser: false
    })
    const {name, email, password, error, loading, redirectUser } = values;
    

    const redirectToProfile = () =>{
        if(redirectUser)
        return(
            <Redirect to = '/profile' />
        )
    }

    const handleChange = inputName =>e=>{
        setValues({...values, [inputName]: e.target.value})
    }

    const handleClick = () =>{
        registerUser({ email:email,name:name, password:password})
        .then(res=>{
            if(res.status === 'success'){
                authenticate({name:res.user.name, username:res.user.username, token:res.token},()=>{
                    setValues({...values, redirectUser: true})
                } )
            } else {
                console.log(res);
            }
            
        })
        .catch(err=>console.log(err));
       
    }

    return (
        <>
        <div className="signin">
            <h2 className="signin__heading">Register User</h2>
            <div className="signin__mid">
                <span className="signin__mid--before">Name</span>
                <input onChange={handleChange('name')} type="text" className="signin__mid--input"
                 placeholder="Enter Your Name Here"/>
                <span className="signin__mid--before">Email or Phone Number</span>
                <input onChange={handleChange('email')} type="text" className="signin__mid--input"
                 placeholder="Enter Your Email or Phone Number Here"/>
                <span className="signin__mid--before">Password</span>
                <input onChange={handleChange('password')} type="password" className="signin__mid--input"
                 placeholder="Enter Your Password"/>
            </div>
            <button onClick={handleClick} className="signin__btn">Enter</button>
        </div>
        {redirectToProfile()}
        </>
    )
}

export default RegisterComponent;