import styles from './PatientSearch.module.scss';
import {Form, Image, Button, Container, Spinner} from "react-bootstrap";
import React, {useRef, useState} from "react";
import {useRouter} from "next/router";
import {BiLogIn} from "react-icons/bi";
import supabase from "../../db"
import { processPatientInfo, setPatient } from '@/global';

const server = 'http://localhost:3000';

const emailValidity = (inp: string): boolean => inp.trim() !== '';
const passwordValidity = (inp: string): boolean => inp.trim() !== '';

const PatientSearch = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const inputIdRef = useRef<HTMLInputElement | null>(null);
    const inputNameRef = useRef<HTMLInputElement | null>(null);
    const [formValid, setFormValid] = useState(true);
    const [err, setErr] = useState(false);

    const router = useRouter();

    const patientDataHandler = async (data1: any) => {
        // Tanzeem Hisham
        console.log(data1);
        const {data,error } = await supabase.from('Patient').select().match({id : data1.patientId, name : data1.patientName});
        console.log(data);
        if(error || data.length == 0){
            setErr(true);
        }
        else{
            setPatient(data[0]);
            const resp = await supabase.from('Prescription').select(
                `*,prescribed_drugs(*, Drug(*))`
            )
            console.log(resp)
            processPatientInfo(resp.data);
            // await router.push(`/dashboard`);
        }
    }

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        const patientId = inputIdRef.current?.value;
        const patientName = inputNameRef.current?.value;

        if (!patientId || !patientName || !emailValidity(patientId) || !passwordValidity(patientName)) {
            setFormValid(false);
            return;
        }

        setFormValid(true);
        setIsSubmitting(true);

        await patientDataHandler({patientId: patientId, patientName: patientName});

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
                <h3>Search Patient</h3>
            </div>
            <div className={`${styles.id}`}>
                <Form.Floating className="mb-4 mt-5">
                    <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="patientId"
                        ref={inputIdRef}
                    />
                    <label htmlFor="floatingInputCustom">
                        <Image src='/password-icon.png' width={20} height={20} alt='id' className={styles.passImg}/>
                        Patient ID
                    </label>
                </Form.Floating>
            </div>
            <Form.Floating className="mb-4">
                <Form.Control
                    id="floatingPasswordCustom"
                    type="password"
                    placeholder="patientName"
                    ref={inputNameRef}
                />
                <label htmlFor="floatingPasswordCustom">
                    <big><BiLogIn/>&nbsp;&nbsp;</big>
                    Patient Name
                </label>
            </Form.Floating>

            {!formValid &&
                <p className={styles['error-text']}>Server processing failed!! Check inputs</p>}

            <Container className='d-flex'>
                <Button className={`${styles.button} mb-4`} variant="info" size="lg" type='submit'>
                    Search
                </Button>
                {isSubmitting && <Spinner animation="border" variant="danger"/>}
            </Container>
        </Form>
    );
}

export default PatientSearch;