import './Page.css';
import {motion} from "framer-motion";


export function Page({children, ...props}) {
    return (
        <motion.div
            className={'page'}
            initial={{opacity: .7, scale: .99}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: .7, scale: .99}}
            {...props}
        >
            {children}
        </motion.div>
    )
}