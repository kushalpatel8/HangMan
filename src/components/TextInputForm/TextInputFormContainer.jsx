import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router";
function TextInputFormContainer () {
        
    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");

    const navigate = useNavigate();

    function handleFormSubmit(event) {
        event.preventDefault();
        if (value) {
            navigate(`/play`,{state: {wordSelected : value}});
        }
    }

    function handleInputChange(event) {
        setValue(event.target.value);
    }

    function handleShowHideClick() {
        if (inputType === "password") {
            setInputType("text");
        }else {
            setInputType("password");
        }
    }

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