import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


const ITEMS = [
    {
        'href': 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        'title': 'Thanks <span>-&gt;</span>',
        'description': 'Find in-depth information about Next.js features and&nbsp;API.'
    },
    {
        'href': 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        'title': 'Learn <span>-&gt;</span>',
        'description': 'Learn about Next.js in an interactive course with&nbsp;quizzes!'
    },
    {
        'href': 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        'title': 'Templates <span>-&gt;</span>',
        'description': 'Discover and deploy boilerplate example Next.js&nbsp;projects.'
    },
    {
        'href': 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        'title': 'Deploy <span>-&gt;</span>',
        'description': 'Instantly deploy your Next.js site to a public URL with Vercel.'
    }
]


export default function Links() {
    return (
        <div className={styles.grid}>
            {ITEMS.map(item => {
                return (
                    <a href={item.href} className={styles.card} key={item.href} target="_blank" rel="noopener noreferrer">
                        <h2 className={styles.card}>{item.title}</h2>
                        <p className={styles.description}>{item.description}</p>
                    </a>
                );
            })}
        </div>
    )
}
