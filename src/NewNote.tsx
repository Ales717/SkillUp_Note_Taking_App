import { NoteData, Tag } from "./App"
import NoteForm from "./NoteForm"

type newNoteProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}
const NewNote = ({ onSubmit, onAddTag, availableTags }: newNoteProps) => {
    return (
        <div>
            <h1 className="mb-4">New Note</h1>
            <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
        </div>

    )
}

export default NewNote
