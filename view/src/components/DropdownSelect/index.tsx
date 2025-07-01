import Select from 'react-select'

export const DropdownSelect = ({ options, setValue, label, value }) => {
  return (
    <div className="my-4 max-w-1/2 w-[200px]">
      <label className="block mb-2 text-2xl font-medium text-custom-dark-blue" >{label}</label>
      <Select
        className="border border-custom-dark-blue focus:outline "
        classNames={{ control: () => '!bg-blue-50' }}
        options={options}
        value={options.find(option => option.value === value)}
        onChange={({ value = '' }) => setValue(value)}
      />
    </div>
  )
}