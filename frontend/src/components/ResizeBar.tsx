import { css } from '@emotion/react'
import React, { useCallback, useEffect, useState } from 'react'

export const ResizeBar: React.FC<{
  initialX: number
  minWidth: number
  maxWidth: number
  onResize(width: number): void
}> = ({ initialX, minWidth, maxWidth, onResize }) => {
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
    <div
      onMouseDown={(e) => {
        e.preventDefault()
        e.stopPropagation()

        setIsTracking(true)
        setStartCursorScreenX(e.screenX)
      }}
      css={css`
        flex: none;
        position: absolute;
        box-sizing: border-box;
        width: 5px;
        height: 100%;
        right: 0;
        cursor: col-resize;
        border-left: 0px solid #ccc;
        -webkit-touch-callout: none;
        user-select: none;

        &:hover,
        &:active {
          border-color: lightblue;
          border-style: double;
        }
      `}
    />
  )
}
