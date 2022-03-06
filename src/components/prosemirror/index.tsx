import React from 'react'
import styled from '@emotion/styled'

import { IKernel, FileParams } from '@gratico/kernel'
import { Desktop } from '@gratico/uikit'
import { Editor } from '../editor'

export interface ProseMirrorProps {
  value: unknown
  onChange: (value: unknown) => void
  kernel: IKernel
  fileParams: FileParams
}

export function ProseMirror(props: ProseMirrorProps) {
  return (
    <$Container>
      <$TabsContainer></$TabsContainer>
      <$BodyContainer>
        <>{props.kernel ? <Editor fileParams={props.fileParams} kernel={props.kernel} /> : null}</>
      </$BodyContainer>
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

const $BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  flex: 1;
`

const $TabsContainer = styled.div``
