import { MenuItem } from 'lib/types';
import { MobileMenuItem } from './mobile-menu-items';
import { MobileSubMenu } from './mobile-submenu';

// MobileMenu.tsx
interface MobileMenuProps {
  isOpen: boolean;
  menuItems: MenuItem[];
  activeMenu: number | null;
  activeSubMenu: string | null;
  onMenuToggle: (index: number) => void;
  onSubMenuToggle: (label: string) => void;
}

export const MobileMenu = ({
  isOpen,
  menuItems,
  activeMenu,
  activeSubMenu,
  onMenuToggle,
  onSubMenuToggle,
}: MobileMenuProps) => {
  return (
    <div
      className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}
    >
      <div className='px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto'>
        {menuItems.map((item, index) => (
          <MobileMenuItem
            key={index}
            label={item.label}
            icon={<item.icon />}
            isActive={activeMenu === index}
            onToggle={() => onMenuToggle(index)}
          >
            {item.subItems.map((subItem, subIndex) => (
              <div key={subIndex}>
                {typeof subItem === 'string' ? (
                  <a
                    href='#'
                    className='block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-primaryGray hover:text-primaryBlue transition-colors duration-200'
                  >
                    {subItem}
                  </a>
                ) : (
                  <MobileSubMenu
                    label={subItem.label}
                    isActive={activeSubMenu === subItem.label}
                    onToggle={() => onSubMenuToggle(subItem.label)}
                    items={subItem.nestedSubItems || []}
                  />
                )}
              </div>
            ))}
          </MobileMenuItem>
        ))}

        {/* Mobile Conference Links */}
        <div className='mt-4 px-3 py-4 bg-white/50 rounded-lg flex justify-center items-center'>
          <div className='space-y-2'>
            <a
              href='https://iciucc.iiuc.ac.bd'
              target='_blank'
              className='block text-primaryBrown hover:text-amber-700 transition-colors duration-200 font-robotoBlack'
            >
              ICIUCC 2024
            </a>
            <a
              href='https://iciset.iiuc.ac.bd'
              target='_blank'
              className='block text-primaryBrown hover:text-amber-700 transition-colors duration-200 font-robotoBlack'
            >
              ICISET 2024
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
