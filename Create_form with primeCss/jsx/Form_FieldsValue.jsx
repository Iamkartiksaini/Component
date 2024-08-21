import { Controller, useFieldArray } from "react-hook-form";
import FormError from "./error";

const Values = ({ errors, control, sectionIndex, fieldIndex }) => {
    const { fields: valueFields, append: appendValue, remove: removeValue } = useFieldArray({
        control,
        name: `sections[${sectionIndex}].fields[${fieldIndex}].values`,
    });

    return (
        <>
            {valueFields.map((value, valueIndex) => (
                <div className='flex Value' key={value.id}>
                    <p className='legend'>Value {valueIndex + 1}</p>
                    <div className="flex-column">
                        <label>Value Label</label>
                        <Controller
                            name={`sections[${sectionIndex}].fields[${fieldIndex}].values[${valueIndex}].label`}
                            control={control}
                            rules={{ required: "Field label is Required" }}
                            render={({ field }) => <input {...field} placeholder="Value Label" />}
                        />
                        <FormError errorOf={"values"} valueIndex={valueIndex} sectionIndex={sectionIndex} register_key={"label"} fieldIndex={fieldIndex} errors={errors} />
                    </div>
                    <div className="flex-column">
                        <label>Value</label>
                        <Controller
                            name={`sections[${sectionIndex}].fields[${fieldIndex}].values[${valueIndex}].value`}
                            control={control}
                            rules={{ required: "Field value is Required" }}
                            render={({ field }) => <input {...field} placeholder="Value" />}
                        />
                        <FormError errorOf={"values"} valueIndex={valueIndex} sectionIndex={sectionIndex} register_key={"value"} fieldIndex={fieldIndex} errors={errors} />
                    </div>
                    <div className="flex-column">
                        <label>Icon URL</label>
                        <Controller
                            name={`sections[${sectionIndex}].fields[${fieldIndex}].values[${valueIndex}].iconURL`}
                            control={control}
                            rules={{ required: "Field iconURL is Required - put # if icons not available" }}
                            render={({ field }) => <input {...field} placeholder="Icon URL" />}
                        />
                        <FormError errorOf={"values"} valueIndex={valueIndex} sectionIndex={sectionIndex} register_key={"iconURL"} fieldIndex={fieldIndex} errors={errors} />
                    </div>

                    <button type="button" onClick={() => removeValue(valueIndex)}>Remove Value</button>
                </div>
            ))}
            <button className='addBtn' type="button" onClick={() => appendValue({ label: '', value: '', iconURL: '' })}>Add Value</button>
        </>
    );
};

export default Values