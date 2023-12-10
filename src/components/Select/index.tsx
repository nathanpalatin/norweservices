interface SelectProps {
  placeholder: string
  label: string
  value: string
  options: string[]
  onChange: (selectedValue: string) => void
}

export function Select({
  placeholder,
  value,
  options,
  label,
  onChange,
}: SelectProps) {
  return (
    <div className="mb-5">
      <h1 className="text-title-service text-sm font-medium pb-2 ">{label}</h1>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 bg-zinc-100 border border-zinc-400 rounded-md"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
