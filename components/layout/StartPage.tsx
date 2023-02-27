import styles from './StartPage.module.scss';
import {Container} from "react-bootstrap";
import Image from "next/image";

const StartPage = () => {
    return (
        <div className={styles.content}>
            <Container className={`${styles.logo} mb-5`}>
                <Image src="/logo.png" alt="doctor-aid" width="250" height="250"/>
            </Container>

            <Container className={`${styles.title} ${styles.summary}`}>
                <h3 className={`${styles.header} text-light text-lg-center`}>
                    Doctor AID
                </h3>
                <div className={`${styles.subHeader} lead text-light text-lg-center`}>
                    A platform for doctors for easier medication of patients.
                </div>
            </Container>
        </div>
    );
}

export default StartPage;