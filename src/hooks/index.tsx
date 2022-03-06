import React from 'react'

export function useDocumentListerner<T = HTMLElement>(ref: React.RefObject<T>) {}

export function useNavigationContext<T = HTMLElement>() {
	const ref = React.useRef<T>(null)

	React.useEffect(() => {
		const listener = (e: FocusEvent) => {
			console.log('e', e, e.composedPath(), ref.current)
			if (ref.current && e.target && e.composedPath().indexOf(ref.current as unknown as HTMLElement) > -1) {
				console.log('we have a match')
			}
		}
		document.addEventListener('focusin', listener)
		return () => {
			document.removeEventListener('focusin', listener)
		}
	}, [ref.current])
	return { ref }
}
