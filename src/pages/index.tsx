import {Main} from '@/components/main'
import {Header} from '@/components/Header'
import React, {useCallback, useEffect} from "react";

export default function Home() {
    const [count, setCount] = React.useState(0)
    const [text, setText] = React.useState("")
    const [isShow, setIsShow] = React.useState(true)
    const handleClick = () => setCount(count + 1)
    useEffect(() => {
        console.log('マウント')
        document.body.style.backgroundColor = "green"
        return () => {
            console.log('アンマウント')
            document.body.style.backgroundColor = ""
        }
    }, [count])

    return (
        <>
            <Header />
            <button onClick={handleClick}>count</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <p>{text}</p>

            <button onClick={() => setIsShow(!isShow)}>toggle</button>
            {isShow? <p>{count}</p> : null}
            <Main page={"index"}/>
        </>
    )
}
