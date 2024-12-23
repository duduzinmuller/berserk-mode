import { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import NavIcon from '../assets/img/nav-icon1 (2).svg'
import NavIcon2 from '../assets/img/nav-icon3 (1).svg'
import NavIcon3 from '../assets/img/brand-tiktok-line.svg'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkActive = (value: string) => {
    setActiveLink(value)
  }

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black py-0' : 'bg-transparent py-4'
      }`}
    >
      <div className='container mx-auto flex items-center justify-between px-4'>
        {/* Logotipo */}
        <div className='w-[9%]'></div>

        {/* Links de navegação */}
        <div className='hidden md:flex space-x-6'>
          {['home', 'about', 'beneficios', 'orcamentos'].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`text-white text-lg font-medium tracking-wide transition-opacity duration-300 ${
                activeLink === link
                  ? 'opacity-100'
                  : 'opacity-75 hover:opacity-100'
              }`}
              onClick={() => linkActive(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>

        {/* Ícones sociais e botão */}
        <div className='flex items-center space-x-4'>
          {/* YouTube */}
          <a
            href='https://youtube.com/@pablo.rodrigoo?si=gXcxSXD9eZhdLgl4'
            className='p-2 rounded-full border border-white/50 relative overflow-hidden group'
          >
            <div className='absolute inset-0 bg-[#FF0000] scale-0 group-hover:scale-100 transition-transform rounded-full'></div>
            <img
              src={NavIcon}
              alt='YouTube'
              className='h-5 w-5 relative z-10'
            />
          </a>

          {/* Instagram */}
          <a
            href='https://www.instagram.com/pablo.rodrigooo/profilecard/?igsh=MW11ZDcxbW1kbzA3eQ== '
            className='p-2 rounded-full border border-white/50 relative overflow-hidden group'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-[#F58529] via-[#E4405F] to-[#285AEB] scale-0 group-hover:scale-100 transition-transform rounded-full'></div>
            <img
              src={NavIcon2}
              alt='Instagram'
              className='h-5 w-5 relative z-10'
            />
          </a>
          {/* Botão */}
          <HashLink
            to='#connect'
            className='relative px-6 py-2 border border-white text-white font-bold text-sm uppercase rounded-lg transition-all duration-300 hover:text-black hover:bg-white group'
          >
            <span className='z-10 relative'>Quero esta Oportunidade</span>
            <div className='absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
          </HashLink>
        </div>
      </div>
    </nav>
  )
}
