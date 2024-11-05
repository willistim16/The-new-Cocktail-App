import '/src/Components/FormInput/FormInput.css'

const FormInput = ({ label, name, value, onChange, type = 'text', error }) => (

    <div className="logInInputField">
        <label>{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
);

export default FormInput;