interface DropdownProps {
  id: string;
  name: string;
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const Dropdown: React.FC<DropdownProps> = ({
  id,
  name,
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-4 text-sm font-medium text-white dark:text-white"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-transparent border border-gray-300 text-gray-200 text-sm font-thin rounded-full focus:ring-gray-400 focus:border-gray-400 block py-2.5 px-4 w-full"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
