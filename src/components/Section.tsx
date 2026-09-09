import type React from "react"

interface SectionProps {
  title: string
  actions?: React.ReactNode
}

export default function Section({ title, actions, children }: React.PropsWithChildren<SectionProps>) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        {actions}
      </div>
      <div className="mt-8">
        {children}
      </div>
    </div>
  )
}