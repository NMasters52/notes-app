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

  return (
    <form action="">
        <div className="mb-4">
            <label htmlFor="" className="block font-semibold">Title</label>
            <input 
                name='title'
                type="text"
                className="w-full border-2 border-black rounded-sm"
                value={formData.title}
                onChange={(e) => handleChange(e)}
            />
        </div>
        <div className="mb-4">
            <label htmlFor="" className="block font-semibold">Priority</label>
            <select 
                name='priority'
                className="w-full border-2 border-black rounded-sm"
                value={formData.priority}
                onChange={(e) => handleChange(e)}
            > 
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="" className="block font-semibold">Category</label>
            <select
                name='category'
                className="w-full border-2 border-black rounded-sm"
                value={formData.category}
                onChange={(e) => handleChange(e)}
            > 
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Ideas">Ideas</option>
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="" className="block font-semibold">Description</label>
            <textarea
                name="description"
                className="w-full border-2 border-black rounded-sm"
                onChange={handleChange}
            >
            </textarea>
        </div>
        
    </form>
  )
}

export default NotesForm