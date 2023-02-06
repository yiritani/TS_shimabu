import { Inter } from '@next/font/google'
import styles from './Headline.module.css'
import Image from "next/image";

interface Props {
    title: string,
    arrayObject: Array<{ id: number, name: string }>,
    idList: number[],
    peopleObject: {
        id: number,
        name: string
    }
    sex: boolean,
    comp: JSX.Element,
    function: () => void
}

export function Headline(props: Props) {
    console.log(props)
    return (
        <>
            <div className={styles.description}>
                <p>
                    {props.title} editing&nbsp;
                    {props.comp}
                </p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{' '}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
                <button onClick={props.function}>Click Me</button>
            </div>

            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
                <div className={styles.thirteen}>
                    <Image
                        src="/thirteen.svg"
                        alt="13"
                        width={40}
                        height={31}
                        priority
                    />
                </div>
            </div>
        </>
    )
}
