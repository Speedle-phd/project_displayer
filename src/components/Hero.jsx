import logo from '../assets/hero.svg'
import styled from 'styled-components'

const Hero = () => {
   return (
      <HeroWrapper className='hero'>
         <div className='hero-center'>
            <div className='hero-title'>
               <h1>Contentful CMS</h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  modi magni consequuntur ex quibusdam officia ratione molestiae
                  suscipit quisquam at!
               </p>
            </div>
            <div className='img-container'>
               <img src={logo} alt='' />
            </div>
         </div>
      </HeroWrapper>
   )
}

export default Hero

const HeroWrapper = styled.section`
   min-height: 40vh;
   background: var(--white);
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 5rem;
   img {
      max-width: 20rem;
   }
`
