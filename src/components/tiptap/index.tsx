import React, { forwardRef, useImperativeHandle } from 'react'
import styled from '@emotion/styled'
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
  BiBold,
  BiItalic,
  BiStrikethrough,
  BiUnderline,
  BiParagraph,
  BiListUl,
  BiListOl,
  BiUndo,
  BiAlignJustify,
  BiAlignLeft,
  BiAlignMiddle,
  BiAlignRight,
  BiRedo,
} from 'react-icons/bi'
import { Button } from '@gratico/uikit'

const MenuBar = ({ editor }: { editor: Editor }) => {
  if (!editor) {
    return null
  }

  return (
    <$MenuContainer>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <BiBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <BiItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <BiStrikethrough />
      </button>
      <button
        style={{ display: 'none' }}
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        code
      </button>
      <button style={{ display: 'none' }} onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button>
      <button style={{ display: 'none' }} onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        <BiParagraph />
      </button>
      <button
        style={{ display: 'none' }}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </button>
      <button
        style={{ display: 'none' }}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </button>
      <button
        style={{ display: 'none' }}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </button>
      <button
        style={{ display: 'none' }}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        h4
      </button>
      <button
        style={{ display: 'none' }}
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        h5
      </button>
      <button
        style={{ display: 'none' }}
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <BiListUl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <BiListOl />
      </button>
      <button
        style={{ display: 'none' }}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        code block
      </button>
      <button
        style={{ display: 'none' }}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        quote
      </button>
      <button style={{ display: 'none' }} onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button style={{ display: 'none' }} onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>
        <BiUndo />
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        <BiRedo />
      </button>
    </$MenuContainer>
  )
}
const $MenuContainer = styled.div`
  display: flex;
`

const $Button = styled.div`
  padding: 2px;
  border: 2px solid;
  border-radius: 4px;
`

export const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World!</p>',
  })

  return (
    <$Container>
      {' '}
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </$Container>
  )
}
const $Container = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
`
