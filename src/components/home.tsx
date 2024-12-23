import Image1 from '../assets/img/Image.jpg'

export const Home = () => {
  return (
    <div
      className='h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${Image1})` }}
      id='home'
    ></div>
  )
}
