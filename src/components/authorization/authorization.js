import React from "react";

const Auth () => {
    const [email, setEmail] = useState('');
    const [email, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым...');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым...');
    const [formValid, setFormValid] = useState(false);

    useEffect( ()=>{
    if(emailError || passwordError){
        setFormValid(false)
    }
    else{
        setFormValid(try)
    }
    },[emailError, passwordError])



    const BlueHandler = (e) => {
        switch(e.target.name) {
            case 'email':
                setEmailDirty(try)
            case 'password':
                setPasswordDirty(try)
                break
        }
    }

    const EmailHandler (e)=>{
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Email: Не Коректный!!!')
        }else {
            setEmailError("")
        }
    }

    const PasswordHandler ()=>{
        setPassword(e.target.value)
        if(e.target.value < 3 || e.target.value >8) {
            setPasswordError('Пароль должен состоять не менее 3х и не больше 8 символов')
        }
        if(!e.target.value < 3 || e.target.value >8) {
            setPasswordError('Пароль не может быть пустым...')
        }else{
            setPasswordError("")
        }
    }


    return(
        <div ClassName="app">
            <form>
                <h1>Регистрация</h1>
                {(emailDirty && emailError) && <div style={{color:red}}>{emailError}</div>}
                <input onChange={e => EmailHandler(e)} value={email} onBlur={e => BlueHandler(e)} type="text"  name='email' placeholder='Enter your email....'/>
                {(passwordDirty && passwordError) && <div style={{color:red}}>{passwordError}</div>}
                <input onChange={e=> PasswordHandler(e)} value={password} onBlur={e => BlueHandler(e)} type="password" name='password' placeholder='Enter your password...'/>
                <button disabled={!formValid} type="submit">Регистрация</button>
            </form>
        </div>
    )
}

export default Auth;