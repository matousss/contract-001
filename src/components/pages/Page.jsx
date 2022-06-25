import './Page.css';
import {motion} from "framer-motion";
import {useEffect} from "react";


export function Page({children, ...props}) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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