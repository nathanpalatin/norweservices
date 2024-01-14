interface ButtonProps {
  title: string
  type: 'submit' | 'reset' | 'button'
}

export function Button({ title, type }: ButtonProps) {
  return (
    <button
      type={type}
      className="bg-title-service py-4 w-full text-sm font-semibold mt-14 text-white rounded-md"
    >
      {title}
    </button>
  )
}
