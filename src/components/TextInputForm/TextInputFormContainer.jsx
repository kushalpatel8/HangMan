import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router";
function TextInputFormContainer () {
        
    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");

    const navigate = useNavigate();

    return (


        <>
        <TextInputForm
            inputType={inputType}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            handleShowHideClick={handleShowHideClick}        
        />

        </>
    );
}

export default TextInputFormContainer;