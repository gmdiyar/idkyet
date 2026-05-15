import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import './App.css'

function App() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start writing your note here...</p>',
  })

  return (
    <div className="editor-wrapper">
      <EditorContent editor={editor} />
    </div>
  )
}

export default App