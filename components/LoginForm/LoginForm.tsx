import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useGlobalContext } from '../../Contexts/globalContext';
import styles from "./LoginForm.module.css"

interface LoginType {
  email: string;
  password: string;
}




const LoginForm = () => {
  const router = useRouter();
  const { logIn } = useGlobalContext();
  const methods = useForm<LoginType>({ mode: "onBlur" });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = methods;

  const onSubmit = async (data: LoginType) => {
    try {
      logIn(data.email, data.password)
      console.log(data)
      router.push("/")
    } catch (error: any) {
      console.log(error.message)
    }
    console.log('hello')
  }
  return (
    < div className={ styles.formSection }>
      <Image src="/images/Shopin.png" alt="logo" className={ styles.logo } width="1000" height="1000" />
      <h3>Input your details</h3>
      <FormProvider { ...methods }>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <div className={ styles.formElement }>
            <label htmlFor="email">Email</label>
            <input type="email" { ...register("email", { required: "Email is required" }) } />
          </div>
          <div className={ styles.formElement }>
            <label htmlFor="password">Password</label>
            <input type="password" { ...register("password", { required: "Password is required" }) } />
            { errors.password && (
              <p className={ styles.errorMessage }>{ errors.password.message }</p>
            ) }
          </div>
          <div>
            <button type='submit' className={ styles.button }>login</button>
          </div>
          <div className={ styles.signupOption }>
            <p>Don&apos;t have an account?</p><Link href="/signup">sign up</Link>
          </div>
        </form>
      </FormProvider>

    </div>
  );
};

export default LoginForm;