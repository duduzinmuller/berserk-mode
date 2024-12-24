import { useEffect, useState } from 'react'
import Image3 from '../assets/img/logobeneficies.jpg'
import { useInView } from 'react-intersection-observer'
import '../animation/animations.css'

export const Beneficies = () => {
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
      id='beneficios'
      style={{ backgroundImage: `url(${Image3})` }}
    >
      <div className='flex flex-col justify-center items-center h-3/4 gap-3'>
        <h1
          className={`text-6xl ${animationStarted ? 'fade-in' : ''}`}
          style={{ animationDelay: '0.1s' }}
        >
          Quais são os benefícios ao entrar na Berserk Mode:
        </h1>
        <div className='flex text-left flex-col mt-5'>
          <p
            className={`text-5xl ${animationStarted ? 'fade-in' : ''}`}
            style={{ animationDelay: '0.4s' }}
          >
            -Networking de alto nível;
          </p>
          <p
            className={`text-5xl ${animationStarted ? 'fade-in' : ''}`}
            style={{ animationDelay: '0.7s' }}
          >
            {' '}
            -compartilhamento de ideias
          </p>
          <p
            className={`text-5xl ${animationStarted ? 'fade-in' : ''}`}
            style={{ animationDelay: '0.9s' }}
          >
            {' '}
            -local de possíveis fechamentos de negócios;
          </p>
          <p
            className={`text-5xl ${animationStarted ? 'fade-in' : ''}`}
            style={{ animationDelay: '1.2s' }}
          >
            {' '}
            -Seja um dos primeiros a entrar na comunidade, e faça a diferença.
          </p>
          <p
            className={`text-5xl ${animationStarted ? 'fade-in' : ''}`}
            style={{ animationDelay: '1.5s' }}
          >
            -Tú tem a ganhar entrando na comunidade
          </p>
        </div>
        <div
          className={`relative mt-3 px-6 py-2 border border-white text-white font-bold text-sm uppercase rounded-lg transition-all duration-300 hover:text-black hover:bg-white group ${
            animationStarted ? 'fade-in' : ''
          }`}
          style={{ animationDelay: '1.9s' }}
        >
          <button className=''>Quero esta oportunidade</button>
        </div>
      </div>
    </div>
  )
}
