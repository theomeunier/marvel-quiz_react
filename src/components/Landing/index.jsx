import React from "react";
import {useRef, useEffect, useState, Fragment} from "react";

export default function Landing () {

    const [btn, setBtn] = useState(false)

    const refWolverine = useRef(null)

    useEffect(() => {
        refWolverine.current.classList.add("startingImg");
        setTimeout(() => {
            refWolverine.current.classList.remove("startingImg");
            setBtn(true)
        }, 1000)
    }, [])

    const displayBtn = btn && (
        <>
            <div className="leftBox">
                <button className="btn-welcome">Inscription</button>
            </div>
            <div className="rightBox">
                <button className="btn-welcome">Conexion</button>
            </div>
        </>

    )



    return <main ref={refWolverine} className="welcomePage">
        {displayBtn}
    </main>
}