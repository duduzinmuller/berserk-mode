import Image1 from '../assets/img/image1.webp'
import { IoCart } from 'react-icons/io5'
import '../animation/animations.css'

export const Home = () => {
  return (
    <div
      id='home'
      className='h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${Image1})` }}
    >
      <div className='flex flex-col justify-center items-start h-full ml-8 gap-3'>
        <h1 className='text-5xl fade-in' style={{ animationDelay: '0s' }}>
          O que e a comunidade Berserk Mode?
        </h1>
        <p className='text-2xl fade-in' style={{ animationDelay: '0.3s' }}>
          Se você quer fazer networking, compartilhar ideias, aqui você irá
          encontrar pessoas
          <br /> com a mesma mentalidade que a sua, e poderá fechar negócios,
          começar projetos
          <br /> com alguém e até obter um sócio, já imaginou ter seus projetos
          em andamento com <br /> uma pessoa que você conheceu na comunidade? E
          ainda conseguir clientes que queiram
          <br /> seus serviços freelance e fazer uma renda extra com isso? Então
          aproveite está oportunidade
          <br /> e clique em "Quero está oportunidade", para fazer parte da
          comunidade Berserk Mode.
        </p>
        <div
          className='relative mt-3 px-6 py-2 border border-white text-white font-bold text-sm uppercase rounded-lg transition-all duration-300 hover:text-black hover:bg-white group fade-in'
          style={{ animationDelay: '0.6s' }}
        >
          <button className=''>Quero está oportunidade</button>
        </div>
        <div
          className='flex items-center gap-3 mt-2 fade-in'
          style={{ animationDelay: '0.9s' }}
        >
          <IoCart size={35} className='flex items-center' />
          <p className='text-2xl mt-4'>
            Compra 100%
            <br /> Segura
          </p>
        </div>
      </div>
    </div>
  )
}
