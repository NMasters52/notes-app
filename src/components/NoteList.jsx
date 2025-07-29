

export const NoteList = ({notes, deleteNote}) => {
    if (notes === 0) {
        return <p>No Notes Yet</p>
    }

  return (
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
  )
}
