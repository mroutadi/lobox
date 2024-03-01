import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { classnames } from '../../utils/classnames/index';
import styles from './styles.module.scss';
import { useRef } from 'react';

function Input({ onOpen, onClose }: { onOpen: VoidFunction; onClose: VoidFunction }) {
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
        'w-[240px] flex p-4 border-1 rounded-gb border-gray-500',
        styles.Input
      )}
    >
      <input
        onBlur={onCloseDropDown}
        ref={inputRef}
        className='grow px-2  border-transparent text-base'
      />
      <ChevronDownIcon width={20} />
    </div>
  );
}

export { Input };
