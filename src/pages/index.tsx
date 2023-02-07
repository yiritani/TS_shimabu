import {Main} from '@/components/main'
import {Header} from '@/components/Header'
import React, {useCallback, useEffect} from "react";

export default function Home() {
    useEffect(() => {
        document.body.style.backgroundColor = "green"
        return () => {
            document.body.style.backgroundColor = ""
        }
    }, [])

    const clickHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e)
    }, [])
    return (
        <>
            <Header />
            <button onClick={clickHandler}>ボタン</button>
            <Main page={"index"}/>
        </>
    )
}
