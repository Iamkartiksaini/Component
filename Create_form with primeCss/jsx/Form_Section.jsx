import { Controller, useFieldArray } from "react-hook-form";
import Values from "./Form_FieldsValue";
import FormError from "./error";

const SectionFields = ({ errors, control, sectionIndex, section }) => {
    const { fields: fieldFields, append: appendField, remove: removeField } = useFieldArray({
        control,
        name: `sections[${sectionIndex}].fields`
    });

    return (
        <>
            {fieldFields.map((field, fieldIndex) => (
                <div className='field' key={field.id}>
                    <p className='legend'>Field - {fieldIndex + 1}</p>
                    <div className="flex-column">
                        <label>Field Label</label>
                        <Controller
                            name={`sections[${sectionIndex}].fields[${fieldIndex}].label`}
                            control={control}
                            rules={{ required: "Field is Required" }}
                            render={({ field }) => <input {...field} placeholder="Field Label" />}
                        />
                        <FormError sectionIndex={sectionIndex} register_key={"label"} fieldIndex={fieldIndex} errors={errors} />
                    </div>
                    <div className="flex-column">
                        <label>Field Key</label>
                        <Controller
                            name={`sections[${sectionIndex}].fields[${fieldIndex}].register_key`}
                            control={control}
                            rules={{ required: "Field is Required" }}
                            render={({ field }) => <input {...field} placeholder="Field Key" />}
                        />
                        <FormError sectionIndex={sectionIndex} register_key={"register_key"} fieldIndex={fieldIndex} errors={errors} />
                    </div>
                    <div className="flex-column">
                        <label>View Type</label>
                        <Controller
                            name={`sections[${sectionIndex}].fields[${fieldIndex}].view_Type`}
                            control={control}
                            rules={{ required: "view_Type is Required" }}
                            render={({ field }) => <input {...field} placeholder="View Type - select/label" />}
                        />
                        <FormError sectionIndex={sectionIndex} register_key={"view_Type"} fieldIndex={fieldIndex} errors={errors} />
                    </div>
                    <div className="flex-column">
                        <label>Field Type</label>
                        <Controller
                            name={`sections[${sectionIndex}].fields[${fieldIndex}].field_Type`}
                            control={control}
                            rules={{ required: "field_Type is Required" }}
                            render={({ field }) => <input {...field} placeholder="Field Type - select/input" />}
                        />
                        <FormError sectionIndex={sectionIndex} register_key={"field_Type"} fieldIndex={fieldIndex} errors={errors} />
                    </div>
                    <button className='legend right delete' type="button" onClick={() => removeField(fieldIndex)}>Remove Field</button>
                    <Values errors={errors} control={control} sectionIndex={sectionIndex} fieldIndex={fieldIndex} />
                </div>
            ))}
            <button type="button" onClick={() => appendField({ label: '', register_key: '', view_Type: '', field_Type: '', values: [{ label: '', value: '', iconURL: '' }] })}>Add Field</button>
        </>
    );
};

export default SectionFields