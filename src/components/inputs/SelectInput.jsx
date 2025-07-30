import React from 'react'

const SelectInput = ({options, label, name, formData, onChange}) => {
  return (
    <div className="mb-4">
                <label htmlFor={name} className="block font-semibold">{label}</label>
                <select 
                    name={name}
                    className="w-full border-2 border-black rounded-sm p-2"
                    value={formData.name}
                    onChange={onChange}
                > 
                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
                </select>
            </div>
  )
}

export default SelectInput