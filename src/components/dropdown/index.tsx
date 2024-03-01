import { useEffect, useState } from 'react';
import { Input } from '../input';
import { DropdownItem } from './dropdown-item/index';
import { LIST } from '../../../mock/list';
import { classnames } from '../../utils/classnames/index';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState(LIST);
  const [selectedItem, setSelectedItem] = useState('');

  const openDropDown = () => {
    setIsOpen(true);
  };
  const closeDropDown = () => {
    setIsOpen(false);
  };

  const addToList = (newListItem: string) => {
    setList([...list, newListItem]);
  };

  useEffect(() => {
    console.log(selectedItem);
  }, [isOpen]);

  const onSelectItem = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <div className='relative' onfocusout={closeDropDown}>
      <Input isOpen={isOpen} onOpen={openDropDown} onClose={closeDropDown} />
      <div
        className={classnames(
          'absolute w-full left-0 top-full border-1 mt-4 p-4 rounded-gb flex flex-col gap-4',
          {
            hidden: !isOpen,
            block: isOpen
          }
        )}
      >
        {LIST.map((title) => {
          return (
            <DropdownItem
              key={title}
              title={title}
              isSelected={title === selectedItem}
              onClick={() => {
                onSelectItem(title);
                setTimeout(closeDropDown, 50);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export { Dropdown };
