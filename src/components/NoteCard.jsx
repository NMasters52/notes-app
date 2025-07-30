import React from 'react'

const NoteCard = ({note, deleteNote}) => {
  return (
    <div 
        className="border-l-4 rounded-lg w-full shadow-md bg-white mb-4 mt-4 p-2 text-wrap"
        style={{
            borderLeftColor: note.priority === 'High' ? 'red' 
            : note.priority === 'Medium' ? 'orange' 
            : 'green'
        }}
    > 
        <h3 className="font-bold mb-1">{note.title}</h3>
        <p className="text-sm"><strong>Priority:</strong> {note.priority}</p>
        <p className="text-sm mb-2"><strong>Category:</strong> {note.category}</p>
        <p className="break-words text-md mb-2">{note.description}</p>
        <button
            onClick={() => deleteNote(note.id)}
            className="text-red-400 hover:text-red-600 hover:bg-red-200 cursor-pointer w-full border-2 rounded-lg p-2"
        >
            Delete Note
        </button> 

        
    </div>
  )
}

export default NoteCard