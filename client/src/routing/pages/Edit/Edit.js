import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Edit.css";
import EditForm from "../../../components/Forms/EditForm/EditForm.js"

function Edit(){

  return (
        <div className="Edit">
            <h1>Edit your Listing:</h1>
            <EditForm></EditForm>
        </div>
    )
}

export default Edit;