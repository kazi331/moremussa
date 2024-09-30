import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Scale from './animations/Scale';
import { ExternalLink } from './Icons';
const Footer = () => {
  const { pathname } = useRouter();
  const linkClass = "flex md:gap-x-2 lg:gap-x-2 items-center cursor-pointer px-4 py-2 transition duration-200 rounded hover:bg-violet-600 hover:bg-opacity-5 dark:hover:bg-[#FFC714] dark:hover:bg-opacity-5"

  /*   const footerLinks = [
    { name: 'Blog', slug: '/blog', target: '' },
    { name: 'Twitter', slug: 'https://twitter.com', target: '_blank' },
    { name: 'Linkedin', slug: 'https://linkedin.com', target: '_blank' },
    { name: 'Dribble', slug: 'https://dribble.com', target: '_blank' },
  ] */


  return (
    <motion.footer
      initial={{ y: 200, x: -200 }}
      animate={{ y: 0, x: 0 }}

      className='py-10 lg:py-20 lg:sticky bottom-10'>
      <div className="links flex  dark:text-[#FFC714]  text-[#7346f0]  font-medium px-2 md:px-4 lg:px-12 select-none ">

        {/* Conditional Link Change  */}
        {pathname == '/' ?
          <Scale>
            <Link href="/blog"><span className={linkClass}>Blog <ExternalLink /></span></Link>
          </Scale>
          :
          <Scale>
            <Link href="/"><span className={linkClass}>Home <ExternalLink /></span></Link>
          </Scale>
        }

        <Scale>
          <Link href="#" target="_blank"><span className={linkClass}>Twitter <ExternalLink /></span></Link>
        </Scale>
        <Scale>
          <Link href="#" target="_blank"><span className={linkClass}>LinkedIn <ExternalLink /></span></Link>
        </Scale>
        <Scale>
          <Link href="#" target="_blank"><span className={linkClass}>Dribble <ExternalLink /></span></Link>
        </Scale>
      </div>
    </motion.footer>
  )
}

export default Footer