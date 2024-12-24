import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import Image2 from '../assets/img/image23.jpg'
import '../animation/animations.css'

export const About = () => {
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
      id='about'
      style={{ backgroundImage: `url(${Image2})` }}
    >
      <div className='flex flex-col justify-center items-center h-2/3 gap-3'>
        <h1
          className={`text-5xl ${animationStarted ? 'fade-in' : ''}`}
          style={{
            animationDelay: '0.1s',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}
        >
          Sobre a nossa Comunidade
        </h1>
        <p
          className={`text-2xl [max-width:800px] ${
            animationStarted ? 'fade-in' : ''
          }`}
          style={{
            animationDelay: '0.4s',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}
        >
          Na Berserk Mode você irá encontrar pessoas no mesmo nível que você, ou
          até em níveis superiores, lá vai ser uma comunidade que você pode
          compartilhar ideias e projetos com outras pessoas que também fazem
          isso, e ainda obter conhecimento com conversas de alto nível e
          networking avançado, por mais que esteja em crescimento, lá pode se
          tornar uma comunidade do mais alto nível, fique ligado nos benefícios.
        </p>
        <div
          className={`relative mt-3 px-6 py-2 border border-white text-white font-bold text-sm uppercase rounded-lg transition-all duration-300 hover:text-black hover:bg-white group ${
            animationStarted ? 'fade-in' : ''
          }`}
          style={{
            animationDelay: '0.7s',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}
        >
          <Link to='#beneficios' className='no-underline'>
            Quero está oportunidade
          </Link>
        </div>
      </div>
    </div>
  )
}
