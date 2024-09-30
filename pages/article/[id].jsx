
import { motion, useScroll, useSpring } from "framer-motion";
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    PinterestIcon,
    PinterestShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";
import BlogImage from '../../components/BlogImage';
import { BackIcon } from "../../components/Icons";
import { posts } from "../../data/posts";



const Article = ({ post }) => {
    const [shareUrl, setShareUrl] = useState('')
    // Animation 
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const getUrl = () => {
            const location = window.location.href;
            setShareUrl(location)
        }
        getUrl();
        // setOgImage(`/api/og?title=${post.title}`)
    }, []);


    return (
        <>
            <Head>
                {/* <title>{post.title.toUpperCase()}</title> */}
            </Head>
            <motion.div className="progressbar" style={{ scaleX: scaleX }} />

            <div className="relative w-full lg:w-[55vw] min-h-[95vh] px-4 py-20 mb-10 flex flex-col gap-10">
                <p>Est. 2020, based in UK. Rejiggle is a design studio founded by designer Daryl Ginn. We work with select clients to create beautiful, fun designs.</p>
                {!post.title && <p>Loading...</p>}
                <Image src={post.img.src} width="560" height="460" alt={post.title} />

                {/* POST CONTENT  */}
                <div>
                    <h1 className='text-4xl py-2 mb-4 capitalize'>{post?.title}</h1>
                    <p className='text-lg'>{post?.body}</p>
                    <p className='text-lg'>{post?.body}</p>
                </div>

                {/* Expertise table  */}
                <div className="table-auto border-separate border-spacing-y-4">
                    <li className="p-2 transition-colors dark:text-gray-300 list-none">
                        <div className="flex items-start gap-x-40 text-lg">
                            <div className='mb-1 flex flex-col'>
                                <h4 className='text-xl font-bold mb-3 text-gray-400'>Expertise</h4>
                                <span>Web Design</span>
                                <span>Branding</span>
                                <span>Copyright</span>
                            </div>
                            <div className='mb-1 flex flex-col'>
                                <h4 className='text-xl font-bold mb-3 text-gray-400'>Platform</h4>
                                <span>Web</span>
                            </div>
                        </div>
                    </li>

                </div>
                {/* Social Share Buttons  */}
                <div className="flex gap-2 ml-1 justify-center md:justify-start ">
                    <FacebookShareButton url={shareUrl}> <FacebookIcon size={30} round={true} /> </FacebookShareButton>
                    <FacebookMessengerShareButton url={shareUrl}> <FacebookMessengerIcon size={30} round={true} /> </FacebookMessengerShareButton>
                    <WhatsappShareButton url={shareUrl}> <WhatsappIcon size={30} round={true} /> </WhatsappShareButton>
                    <TwitterShareButton url={shareUrl}> <TwitterIcon size={30} round={true} /> </TwitterShareButton>
                    <EmailShareButton url={shareUrl}> <EmailIcon size={30} round={true} /> </EmailShareButton>
                    <PinterestShareButton url={shareUrl}> <PinterestIcon size={30} round={true} /> </PinterestShareButton>
                    <button className="inline-flex gap-2 ml-auto cursor-pointer px-4 py-2 text-violet-600 dark:text-[#FFC714] rounded  hover:bg-violet-600 hover:bg-opacity-5 dark:hover:bg-[#FFC714] dark:hover:bg-opacity-5" onClick={() => history.back()}><BackIcon /> Back </button>
                </div>
                {/* BLOG IMAGES  */}
                <BlogImage />
            </div>
        </>
    )
}

export default Article


// STATIC SITE GENERATION OR SSG
export async function getStaticPaths() {
    // const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // const posts = res.data;
    const paths = posts.map(post => ({ params: { id: post.id.toString() } }))
    return {
        paths,
        fallback: false,
    };
}
export const getStaticProps = async ({ params }) => {
    // const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    // const post = res.data;
    const post = posts.filter(post => post.id == params.id)[0]

    return {
        props: { post },
        revalidate: 30, // In seconds
    }
}
