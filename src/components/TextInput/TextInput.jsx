// eslint-disable-next-line react/prop-types
function TextInput({type = "text", label, placeholder = "Enter your input here", onChangeHandler}) {
    return (
        <label>
            <span className="text-gray-700">{label}</span>
            <input
             type= {type}
             className="w-full px-4 py-2 border-gray-500 rounded-md"
             placeholder = {placeholder}
             onChange = {onChangeHandler}
              />
        </label>
    );
}

export default TextInput;