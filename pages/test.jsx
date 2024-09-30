import { motion } from 'framer-motion'
const test = () => {
    const variants = {
        visible: i => ({
            opacity: 1,
            transition: {
                delay: i * 0.3,
            },
        }),
        hidden: { opacity: 0 },
    }
    const users = [...Array(20).keys()]
    console.log(users)
    return (
        <div>
            <ul>
                {
                    users.map((user, i) => (
                        <motion.li
                            initial="hidden"
                            custom={i * 0.2}
                            animate="visible"
                            variants={variants}
                            key={i}
                        >
                            <span>List Item</span>
                        </motion.li>
                    ))
                }

            </ul>
        </div>
    )
}

export default test