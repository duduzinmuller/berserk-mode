import { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import Image4 from '../assets/img/image4.jpg'
import { useInView } from 'react-intersection-observer'
import '../animation/animations.css'

export const Orcamento = () => {
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
      id='orcamentos'
      style={{ backgroundImage: `url(${Image4})` }}
    >
      <div className='flex flex-col justify-center items-center h-3/4 gap-3'>
        <h1
          className={`text-6xl ${animationStarted ? 'fade-in' : ''}`}
          style={{
            animationDelay: '0.1s',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}
        >
          Nossos Orçamentos
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
          Essa comunidade está no seu nascimento, então pra ela poder crescer e
          evoluir, sua ajuda e contribuição será bem investida pra ela se tornar
          melhor, pois a cada negócio, projeto e abertura de sociedade que será
          presente na Berserk Mode, é mais um passo pra você seguir o seu
          caminho com a direção para o seu sucesso e objetivo, clique em "quero
          esta oportunidade" e faça parte dos 10 primeiros membros da
          comunidade, com um valor favorável a apenas os primeiros membros que
          irão fazer com que a comunidade se torne melhor.
        </p>
        <div
          className={`relative mt-3 px-6 py-2 border border-white text-white font-bold text-sm uppercase rounded-lg transition-all duration-300 hover:text-black hover:bg-white group ${
            animationStarted ? 'fade-in' : ''
          }`}
          style={{
            animationDelay: '0.8s',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}
        >
          <HashLink to='#connect' className='no-underline'>
            Quero esta oportunidade
          </HashLink>
        </div>
      </div>
    </div>
  )
}
