import React, { forwardRef, useImperativeHandle } from 'react'
import styled from '@emotion/styled'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World!</p>',
  })

  return <EditorContent editor={editor} />
}
const $Container = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
`

const $BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  flex: 1;
`

const $TabsContainer = styled.div``
