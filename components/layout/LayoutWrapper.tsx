import Head from "next/head";
import React from "react";
import styles from './LayoutWrapper.module.scss';

const LayoutWrapper: React.FC = (props : any) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>UniConnect</title>
                <meta name="description" content="Doctor AID"/>
                <link rel="icon" href="/title-icon.png"/>
            </Head>
            {props.children}
        </div>
    )
}

export default LayoutWrapper;