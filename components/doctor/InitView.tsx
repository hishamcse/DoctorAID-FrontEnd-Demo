import React from "react";
import LayoutWrapper from "../layout/LayoutWrapper";
import styles from './InitView.module.scss'
import StartBackground from "../layout/StartBackground";
import StartPage from "../layout/StartPage";
import DoctorNavigation from "../layout/DoctorNavigation";
import PatientSearch from "./PatientSearch";

const InitView: React.FC = () => {
    return (
        // @ts-ignore
        <LayoutWrapper>
            <main className={styles.main}>
                <DoctorNavigation/>
                {/*<StartBackground/>*/}
                <div className='col-5'>
                    <div className={styles.bg}>
                        <PatientSearch/>
                    </div>
                </div>

            </main>
        </LayoutWrapper>
    );
}

export default InitView;