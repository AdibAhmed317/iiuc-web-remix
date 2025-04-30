// import { useState, useEffect } from 'react';
// import navLogo from '~/assets/images/iiuc-nav-logo.png';
// import { MobileMenu } from './mobile-menu';
// import { menuItems } from './menu-items';
// import DesktopMenu from './desktop-menu';

// export default function BottomNav() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [mobileActiveMenu, setMobileActiveMenu] = useState<number | null>(null);
//   const [mobileActiveSubMenu, setMobileActiveSubMenu] = useState<string | null>(
//     null
//   );
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 1024);
//       if (window.innerWidth >= 1024) {
//         setMobileActiveMenu(null);
//         setIsMobileMenuOpen(false);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     setMobileActiveMenu(null);
//     setMobileActiveSubMenu(null);
//   };

//   const toggleMobileSubmenu = (index: number) => {
//     setMobileActiveMenu(mobileActiveMenu === index ? null : index);
//     setMobileActiveSubMenu(null);
//   };

//   const toggleMobileNestedSubmenu = (label: string) => {
//     setMobileActiveSubMenu(mobileActiveSubMenu === label ? null : label);
//   };

//   return (
//     <nav className='sticky top-0 z-50 shadow-xl py-0 md:py-1 bg-white'>
//       <div className='max-w-8xl mx-auto px-2 sm:px-4 lg:px-8'>
//         <div className='flex justify-center items-center h-16 sm:h-20'>
//           <div className='flex justify-around items-center'>
//             {/* Logo */}
//             <div className='w-[90%] sm:w-[50%] md:w-[50%] lg:w-[20%] h-full'>
//               <img src={navLogo} alt='IIUC logo' className='object-fill' />
//             </div>

//             {/* Desktop Navigation */}
//             <DesktopMenu menuItems={menuItems} />

//             {/* Conference Links */}
//             <div className='hidden lg:flex items-center bg-white w-96 justify-end'>
//               <div
//                 className='flex flex-col items-center space-y-1 px-4 py-2 rounded-lg
//                             shadow-[4px_4px_8px_rgba(255,193,7,0.3)]'
//               >
//                 <a
//                   href='https://iciucc.iiuc.ac.bd'
//                   target='_blank'
//                   className='text-xs sm:text-sm md:text-xs xl:text-base text-primaryBrown font-robotoBlack hover:text-amber-700 hover:scale-105 transition-all duration-200'
//                 >
//                   ICIUCC 2024
//                 </a>
//                 <a
//                   href='https://iciset.iiuc.ac.bd'
//                   target='_blank'
//                   className='text-xs sm:text-sm md:text-xs xl:text-base text-primaryBrown font-robotoBlack hover:text-amber-700 hover:scale-105 transition-all duration-200'
//                 >
//                   ICISET 2024
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className='lg:hidden'>
//             <button
//               onClick={toggleMobileMenu}
//               className='p-2 rounded-md text-gray-700 hover:bg-primaryGray hover:text-primaryBlue transition-colors duration-200'
//             >
//               <span className='sr-only'>Open menu</span>
//               {isMobileMenuOpen ? (
//                 <svg
//                   className='h-6 w-6'
//                   fill='none'
//                   viewBox='0 0 24 24'
//                   stroke='currentColor'
//                 >
//                   <path
//                     strokeLinecap='round'
//                     strokeLinejoin='round'
//                     strokeWidth={2}
//                     d='M6 18L18 6M6 6l12 12'
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className='h-6 w-6'
//                   fill='none'
//                   viewBox='0 0 24 24'
//                   stroke='currentColor'
//                 >
//                   <path
//                     strokeLinecap='round'
//                     strokeLinejoin='round'
//                     strokeWidth={2}
//                     d='M4 6h16M4 12h16M4 18h16'
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <MobileMenu
//         isOpen={isMobileMenuOpen}
//         menuItems={menuItems}
//         activeMenu={mobileActiveMenu}
//         activeSubMenu={mobileActiveSubMenu}
//         onMenuToggle={toggleMobileSubmenu}
//         onSubMenuToggle={toggleMobileNestedSubmenu}
//       />
//     </nav>
//   );
// }

import { useState, useEffect } from 'react';
import navLogo from '~/assets/images/iiuc-nav-logo.png';
import { MobileMenu } from './mobile-menu';
import { menuItems } from './menu-items';
import DesktopMenu from './desktop-menu';

export default function BottomNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<number | null>(null);
  const [mobileActiveSubMenu, setMobileActiveSubMenu] = useState<string | null>(
    null
  );
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMobileActiveMenu(null);
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileActiveMenu(null);
    setMobileActiveSubMenu(null);
  };

  const toggleMobileSubmenu = (index: number) => {
    setMobileActiveMenu(mobileActiveMenu === index ? null : index);
    setMobileActiveSubMenu(null);
  };

  const toggleMobileNestedSubmenu = (label: string) => {
    setMobileActiveSubMenu(mobileActiveSubMenu === label ? null : label);
  };

  return (
    <nav className='sticky bottom-0 z-50 shadow-xl py-0 md:py-1 bg-white'>
      <div className='max-w-8xl mx-auto px-2 sm:px-4 lg:px-8'>
        <div className='flex justify-center items-center h-16 sm:h-20'>
          <div className='flex justify-around items-center'>
            {/* Logo */}
            <div className='w-[90%] sm:w-[50%] md:w-[50%] lg:w-[20%] h-full'>
              <img src={navLogo} alt='IIUC logo' className='object-fill' />
            </div>

            {/* Desktop Navigation */}
            <DesktopMenu menuItems={menuItems} />

            {/* Conference Links */}
            <div className='hidden lg:flex items-center bg-white w-96 justify-end'>
              <div
                className='flex flex-col items-center space-y-1 px-4 py-2 rounded-lg 
                            shadow-[4px_4px_8px_rgba(255,193,7,0.3)]'
              >
                <a
                  href='https://iciucc.iiuc.ac.bd'
                  target='_blank'
                  className='text-xs sm:text-sm md:text-xs xl:text-base text-primaryBrown font-robotoBlack hover:text-amber-700 hover:scale-105 transition-all duration-200'
                >
                  ICIUCC 2024
                </a>
                <a
                  href='https://iciset.iiuc.ac.bd'
                  target='_blank'
                  className='text-xs sm:text-sm md:text-xs xl:text-base text-primaryBrown font-robotoBlack hover:text-amber-700 hover:scale-105 transition-all duration-200'
                >
                  ICISET 2024
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='lg:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='p-2 rounded-md text-gray-700 hover:bg-primaryGray hover:text-primaryBlue transition-colors duration-200'
            >
              <span className='sr-only'>Open menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        menuItems={menuItems}
        activeMenu={mobileActiveMenu}
        activeSubMenu={mobileActiveSubMenu}
        onMenuToggle={toggleMobileSubmenu}
        onSubMenuToggle={toggleMobileNestedSubmenu}
      />
    </nav>
  );
}
