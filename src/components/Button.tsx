import clsx from "@/utils/clsx"

interface ButtonProps {
  variant?: 'default' | 'solid'
  Icon?: React.ComponentType<React.ComponentProps<'svg'>>
}

export default function Button({
  Icon,
  className,
  children,
  variant = 'default',
  ...props
}: React.ComponentProps<'button'> & ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "inline-flex gap-1 items-center",
        variant === 'solid' && 'bg-gray-900 text-white py-1 px-2 justify-center',
        className
      )}
    >
      {Icon && <Icon className="size-5" />}
      {children}
    </button>
  )
}