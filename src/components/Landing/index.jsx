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
    }, []);

    const setLeftImg = () => {
        refWolverine.current.classList.add("leftImg");
    }

    const setRightImg = () => {
        refWolverine.current.classList.add("rightImg");
    }

    const clearImg = () => {
        if (refWolverine.current.classList.contains("leftImg")) {
            refWolverine.current.classList.remove("leftImg");
        }
        else if (refWolverine.current.classList.contains("rightImg")){
            refWolverine.current.classList.remove("rightImg");
        }
    }

    const displayBtn = btn && (
        <Fragment>
            <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
                <button className="btn-welcome">Inscription</button>
            </div>
            <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
                <button  className="btn-welcome">Conexion</button>
            </div>
        </Fragment>

    )

    return <main ref={refWolverine} className="welcomePage">
        {displayBtn}
    </main>
}