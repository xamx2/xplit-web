import clsx from "@/utils/clsx"

interface ButtonProps {
  Icon?: React.ComponentType<React.ComponentProps<'svg'>>
}

export default function Button({ Icon, className, children, ...props }: React.ComponentProps<'button'> & ButtonProps) {
  return (
    <button {...props} className={clsx("inline-flex gap-1 items-center", className)}>
      {Icon && <Icon className="size-5" />}
      {children}
    </button>
  )
}