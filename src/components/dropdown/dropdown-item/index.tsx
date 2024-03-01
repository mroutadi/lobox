import { CheckIcon } from '@heroicons/react/24/solid';
import { classnames } from '../../../utils/classnames/index';
function DropdownItem({
  title,
  isSelected = false,
  isNew = false,
  onClick
}: {
  title: string;
  isSelected: boolean;
  isNew?: boolean;
  onClick: VoidFunction;
}) {
  return (
    <div
      onClick={onClick}
      className={classnames(
        'cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-md flex justify-between border-none',
        {
          'bg-blue-50 hover:bg-blue-100 text-blue-500': isSelected
        }
      )}
    >
      <span className='flex flex-col'>
        {isNew && <span className='text-sm color-gray-500'>click to add</span>}
        <span className='text-md font-light'>{title}</span>
      </span>
      {isSelected && <CheckIcon width={18} />}
    </div>
  );
}

export { DropdownItem };
