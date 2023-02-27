import styles from '@/styles/Home.module.scss'
import React, {useState} from "react";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import StartNavigation from "@/components/layout/StartNavigation";
import StartPage from "@/components/layout/StartPage";
import StartBackground from "@/components/layout/StartBackground";
import LoginForm from "@/components/login/LoginForm";

export default function Home() {

    const [showLogin, setShowLogin] = useState(false);

    const showLoginHandler = async () => {
        // console.log(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
        // const {data, error} = await supabase.from('Drug').select().eq
        // console.log(data)
        // console.log(error);
        setShowLogin(true);
    }

    // useEffect(() => {
    //     showLoginHandler();
    // } , []);


    return (
            // @ts-ignore
            <LayoutWrapper>
                <main className={styles.main} suppressHydrationWarning={true}>
                    <StartNavigation onLoginClick={showLoginHandler}/>

                    <StartBackground/>

                    {showLogin &&
                        <div className='d-flex'>
                            <div className='col-7'>
                                <StartPage/>
                            </div>
                            <div className='col-2'>

                            </div>
                            <div className='col-7'>
                                <LoginForm/>
                            </div>
                        </div>
                    }

                    {!showLogin && <StartPage/>}
                </main>

            </LayoutWrapper>
    )
}
