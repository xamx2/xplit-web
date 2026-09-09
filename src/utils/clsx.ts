type ClassName = string | undefined | false

export default function clsx(...classNames: ClassName[]) {
  return classNames.filter(Boolean).join(' ')
}