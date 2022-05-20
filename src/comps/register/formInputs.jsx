export const FormInputs = (props) => {
    const {label, onChange, id, ...inputProps} = props
    return(
        <div>
            <label htmlFor="{id}">{label}</label>
            <input  {...inputProps} onChange={onChange}/>
        </div>
    )
}