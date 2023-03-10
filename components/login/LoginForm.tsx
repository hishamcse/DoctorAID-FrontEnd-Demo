import styles from './LoginForm.module.scss';
import {Form, Image, Button, Container, Spinner} from "react-bootstrap";
import React, {useRef, useState} from "react";
import {useRouter} from "next/router";
import {BiLogIn} from "react-icons/bi";
import supabase from "../../db"
import {setPatient} from '../../global'

const server = 'http://localhost:3000';

const emailValidity = (inp: string): boolean => inp.trim() !== '';
const passwordValidity = (inp: string): boolean => inp.trim() !== '';

const LoginForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const inputIdRef = useRef<HTMLInputElement | null>(null);
    const inputPasswordRef = useRef<HTMLInputElement | null>(null);
    const [formValid, setFormValid] = useState(true);
    const [showErr, setShowErr] = useState(false);

    const router = useRouter();

    const loginDataHandler = async (data1: any) => {
        console.log(data1);
        const {data, error} = await supabase.from('Doctor').select().match({email : data1.email, password : data1.password});
        console.log(data);
        console.log(error);
        if(error){
            setShowErr(true);
        }
        else if(data.length == 0){
            setShowErr(true);
        }
        else{
            await router.push(`/doctor`);
        }
    }

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        const email = inputIdRef.current?.value;
        const password = inputPasswordRef.current?.value;

        if (!email || !password || !emailValidity(email) || !passwordValidity(password)) {
            setFormValid(false);
            return;
        }

        setFormValid(true);
        setIsSubmitting(true);

        await loginDataHandler({email: email, password: password});

        // fetch(`${server}/user/doctor`, {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     credentials: 'include',
        //     body: JSON.stringify({
        //         email: email,
        //         password: password
        //     })
        // }).then(resp => {
        //     if(resp.status !== 200) throw new Error();
        //     return resp.json();
        // }).then(data => {
        //     loginDataHandler(data);
        // }).catch(_ => {
        //     setFormValid(false);
        // }).finally(async () => {
        //     setIsSubmitting(false);
        // });
    }

    return (
        <Form className={styles.content} onSubmit={submitHandler}>
            <div className={styles['form-header']}>
                <h3>Login Form</h3>
            </div>
            <div className={`${styles.id}`}>
                <Form.Floating className="mb-4 mt-5">
                    <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="email"
                        ref={inputIdRef}
                    />
                    <label htmlFor="floatingInputCustom">
                        <big><BiLogIn/>&nbsp;&nbsp;</big>
                        Doctor ID
                    </label>
                </Form.Floating>
            </div>
            <Form.Floating className="mb-4">
                <Form.Control
                    id="floatingPasswordCustom"
                    type="password"
                    placeholder="Password"
                    ref={inputPasswordRef}
                />
                <label htmlFor="floatingPasswordCustom">
                    <Image src='/password-icon.png' width={20} height={20} alt='id' className={styles.passImg}/>
                    Password
                </label>
            </Form.Floating>

            {!formValid &&
                <p className={styles['error-text']}>Server processing failed!! Check inputs</p>}

            <Container className='d-flex'>
                <Button className={`${styles.button} mb-4`} variant="info" size="lg" type='submit'>
                    Submit
                </Button>
                {isSubmitting && <Spinner animation="border" variant="danger"/>}
            </Container>
        </Form>
    );
}

export default LoginForm;