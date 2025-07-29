import { useState } from 'react'
import { NoteList } from './NoteList'
import TextInput from './inputs/TextInput'
import SelectInput from './inputs/SelectInput'
import TextArea from './inputs/TextArea'


const NotesForm = ({ notes, setNotes}) => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'Work',
        priority: 'Medium',
        description: ''
    })
    const [isFormOpen, setIsFormOpen] = useState(false)

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
        <button 
            className="w-full py-2 bg-purple-200 hover:bg-purple-400 rounded-lg cursor-pointer mb-4"
            onClick={() => setIsFormOpen(!isFormOpen)}
        >
            {isFormOpen ? 'Hide Form ✖️' : 'Show Form ➕'}
        </button>

        {isFormOpen && (
        <form >
            <TextInput 
                label="Title"
                name="title"
                formData={formData}
                onChange={(e) => handleChange(e)}
                type="text"
            />
            <SelectInput 
                name="priority"
                label="Priority"
                formData={formData}
                onChange={(e) => handleChange(e)}
                options={['Low', 'Medium', 'High']}
            />
            <SelectInput
                name='category'
                label='Category'
                formData={formData}
                onChange={(e) => handleChange(e)}
                options={['Personal', 'Work', 'Ideas']}
            />
            <TextArea
                name='description'
                label='Description'
                formData={formData}
                onChange={(e) => handleChange(e)}
            />
            <button 
                className="w-full rounded-lg py-2 cursor-pointer bg-purple-800 text-white hover:bg-purple-600"
                onClick={submitNote}
            >
                Create New Note
            </button>
        </form>
        )}

    <NoteList 
        notes={notes}
        deleteNote={deleteNote}
    />

    </>
    
  )
}

export default NotesForm