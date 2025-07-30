import React from 'react'

const TextInput = ({label, name, type, onChange, formData}) => {
  return (
    <div className="mb-4">
        <label htmlFor={name} className="block font-semibold">{label}</label>
        <input 
            name={name}
            type={type}
            className="w-full border-2 border-black rounded-sm p-1"
            value={formData.title}
            onChange={onChange}
        />
    </div>
)
}

export default TextInput