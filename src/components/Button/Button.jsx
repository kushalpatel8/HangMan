/* eslint-disable react/prop-types */
import getButtonStyling from "./getButtonStyling";

function Button ({text, onClickHandler, styleType = "primary", type = "button"}) {
    return (
        <button
         onClick={onClickHandler}
         type={type}
         className ={`px-4 py-2 text-white rounded-md ${getButtonStyling(styleType)}`}>
            {text}

        </button>
    );
}
export default Button;