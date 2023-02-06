import Head from 'next/head'
import {Main} from '@/components/main'
import {Header} from '@/components/Header'

export default function Home() {
    return (
        <>
            <Header />
            <Main page={"index"}/>
        </>
    )
}
