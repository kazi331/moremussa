import { motion } from 'framer-motion'
const About = () => {
    return (
        <section className='py-16 lg:mb-10 px-2'>
            <motion.h4
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 3.2, delay: 0.3 }}
                className='font-medium text-xl my-4'>About</motion.h4>
            <motion.div
             initial={{ opacity: 0, x: -100 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ type: 'spring', duration: 3.2, delay: 0.3 }}
                className="flex flex-col gap-4 max-w-md">
                <p >I&apos;m 29 years old who needs to get his sight checked from staring at a laptop for too long. </p>
                <p > Before joining Thrufaith, I worked on a lot of projects leading different stages of a product life </p>
                <p >If you have a project in mind or want to say hi, DM me on Twitter or contact me at biz@bymussa.com </p>
            </motion.div>
        </section>
    )
}

export default About;