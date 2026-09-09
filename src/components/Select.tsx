import clsx from "@/utils/clsx"

interface SelectProps {
  label?: string
}

export default function Select({ label, className, ...props }: React.ComponentProps<'select'> & SelectProps) {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <select className={clsx("mt-1 block w-full", className)} {...props} />
    </label>
  )
}