import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from './Icons'
import { motion } from 'framer-motion'

const Project = ({ teamMembers, projectName, projectSlug, projectDesc }) => {

    return (
        <div className="mb-20">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', duration: 3.2, delay: .2 }}
            > <Link href={projectSlug} target="_blank"  >
                    <span className='inline-flex gap-1 items-center dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:bg-opacity-5 text-violet-500 hover:bg-violet-500 hover:bg-opacity-5 transition duration-200 rounded font-medium mb-6 cursor-pointer px-3 py-2'>{projectName} <ExternalLink /></span>
                </Link>
            </motion.div>
            {/* <p className='px-2 py-2 max-w-lg'>Design on-the-go for the product that enables developers to build and publish wonderful things. </p> */}
            {/* <p className='px-2 py-2 max-w-lg'> At basement.studio, we work closely with Vercel&apos;s team delivering websites, illustrations, animations, and any design-related piece </p> */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', duration: 3.2, delay: .3 }}
                className="px-2 py-2 max-w-lg flex flex-col gap-4">{projectDesc}</motion.div>
            <motion.h4
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', duration: 3.2, delay: 0.3 }}
                className='py-4 px-2'>Files:</motion.h4>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', duration: 3.2, delay: 0.3 }}
                className="team inline-flex flex-col gap-2">
                {/* Team members  */}
                {teamMembers.map((member, i) => (
                    <Link key={i} href={member.link} target="_blank" >
                        <motion.span
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: 'spring', duration: 3.2, delay: 0.3 }}
                            className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-violet-600 hover:bg-opacity-10 dark:hover:bg-yellow-400 dark:hover:bg-opacity-5">
                            {/* member image  */}
                            <Image className="rounded-full" src={member.img} width="28" height="28" alt="" />
                            {member.name}
                            <ExternalLink />
                        </motion.span>
                    </Link>
                ))}
            </motion.div>
        </div>
    )
}

export default Project