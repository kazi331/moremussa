import { motion } from 'framer-motion';
import Head from 'next/head';
import Post from '../components/Post';
import { posts } from '../data/posts';

// SSG
export const getStaticProps = async () => {
    // const res = await axios.get('http://localhost:3000/api/posts')
    // const posts = res.data;
    return {
        props: { posts },
        revalidate: 30, // In seconds
    }
}

const Blog = ({ posts }) => {

    // CSR
    /*    const [posts, setPosts] = useState([])
       useEffect(() => {
           const fetchPost = async () => {
               try {
                   const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
                   setPosts(res.data)
               } catch (err) {
                   console.log(err)
               }
           }
           fetchPost();
       }, []) */

    const itemVariants = {
        initial: {
            opacity: 0,
            y: 0,
            transition: { type: "spring", stiffness: 500, damping: 14 }
        },
        animate: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };
    return (
        <>
            <Head>

                <title>Mussa Blog</title>

                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="w-full lg:w-[40vw] min-h-[95vh] px-4 py-20 mb-10 flex flex-col gap-20 justify-between ">
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='mb-40'>
                    <h1 className='text-5xl font-mono'>Mohammad Mussa</h1>
                    <h2 className='text-4xl font-mono'> --- A Creative Developer</h2>
                </motion.div>


                <div className="table-auto border-separate border-spacing-y-4">
                    <ul>
                        {
                            posts.length < 1 &&
                            <li className="p-2 hover:text-violet-500 dark:text-orange-400	 dark:hover:text-orange-400	 cursor-pointer">
                                Loading...</li>
                        }
                        {
                            posts?.map((post, i) => <Post key={post.id} post={post} i={i} />)
                        }
                    </ul>
                </div>
            </div >
        </>
    )
}



export default Blog