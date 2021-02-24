import { CompleteChallenge } from "../Components/CompleteChallenges";
import { Countdown } from "../Components/Countdown";
import { ExperienceBar } from "../Components/ExperienceBar";
import { Profile } from "../Components/Profile";

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
        <div className={styles.container}>
            <Head>
                <title>Inicio | MoveIt</title>
            </Head>

            <ExperienceBar />

            <section>
                <div>
                    <Profile />
                    <CompleteChallenge />
                    <Countdown />
                </div>
                <div>

                </div>
            </section>
        </div>
  )
}