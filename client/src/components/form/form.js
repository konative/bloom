import React, { useState } from "react";
import "./Form.css"

function Form() {

    const [busName, setBusName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [address, setAddress] = useState("");
    const [desc, setDesc] = useState("");
    const [termsAndCon, setTermsAndCon] = useState(false);

    const handleSubmit = (event) => {
        console.log(`
        Business Name: ${busName}
        Phone Number: ${phoneNum}
        Address: ${address}
        Description: ${desc}
        Accepted Terms and Conditions: ${termsAndCon}
    `)

        event.preventDefault();



    }


    return (
        <div className='formCont'>
            <form onSubmit={handleSubmit} className='inputs'>
                <input placeholder='Please enter your business name' value={busName} onChange={e => setBusName(e.target.value)} required className='input1' />
                <br />
                <input placeholder='Please enter your phone number' value={phoneNum} onChange={e => setPhoneNum(e.target.value)} required className='inputs' />
                <input placeholder='Please enter your address' value={address} onChange={e => setAddress(e.target.value)} required className='inputs' />
                <br />
                <input placeholder='Please enter a short description about your business' value={desc} onChange={e => setDesc(e.target.value)} required className='descInput' />
                <br />
                <label><input type="checkbox" onChange={e => setTermsAndCon(e.target.value)} required />I accept the Terms and Conditions</label>
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form

