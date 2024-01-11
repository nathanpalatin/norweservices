import MaskedInput from 'react-input-mask'

import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function InputMask({ label, ...rest }: InputProps) {
  return (
    <div className="mb-5">
      <h1 className="text-title-service font-medium text-sm pb-2 ">{label}</h1>
      <MaskedInput
        className="rounded-md space-y-4 w-full p-3 bg-zinc-100 border border-zinc-400"
        {...rest}
      />
    </div>
  )
}
