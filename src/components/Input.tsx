import clsx from "@/utils/clsx"

interface InputProps {
  label?: string
}

export default function Input({ label, className, ...props }: React.ComponentProps<'input'> & InputProps) {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <input className={clsx("mt-1 block w-full", className)} {...props} />
    </label>
  )
}