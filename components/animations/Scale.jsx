import { motion } from 'framer-motion'
export const Scale = ({ children }) => {
    return <motion.div
        initial={{ opacity: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }} >
        {children}
    </motion.div>
}
export default Scale