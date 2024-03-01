import { useEffect, useMemo, useState } from 'react';
import { Input } from '../input';
import { DropdownItem } from './dropdown-item/index';
import { LIST } from '../../../mock/list';
import { classnames } from '../../utils/classnames/index';
import { debounce } from '../../utils/debounce/index';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState(LIST);
  const [dropDownList, setDropDownList] = useState(list);
  const [selectedItem, setSelectedItem] = useState('');
  const [inputValue, setInputValue] = useState(selectedItem);

  const openDropDown = () => {
    setIsOpen(true);
  };
  const closeDropDown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setDropDownList(list);
  }, [list]);

  const addToList = (newListItem: string) => {
    if (
      !list.filter((item) => item.toLowerCase() === newListItem.toLowerCase().trim())
        .length
    ) {
      setList([...list, newListItem]);
      setDropDownList(list);
    }
  };

  const onSelectItem = (item) => {
    const listItem = list.find(
      (listItem) => listItem.toLowerCase() === item.toLowerCase().trim()
    );
    if (listItem) {
      setSelectedItem(listItem);
      setInputValue(listItem);
    } else {
      setSelectedItem(item);
      setInputValue(item);
    }
  };

  const handleTyping = (text: string) => {
    setInputValue(text);
    if (!text) {
      setDropDownList(list);
    } else {
      setDropDownList(
        list.filter((item) => item.toLowerCase().includes(text.toLowerCase().trim()))
      );
    }
  };
  const handleTypingDebounced = useMemo(() => debounce(handleTyping, 300), []);
  const handleInputChange = (text) => {
    setInputValue(text);
    handleTypingDebounced(text);
  };

  return (
    <div className='relative'>
      <Input
        onChange={handleInputChange}
        value={inputValue}
        isOpen={isOpen}
        onOpen={openDropDown}
        onClose={closeDropDown}
      />
      <div
        className={classnames(
          'absolute w-full left-0 top-full border-1 mt-4',
          'p-4 rounded-gb flex flex-col gap-4 max-h-[200px] overflow-auto',
          {
            hidden: !isOpen,
            block: isOpen
          }
        )}
      >
        {dropDownList.map((title) => {
          return (
            <DropdownItem
              key={title}
              title={title}
              isSelected={title === selectedItem}
              onClick={() => {
                onSelectItem(title);
                setTimeout(closeDropDown, 150);
              }}
            />
          );
        })}
        {!list.filter((item) =>
          item.toLowerCase().includes(inputValue.toLowerCase().trim())
        ).length && (
          <DropdownItem
            title={inputValue}
            isNew
            isSelected={false}
            onClick={() => {
              addToList(inputValue);
              onSelectItem(inputValue);
              setTimeout(closeDropDown, 150);
            }}
          />
        )}
        {/* If we want be able to add words smaller than available words */}
        {/* */}
        {/*{inputValue.trim() && (*/}
        {/*  <DropdownItem*/}
        {/*    title={inputValue}*/}
        {/*    isNew*/}
        {/*    isSelected={false}*/}
        {/*    onClick={() => {*/}
        {/*      addToList(inputValue);*/}
        {/*      onSelectItem(inputValue);*/}
        {/*      setTimeout(closeDropDown, 150);*/}
        {/*    }}*/}
        {/*  />*/}
        {/*)}*/}
      </div>
    </div>
  );
}

export { Dropdown };
