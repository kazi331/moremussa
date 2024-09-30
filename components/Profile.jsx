import Image from 'next/image'
import profile from '../resources/profiletwo.png'
import { motion } from 'framer-motion'
import Fade from './animations/Fade'

const Profile = () => {
  return (
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', duration: 2.2 }}
        className='py-16 mb-10 px-2'
        >
        <Image src={profile} width="60" height="60" className="rounded-full" alt="" />
        <h1 className='font-medium text-xl my-4'>Hey, I&apos;m Mussa</h1>
        <p className='max-w-md'>Product Designer currently at Thrufaith. Based in Manchester UK (GMT+0)</p>
      </motion.section>
   
  )
}

export default Profile