import clsx from "@/utils/clsx"

export default function Form({ className, onSubmit, ...props }: React.ComponentProps<'form'>) {
  return (
    <form
      {...props}
      className={clsx("grid grid-cols-1 gap-6", className)}
      onSubmit={e => {
        e.preventDefault()
        onSubmit?.(e)
      }}
    />
  )
}