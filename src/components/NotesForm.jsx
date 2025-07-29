import { useState } from 'react'

const NotesForm = ({ notes, setNotes}) => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'Work',
        priority: 'Medium',
        description: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const submitNote = (e) => {
        e.preventDefault()

        setNotes([{
            id: Date.now(),
            ...formData
        }, ...notes])

        setFormData({
            title: '',
            category: 'Work',
            priority: 'Medium',
            description: ''
        })
    }

    const deleteNote = (id) => {
            setNotes(notes.filter(note => id !== note.id))
    }

  return (
    <>
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
            <label htmlFor="description" className="block font-semibold">Description</label>
            <textarea
                name="description"
                value={formData.description}
                className="w-full border-2 border-black rounded-sm"
                onChange={handleChange}
            >
            </textarea>
        </div>
        <button 
            className="w-full rounded-lg py-2 cursor-pointer bg-purple-800 text-white hover:bg-purple-600"
            onClick={submitNote}
        >
            Create New Note
        </button>
    </form>

    <div>
        {notes.map((note) => (
            <div 
                key={note.id} 
                className="border-l-4 rounded-lg w-full shadow-md bg-white mb-4 mt-4 p-2 text-wrap"
                style={{
                    borderLeftColor: note.priority === 'High' ? 'red' 
                    : note.priority === 'Medium' ? 'orange' 
                    : 'green'
                }}
            > 
               <h4 className="font-bold">{note.title}</h4>
                <p><strong>Priority:</strong> {note.priority}</p>
                <p><strong>Category:</strong> {note.category}</p>
                <p className="break-words">{note.description}</p>
                <button
                    onClick={() => deleteNote(note.id)}
                    className="text-red-400 hover:text-red-800 cursor-pointer"
                >
                    🗑️ Delete
                </button>
            </div>
            
        ))}
    </div>
    </>
    
  )
}

export default NotesForm