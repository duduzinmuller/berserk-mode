import { useState } from 'react'
import Image6 from '../assets/img/Image.jpg'
import { IoIosArrowUp } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'

export const Answer = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const faqData = [
    {
      question: 'Aonde vou receber esse acesso?',
      answer:
        'Ao passar pela página do pagamento, o email que você cadastrou receberá as informações de acesso.'
    },
    {
      question: 'Por quanto tempo terei acesso com a comunidade?',
      answer:
        'Por enquanto tem apenas o plano mensal que é composto por 30 dias de acesso, mas futuramente pode ser um plano anual com acesso por 365 dias.'
    },
    {
      question: 'Possui garantia?',
      answer: 'Caso tenha garantia, é por 7 dias de garantia'
    }
  ]

  return (
    <div className='relative h-screen w-full' style={{ overflow: 'hidden' }}>
      <div
        className='absolute top-0 left-0 w-full h-full bg-cover bg-center z-0'
        style={{
          backgroundImage: `url(${Image6})`
        }}
      ></div>

      <div className='relative z-10 flex flex-col justify-center items-center h-full overflow-y-auto bg-black bg-opacity-50'>
        {faqData.map((item, index) => (
          <div
            key={index}
            className='p-4'
            style={{ width: '400px', minHeight: '100px' }}
          >
            <div
              className='flex justify-between items-center cursor-pointer p-5 bg-black rounded-md'
              onClick={() => handleToggle(index)}
            >
              <h3 className='text-lg font-bold text-white'>{item.question}</h3>
              <span className='text-4xl text-white'>
                {expandedIndex === index ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                expandedIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <div className='text-base text-white pt-4 pl-3'>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
