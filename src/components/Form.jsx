import React, { useState } from "react";
import useInput from "./useInput";

function Form() {

    const [firstname, bindFirstname, resetFirstname] = useInput('')
    const [lastname, bindlastname, resetlastname] = useInput('')

    useInput()

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Hello ${firstname} ${lastname}`);
        resetFirstname()
        resetlastname()
    };

    return (
        <div>
            <form onSubmit={submitHandler}></form>
            <div>
                <label>First Name</label>
                <input type="text" {...bindFirstname} />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" {...bindlastname} />
            </div>
            <div>
                <button type="submit" onClick={submitHandler}>
                    Submit
                </button>
            </div>
        </div>
    );
}
export default Form;
