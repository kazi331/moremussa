import { motion } from 'framer-motion'
import figma from '../resources/figma.png'
import blog from '../resources/blog.svg'
import profile from '../resources/profile.jpeg'
import xd from '../resources/xd.svg'
import Project from './Project'

const Projects = () => {

  const teamMembers1 = [
    { name: 'Figma', link: '#', img: figma, },
    { name: 'Blog', link: '#', img: blog, },
  ]
  const teamMembers2 = [
    { name: 'Mohammad Saleh', link: '#', img: figma, },
    { name: 'Mohammad Mussa', link: '#', img: xd, },
  ]
  const teamMembers3 = [
    { name: 'Mohammad Mussa', link: '#', img: profile, },
    { name: 'Mohammad Mussa', link: '#', img: figma, },
  ]

  const ProjectDesc1 = () => {
    return (
      <>
        <p> Design on-the-go for the product that enables developers to build and publish wonderful things. </p>
        <p> At basement.studio, we work closely with Vercels team delivering websites, illustrations, animations, and any design-related piece </p>
      </>
    )
  }
  const ProjectDesc2 = () => {
    return (
      <>
        <p> Design on-the-go for the product that enables developers to build and publish wonderful things. </p>
        <p> At basement.studio, we work closely with Vercel&lsquo;s team delivering websites, illustrations, animations, and any design-related piece </p>
      </>
    )
  }
  const ProjectDesc3 = () => {
    return (
      <>
        <p> Design on-the-go for the product that enables developers to build and publish wonderful things. </p>
        <p> At basement.studio, we work closely with Vercel&lsquo;s team delivering websites, illustrations, animations, and any design-related piece </p>
      </>
    )
  }
  return (
    <section

    >
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', duration: 2.2, delay: 0.2}}
        className='py-4 px-2 mb-6 font-medium text-xl'>Projects</motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', duration: 0.2, delay: 0.3}}
      >
      <Project teamMembers={teamMembers1} projectName="Sawtify" projectSlug="https://sawtify.co.uk/" projectDesc={<ProjectDesc1 />} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', duration: 0.2, delay: 0.1}}
      >
        <Project teamMembers={teamMembers2} projectName="Kalaam" projectSlug="https://kalaam.co/" projectDesc={<ProjectDesc2 />} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', duration: 0.2, delay: 0.0}}
      >
        <Project teamMembers={teamMembers3} projectName="Thrufaith" projectSlug="https://thrufaith.xyz/" projectDesc={<ProjectDesc3 />} />
      </motion.div>

    </section>
  )
}



export default Projects