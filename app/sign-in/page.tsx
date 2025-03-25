import React from "react";
import styles from "../page.module.css";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import EmailInput from "@/app/components/email"
import {FaGoogle} from "react-icons/fa"; // Make sure to install react-icons if not already
import Image from "next/image";

const AuthPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.logo}>
                    {/* Update the logo to use Google's logo or your own brand logo */}
                    <Image
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        src="/img/taureau.png"
                        alt="Logo"
                        width={96}
                        height={96}
                    />
                </div>
                <h1 className={styles.title}>Custom Sign In</h1>
                <div className={styles.authMethods}>
                    <LoginLink
                        className={styles.googleButton}
                        authUrlParams={{
                            connection_id: process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || ""
                        }}
                    >
                        <FaGoogle className={styles.googleIcon} />
                        Sign in with Google
                    </LoginLink>
                    {/* Use the client component for email input */}
                    <EmailInput />
                </div>
                <div className={styles.footer}>
                    <span>
                        Don&apos;t have an account?{" "}
                        <RegisterLink className="btn btn-dark">Create account</RegisterLink>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;