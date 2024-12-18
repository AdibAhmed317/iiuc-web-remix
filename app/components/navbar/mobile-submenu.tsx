interface MobileSubMenuProps {
  label: string;
  isActive: boolean;
  onToggle: () => void;
  items: string[];
}

export const MobileSubMenu = ({
  label,
  isActive,
  onToggle,
  items,
}: MobileSubMenuProps) => {
  return (
    <div className='space-y-1'>
      <button
        onClick={onToggle}
        className='w-full px-3 py-2 rounded-md text-gray-700 hover:bg-primaryGray hover:text-primaryBlue transition-colors duration-200 flex items-center justify-between'
      >
        <span>{label}</span>
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
          isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className='pl-6 py-2'>
          {items.map((item, index) => (
            <a
              key={index}
              href='#'
              className='block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-primaryGray hover:text-primaryBlue transition-colors duration-200'
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
