import * as React from "react"

/**
 * Default HTML props that can be applied to any component.
 */
export interface DefaultProps {
  id?: string
  className?: string
}

export interface DefaultInputProps {
  /** Helps with ordering keyboard navigation */
  tabIndex?: number
}

export interface DragProps {
  draggable?: boolean
  onDragStart?: (ev: React.DragEvent<HTMLDivElement>) => void
  onDragEnd?: (ev: React.DragEvent<HTMLDivElement>) => void
  onDragEnter?: (ev: React.DragEvent<HTMLDivElement>) => void
  onDragExit?: (ev: React.DragEvent<HTMLDivElement>) => void
  onDragLeave?: (ev: React.DragEvent<HTMLDivElement>) => void
  onDragOver?: (ev: React.DragEvent<HTMLDivElement>) => void
  onDrop?: (ev: React.DragEvent<HTMLDivElement>) => void
}
