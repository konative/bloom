import React, { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <input placeholder='Please enter your business name' value={busName} onChange={e => setBusName(e.target.value)} required />
            <br />
            <input placeholder='Please enter your phone number' value={phoneNum} onChange={e => setPhoneNum(e.target.value)} required />
            <input placeholder='Please enter your address' value={address} onChange={e => setAddress(e.target.value)} required />
            <br />
            <input placeholder='Please enter a short description about your business' value={desc} onChange={e => setDesc(e.target.value)} required />
            <br />
            <input type="checkbox" onChange={e => setTermsAndCon(e.target.value)} required />
            <br />
            <button>Submit</button>
        </form>
    );
}

export default Form
