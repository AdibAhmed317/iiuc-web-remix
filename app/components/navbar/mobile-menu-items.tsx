// MobileMenuItem.tsx
import { ReactNode } from 'react';

interface MobileMenuItemProps {
  label: string;
  icon: ReactNode;
  isActive: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export const MobileMenuItem = ({
  label,
  icon,
  isActive,
  onToggle,
  children,
}: MobileMenuItemProps) => {
  return (
    <div className='space-y-1'>
      <button
        onClick={onToggle}
        className='w-full px-3 py-2 rounded-md text-primaryBlue hover:bg-primaryGray 
                  transition-colors duration-200 flex items-center justify-between'
      >
        <span className='flex items-center space-x-2'>
          <span className='text-primaryBlue'>{icon}</span>
          <span>{label}</span>
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isActive ? 'rotate-180' : ''
          }`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-200 ${
          isActive ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className='pl-8 space-y-1 py-2'>{children}</div>
      </div>
    </div>
  );
};
