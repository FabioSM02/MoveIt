import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengeBox } from "../Components/ChallengeBox";
import { CompleteChallenge } from "../Components/CompleteChallenges";
import { Countdown } from "../Components/Countdown";
import { ExperienceBar } from "../Components/ExperienceBar";
import { Profile } from "../Components/Profile";

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContexts';

import styles from '../styles/pages/Home.module.css';

interface HomeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
        <ChallengesProvider 
            level={props.level} 
            currentExperience={props.currentExperience} 
            challengesCompleted={props.challengesCompleted}
        >
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
        </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
   
    return{
        props: { 
            level: Number(level), 
            currentExperience: Number(currentExperience), 
            challengesCompleted: Number(challengesCompleted) 
        }
    }
}