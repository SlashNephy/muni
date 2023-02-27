import { css } from '@emotion/react'
import React, { useCallback, useEffect, useState } from 'react'

export function ResizeBar({
  initialX,
  minWidth,
  maxWidth,
  onResize,
}: {
  initialX: number
  minWidth: number
  maxWidth: number
  onResize(width: number): void
}): React.ReactElement {
  const [isTracking, setIsTracking] = useState(false)
  const [startCursorScreenX, setStartCursorScreenX] = useState<number>()

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isTracking && startCursorScreenX !== undefined) {
        const delta = e.screenX - startCursorScreenX
        const newWidth = Math.max(
          minWidth,
          Math.min(initialX + delta, maxWidth)
        )
        onResize(newWidth)
      }
    },
    [initialX, isTracking, maxWidth, minWidth, onResize, startCursorScreenX]
  )

  const handleMouseUp = useCallback(() => {
    if (isTracking) {
      setIsTracking(false)
    }
  }, [isTracking])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      css={css`
        position: absolute;
        right: 0;
        box-sizing: border-box;
        flex: none;
        width: 5px;
        height: 100%;
        cursor: col-resize;
        user-select: none;
        border-left: 0px solid #ccc;
        -webkit-touch-callout: none;

        &:hover,
        &:active {
          border-color: lightblue;
          border-style: double;
        }
      `}
      onMouseDown={(e) => {
        e.preventDefault()
        e.stopPropagation()

        setIsTracking(true)
        setStartCursorScreenX(e.screenX)
      }}
    />
  )
}
