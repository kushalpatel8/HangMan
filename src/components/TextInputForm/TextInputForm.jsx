/* eslint-disable react/prop-types */
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

function TextInputForm ({inputType, handleFormSubmit, handleInputChange, handleShowHideClick}) {
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                type={inputType}
                label= "Enter a word or phrase"
                placeholder='Enter a word or phrase'
                onChange={handleInputChange}
                /> 
            </div>

            <div>
                <Button
                text={inputType === 'password' ?  'Show' : 'Hide'}
                styleType='warning'
                onClick={handleShowHideClick}
                />
            </div>

            <div>
                <Button
                 text = "Submit"
                 styleType='primary'
                 type = "submit"
                />
            </div>

        </form>
       
    );
}

export default TextInputForm;