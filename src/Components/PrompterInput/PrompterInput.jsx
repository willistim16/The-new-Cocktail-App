import '/src/Components/PrompterInput/PrompterInput.css'

const PrompterInput = ({ label, name, value, onChange, type = 'text', error }) => (

    <div className="prompt-input-field">
        <label>{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
);
export default PrompterInput;