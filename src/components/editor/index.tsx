import React from 'react'
import styled from '@emotion/styled'
import { IFileSystem, IKernel, IProject, FileParams, IFileBuffer } from '@gratico/kernel'
import { Tiptap } from '../tiptap'

export function Editor(props: { kernel: IKernel; fileParams: FileParams }) {
	return (
		<$EditorContainer>
			<Tiptap />
		</$EditorContainer>
	)
}

const $EditorContainer = styled.div`
	padding: 0px;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	position: absolute;
`
