import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <div className="mb-5">
      <h1 className="text-title-service font-medium text-sm pb-2 ">{label}</h1>
      <input
        className="rounded-md space-y-4 w-full p-3 bg-zinc-100 border border-zinc-400"
        {...rest}
      />
    </div>
  )
}
