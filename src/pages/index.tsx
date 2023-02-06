import {Main} from '@/components/main'
import {Header} from '@/components/Header'
import React, {useCallback} from "react";

export default function Home() {
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
