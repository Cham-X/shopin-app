import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import {
  FormProvider,
  useForm
} from 'react-hook-form';
import { useGlobalContext } from '../../Contexts/globalContext';
import styles from "./signupForm.module.css";

interface SignupType {
  email: string;
  password: string;
  password_confirm: string;
};



const SignupForm = () => {

  const { signUp } = useGlobalContext();
  const router = useRouter();

  const methods = useForm<SignupType>({ mode: "onBlur" });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = methods;

  const onSubmit = async (data: SignupType) => {
    try {
      await signUp(data.email, data.password);
      router.push("/")
    } catch (error: any) {
      console.log(error.message)
    }
  };

  return (
    < div className={ styles.formSection }>
      <Image src="/images/Shopin.png" alt="logo" className={ styles.logo } width="1000" height="1000" />
      <h3>Signup with us</h3>
      <FormProvider { ...methods }>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <div className={ styles.formElement }>
            <label htmlFor="email">Email</label>
            <input type="email" { ...register("email", { required: "Email is required" }) } />
          </div>
          <div className={ styles.formElement }>
            <label htmlFor="password">Password</label>
            <input type="password" { ...register("password", { required: "Password is required" }) } />
          </div>
          <div className={ styles.formElement }>
            <label htmlFor="password_confirm">Comfirm Password</label>
            <input type="password" { ...register("password_confirm", { required: "Verify Your Password" }) } />
            { errors.password_confirm && (
              <p className={ styles.errorMessage }>{ errors.password_confirm.message }</p>
            ) }
          </div>
          <div>
            <button type='submit' className={ styles.button
            }>Signup</button>
          </div>
          <div className={ styles.signupOption }>
            <p>Already have an account?</p><Link href="/login">Login</Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignupForm;