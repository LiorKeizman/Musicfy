import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi';
import { links } from '../assets/constants'
import { logo } from '../assets'
import { logo2 } from '../assets'

const NavLinks = ({ handleClick }) => (
  <div className='mt-10'>
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className='flex flex-row justify-start items-center 
      my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className='w-6 h-6 mr-2' />
        {item.name}
      </NavLink>
    ))}
  </div>
)

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className='md:flex hidden flex-col 
      w-[240px] py-10 px-4 bg-gradient-to-bl from-slate-900 via-gray-800 to-neutral-700'>
        <img src={logo2} alt="logo" className='w-full h-20 
        object-contain' />
        <NavLinks />
      </div>

      <div className='absolute md:hidden block top-2 right-3 mt-16'>
        {mobileMenuOpen ? (<RiCloseLine className='w-6 h-6 text-white mr-2'
          onClick={() => setMobileMenuOpen(false)} />) :
          <HiOutlineMenu className='w-6 h-6 text-white mr-2'
            onClick={() => setMobileMenuOpen(true)} />}

      </div>
      <div className={`absolute top-0 h-screen w-2/3 
      bg-gradient-to-tl from-black/10 to-[#000] 
      backdrop-blur-lg z-10 p-6 md:hidden 
      smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo2} alt="logo" className='w-full h-20 
        object-contain' />
        <NavLinks handleClick={() => setMobileMenuOpen} />
      </div>

    </>


  )
}


export default Sidebar;
