import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { classnames } from '../../utils/classnames/index';
import styles from './styles.module.scss';
import { useRef } from 'react';

function Input({
  isOpen,
  onOpen,
  onClose
}: {
  isOpen: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
}) {
  const inputRef = useRef();
  const onOpenDropDown = () => {
    onOpen();
    inputRef.current?.focus();
  };
  const onCloseDropDown = () => {
    onClose();
  };
  return (
    <div
      onClick={onOpenDropDown}
      className={classnames(
        'w-[240px] flex p-4 border-1 rounded-gb border-gray-500 cursor-pointer',
        styles.Input
      )}
    >
      <input
        onBlur={() => setTimeout(onCloseDropDown, 100)}
        ref={inputRef}
        className='grow px-2 border-transparent text-base'
      />
      {isOpen ? <ChevronUpIcon width={20} /> : <ChevronDownIcon width={20} />}
    </div>
  );
}

export { Input };
