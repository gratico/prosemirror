import React, { forwardRef, useImperativeHandle } from 'react'
import { ReactExtensions, ReactFrameworkOutput, Remirror, useRemirror } from '@remirror/react'
import styled from '@emotion/styled'
import { BoldExtension } from 'remirror/extensions'

const extensions = () => [new BoldExtension()]
type Extensions = ReactExtensions<BoldExtension>

export const EditorWithRef = forwardRef<ReactFrameworkOutput<Extensions>>((_, ref) => {
  const { manager, state, setState, getContext } = useRemirror({ extensions })

  useImperativeHandle(ref, () => (getContext as any)(), [getContext])

  // Add the state and create an `onChange` handler for the state.
  return (
    <Remirror
      manager={manager}
      state={state}
      onChange={(parameter) => {
        // Update the state to the latest value.
        setState(parameter.state)
      }}
    />
  )
})
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
