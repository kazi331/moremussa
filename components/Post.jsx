import { motion } from 'framer-motion'
import Link from 'next/link'

const Post = ({ post, i }) => {
    return (
        <motion.li
            initial={{
                opacity: 0, transition: { type: "spring", stiffness: 500, damping: 14 }
            }}
            animate={{ opacity: 1, y: 20, transition: { duration: i++ * 0.1 } }}
            key={post.id} className="p-2 hover:text-orange-400 dark:text-gray-300 dark:hover:text-white cursor-pointer">
            <Link href={`/article/${post.id}`}>
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 text-lg">
                    <span className='mr-8'>{post.id}</span>
                    <span className=''>{post.title.slice(0, 50)}</span>
                    <span className='mb-1 ml-auto'>2012</span>
                </motion.div>
            </Link>
        </motion.li>
    )
}

export default Post