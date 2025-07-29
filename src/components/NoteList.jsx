import NoteCard from "./NoteCard"


export const NoteList = ({notes, deleteNote}) => {
    if (notes === 0) {
        return <p>No Notes Yet</p>
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
