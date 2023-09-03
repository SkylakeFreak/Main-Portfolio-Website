import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'

import Link from 'next/link'



const Home=()=>{

  return (
    
    <main>

      <div>
      <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/200 scrollbar-thumb-[#F7AB0A]/60 '>

<Header/>
{/*Hero*/}
<section id="hero" className='snap-start'>
  <Hero />
</section>
{/*About*/}
<section id="about" className='snap-center'>
<About/>

</section>
{/*experience*/}
<section id="experience" className='snap-center'>
  <WorkExperience/>

</section>
{/*skills*/}
<section id="skills" className='snap-start'>
  <Skills/>
</section>
{/*projects*/}
<section id="projects" className='snap-start'>
  <Projects/>
</section>
{/*contact me*/}
<section id='contact' className='snap-start'>
  <ContactMe/>
</section>
<Link href="#hero">
  <footer className='sticky lg:bottom-5 bottom-20 w-full cursor-pointer'>
    <div className='flex items-center justify-center'>
      <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src="https://img.freepik.com/premium-vector/swipe-up-icon-isolated-background-social-media-stories-scroll-pictogram-arrow-up-logo-blogger_172533-799.jpg?w=2000" alt="" />
    </div>
  </footer>

</Link>

</div>
      </div>
    </main>
  )
}
export default Home;
