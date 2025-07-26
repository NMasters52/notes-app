import React, { useState } from 'react'

const NotesForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        catagory: 'Work',
        priority: 'Medium',
        description: ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    console.table(formData)

  return (
    <form action="">
        <label htmlFor="">Title</label>
        <input 
            name='title'
            type="text" 
            value={formData.title}
            onChange={(e) => handleChange(e)}
        />
    </form>
  )
}

export default NotesForm