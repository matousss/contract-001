import './Page.css';
import {motion} from "framer-motion";


export function Page({children, id}) {
    return (
        <motion.div
            className={'min-vh-100 page'}
            initial={{opacity: .7, scale: 1.05}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: .7, scale: 1.05}}
            id={id}
        >
            {children}
        </motion.div>
    )
}