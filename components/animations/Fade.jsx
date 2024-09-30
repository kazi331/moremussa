import { motion } from 'framer-motion'
export const Fade = ({ children }) => {
    return <motion.div 
    initial={{ opacity: 0, y: -40}}
     animate={{ opacity: 1 , y: 0}}  >
        {children}
    </motion.div>
}
export default Fade