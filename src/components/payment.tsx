import { useEffect, useState } from 'react'
import Image5 from '../assets/img/image2.jpg'
import { IoIosArrowDown } from 'react-icons/io'
import { useInView } from 'react-intersection-observer'
import '../animation/animations.css'

export const Payment = () => {
  const [animationStarted, setAnimationStarted] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  useEffect(() => {
    if (inView) {
      setAnimationStarted(true)
    }
  }, [inView])

  return (
    <div
      ref={ref}
      className='h-screen bg-cover bg-center'
      id='connect'
      style={{ backgroundImage: `url(${Image5})` }}
    >
      <div className='flex flex-col justify-center items-center h-3/4 gap-3'>
        <h1
          className={`text-5xl ${animationStarted ? 'fade-in' : ''}`}
          style={{
            animationDelay: '0.1s',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}
        >
          Entrar na comunidade
        </h1>
        <IoIosArrowDown className={`bounce-arrow`} size={70} color='#fff' />
        <div
          className={`relative mt-3 px-6 py-2 border border-white text-white font-bold text-sm uppercase rounded-lg transition-all duration-300 hover:text-black hover:bg-white group ${
            animationStarted ? 'fade-in' : ''
          }`}
          style={{
            animationDelay: '0.8s',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}
        >
          <button
            className='no-underline'
            onClick={() => {
              window.location.assign('https://pay.kiwify.com.br/n3CXm5V')
            }}
          >
            Quero esta oportunidade
          </button>
        </div>
      </div>
    </div>
  )
}
