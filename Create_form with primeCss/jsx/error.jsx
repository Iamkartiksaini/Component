
const FormError = ({ errorOf = "fields", sectionIndex, fieldIndex, valueIndex, errors, register_key }) => {
    try {
        if (!errors?.sections) return null
        let message;
        if (errorOf === "fields") {
            message = errors.sections[sectionIndex].fields[fieldIndex][register_key].message
        }
        else if (errorOf === "values") {
            console.log("value", errors.sections[sectionIndex].fields[fieldIndex].values[valueIndex]);
            message = errors.sections[sectionIndex].fields[fieldIndex].values[valueIndex][register_key].message
        }
        return (
            <p className="error">{message}</p>
        )
    } catch (error) {
        return null
    }

}

export default FormError