import { CheckIcon } from '@heroicons/react/24/solid';
import { classnames } from '../../../utils/classnames/index';
function DropdownItem({
  title,
  isSelected = false,
  onClick
}: {
  title: string;
  isSelected: boolean;
  onClick: VoidFunction;
}) {
  return (
    <div
      onClick={onClick}
      className={classnames(
        'cursor-pointer hover:bg-gray-100 p-4 rounded-md flex justify-between',
        {
          'bg-blue-50 hover:bg-blue-100 text-blue-500': isSelected
        }
      )}
    >
      <span>{title}</span>
      {isSelected && <CheckIcon width={18} />}
    </div>
  );
}

export { DropdownItem };
