interface ChecklistItem {
  label: string;
  value?: string;
}

export interface ChecklistProps {
  items: Array<ChecklistItem>;
  checkedItems: Array<string>;
  checkable?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checklist = ({ items = [], checkedItems = [], checkable = true, onChange }: ChecklistProps) => {
  if (!Array.isArray(items)) {
    throw new Error(`Failed to render Checklist: Invalid items type ${typeof items}`);
  }

  return (
    <ul className={`${checkable ? 'cursor-pointer' : ''} list-none flex flex-col gap-2 p-0`} data-is-checkable={checkable}>
      {items.map((item: ChecklistItem, i) => {
        const { label } = item;
        const checked = !!checkedItems.find((checkedItem: string) => checkedItem === label);
        const value = item.value || label;
        return (
          <li key={i}>
            <label className="flex items-center">
              {checkable && (
                <input className="sr-only" type="checkbox" defaultChecked={checked} value={value} onChange={onChange} />
              )}
              <span className={`
                ${checkable ? 'pl-6 relative before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:border before:border-gray-300 before:rounded' : ''}
                ${checked ? 'before:bg-blue-500 before:border-blue-500' : ''}
              `}>
                {label}
              </span>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default Checklist;