import { useRef, ChangeEvent } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { classnames } from '../../utils/classnames/index';
import styles from './styles.module.scss';

function Input({
  isOpen,
  onOpen,
  onClose,
  onChange,
  value
}: {
  isOpen: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) {
  const inputRef = useRef();
  const onOpenDropDown = () => {
    onOpen();
    inputRef.current?.focus();
  };
  const onCloseDropDown = () => {
    onClose();
    inputRef.current?.blur();
  };
  const onInputChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div
      className={classnames(
        'w-[240px] flex p-4 border-1 rounded-gb border-gray-500 cursor-pointer',
        styles.Input
      )}
    >
      <input
        value={value}
        onChange={onInputChange}
        onClick={onOpenDropDown}
        onBlur={() => setTimeout(onCloseDropDown, 150)}
        onFocus={() => setTimeout(onOpenDropDown, 150)}
        ref={inputRef}
        className='grow px-2 border-transparent text-lg font-light'
      />
      {isOpen ? (
        <ChevronUpIcon width={20} onClick={onCloseDropDown} />
      ) : (
        <ChevronDownIcon width={20} onClick={onOpenDropDown} />
      )}
    </div>
  );
}

export { Input };
