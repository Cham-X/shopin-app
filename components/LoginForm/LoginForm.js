import {
  useState
} from "react"
import styles from "./LoginForm.module.css"

const LoginForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true)
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(true)

    function changeEmailHandler(event) {
      setEnteredEmail(event.target.value)
    }

    function changePasswordHandler(event) {
      setEnteredPassword(event.target.value)
    }

  function submitFormHandler(event) {
    event.preventDefault();
    console.log(enteredEmail,enteredPassword);
    const emailIsValid = enteredEmail.includes('@');
    const passwordIsValid = enteredPassword.trim().length >= 6;
    setEmailIsValid(emailIsValid);
    setPasswordIsValid(passwordIsValid)
    if (!emailIsValid || !passwordIsValid) {
        console.log("inputs are not valid")
      return;

    };
  
  }


  return ( 
    < section className = {
      styles.formSection
    } >
    < h3 > Login Your Account </h3> 
    <form className = {styles.form }
    onSubmit = {
      submitFormHandler
    } >
    <label htmlFor = "email" > Email </label> 
    <input type = "email"
    id = 'email'
    onChange = {
      changeEmailHandler
    }
    /> 
    < label htmlFor = "password" > Password </label> 
    <input type = "password"
    onChange = {
      changePasswordHandler
    }
    /> 
    < button > Login </button>
     </form>
     <p > Don 't have an account ? signup</p> 
    </section>
  )
}

export default LoginForm