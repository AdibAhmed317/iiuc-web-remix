// DesktopMenu.tsx
import { useRef } from 'react';
import { MenuItem } from 'lib/types';

interface DesktopMenuProps {
  menuItems: MenuItem[];
}

const DesktopMenu = ({ menuItems }: DesktopMenuProps) => {
  const dropdownRefs = useRef<Array<HTMLDivElement | null>>([]);

  const setRef = (index: number) => (element: HTMLDivElement | null) => {
    dropdownRefs.current[index] = element;
  };

  const renderSubItem = (
    subItem: string | { label: string; nestedSubItems?: string[] }
  ) => {
    if (typeof subItem === 'string') {
      return (
        <>
          <a
            href='#'
            className='block px-4 py-2 text-xs text-primaryBlue hover:bg-seconderyGray 
                    hover:text-primaryBlue duration-200 transition-all font-robotoLight'
          >
            {subItem}
          </a>
        </>
      );
    }

    return (
      <div className='relative group/nested'>
        <a
          href='#'
          className='block px-4 py-2 text-primaryBlue hover:bg-seconderyGray 
                    hover:text-primaryBlue duration-200 transition-all group/link text-xs font-robotoLight'
        >
          <span className='flex items-center justify-between'>
            {subItem.label}
            <svg
              className='w-4 h-4 transform -rotate-90'
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
          </span>
        </a>
        {subItem.nestedSubItems && (
          <div
            className='invisible group-hover/nested:visible opacity-0 group-hover/nested:opacity-100 
                     absolute left-full top-0 w-56 bg-white rounded-lg shadow-lg ring-1 
                     ring-black ring-opacity-5 transition-all duration-200 max-h-60 overflow-y-auto 
                     scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent'
          >
            <div className='py-2'>
              {subItem.nestedSubItems.map((nestedItem, nestedIndex) => (
                <a
                  key={nestedIndex}
                  href='#'
                  className='block px-4 py-2 text-xs text-primaryBlue hover:bg-seconderyGray 
                            hover:text-primaryBlue duration-200 transition-all font-robotoLight'
                >
                  {nestedItem}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='hidden lg:flex lg:items-center lg:space-x-1 flex-wrap justify-center'>
      {menuItems.map((item, index) => (
        <div key={index} ref={setRef(index)} className='relative group'>
          <button
            className='px-3 py-2 rounded-md text-gray-700 hover:bg-primaryGray hover:text-primaryBlue 
                       transition-all duration-200 flex justify-center items-center space-x-2 group'
          >
            <span className='text-primaryBlue group-hover:scale-110 transition-transform duration-200'>
              <item.icon />
            </span>
            <span className='text-sm font-robotoBlack text-primaryBlue'>
              {item.label}
            </span>
          </button>

          {/* Desktop Hover Dropdown */}
          <div
            className='invisible group-hover:visible opacity-0 group-hover:opacity-100 
                       absolute top-full left-1/2 transform -translate-x-1/2 w-56 bg-white 
                       rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50 
                       transition-all duration-200 mt-2'
          >
            <div className='py-2'>
              {item.subItems.map((subItem, subIndex) => (
                <div key={subIndex}>{renderSubItem(subItem)}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopMenu;
