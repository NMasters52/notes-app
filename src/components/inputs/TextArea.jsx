import React from 'react'

const TextArea = ({formData, name, label, onChange}) => {
  return (
    <div className="mb-4">
        <label htmlFor={name} className="block font-semibold">{label}</label>
        <textarea
            name={name}
            value={formData.name}
            className="w-full border-2 border-black rounded-sm p-1"
            onChange={onChange}
        >
        </textarea>
    </div>
  )
}

export default TextArea