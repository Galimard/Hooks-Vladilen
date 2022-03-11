import React from "react";
import { useAlert } from "./alert/AlertContext";

export default function Main() {
    const {show} = useAlert();

    return (
        <>
            <h1>Привет в примера с context</h1>
            <button className="btn btn-success" onClick={() => show('Этот текст из main.js')}>Показать alert</button>
        </>
    )
}