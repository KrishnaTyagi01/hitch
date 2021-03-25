import React from 'react';
import { useEffect } from 'react/cjs/react.development';

const SignInWithGoogle = () => {
    const insertGapiScript = () => {
        const script = document.createElement('script')
        script.src = 'https://apis.google.com/js/api.js'
        script.onload = () => {
            initializeGoogleSignIn()
        }
        document.body.appendChild(script);
    }

    const initializeGoogleSignIn = () => {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: '1001904143961-1irvhehco0vna3ft694nfu0hrmmn9iks.apps.googleusercontent.com'
            })
            console.log('Api inited')

            window.gapi.load('signin2', () => {
                const params = {
                    onsuccess: () => {
                        console.log('User has finished signing in!')
                    }, scope: 'email',
                    width: 200,
                    height: 50,
                    longtitle: true,
                    theme: 'dark',
                    onfailure: (err) => { console.log(err) }
                }
                window.gapi.signin2.render('loginButton', params)
            })
        })
    }

    useEffect(() => {
        console.log('Loading');
        insertGapiScript();
    }, []);

    return (
        <div id="loginButton">Sign in with Google</div>
    );

}

export default SignInWithGoogle;