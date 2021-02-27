import Head from 'next/head';

import { ChallengeBox } from "../Components/ChallengeBox";
import { CompleteChallenge } from "../Components/CompleteChallenges";
import { Countdown } from "../Components/Countdown";
import { ExperienceBar } from "../Components/ExperienceBar";
import { Profile } from "../Components/Profile";
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
        <div className={styles.container}>
            <Head>
                <title>Inicio | MoveIt</title>
            </Head>

            <ExperienceBar />

            <CountdownProvider>
                <section>
                    <div>
                        <Profile />
                        <CompleteChallenge />
                        <Countdown />
                    </div>
                    <div>
                        <ChallengeBox />
                    </div>
                </section>
            </CountdownProvider>
        </div>
  )
}