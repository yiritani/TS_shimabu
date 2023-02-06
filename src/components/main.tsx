import styles from '@/styles/Home.module.css'
import Links from '@/components/Links'
import {Headline} from '@/components/Headline'


function tadanoalert(){
    alert('tadanoalert')
}

interface Props {
    page: string,
}

export function Main(props: Props) {
    return (
        <>

            <main className={styles.main}>
                <Headline
                    title={props.page}
                    arrayObject={[
                        {
                            id: 1,
                            name: 'test'
                        },
                        {
                            id: 2,
                            name: 'test2'
                        }
                    ]}
                    idList={[1, 2, 3]}
                    peopleObject={{
                        id: 1,
                        name: 'test'
                    }}
                    sex
                    comp={<code className={styles.code}>src/pages/index.tsx</code>}
                    function={tadanoalert}
                />
                <Links />

            </main>
        </>
    )
}
