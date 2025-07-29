import NoteCard from "./NoteCard"


export const NoteList = ({notes, deleteNote}) => {
    if (notes.length === 0) {
        return <p className="mt-6 text-center w-full text-gray-600">No Notes Yet</p>
    }

  return (
    <div>
        {notes.map((note) => (
            <NoteCard 
                key={note.id}
                note={note}
                deleteNote={deleteNote}
            />
            
        ))}
    </div>
  )
}
