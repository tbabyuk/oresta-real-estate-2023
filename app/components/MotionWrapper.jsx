"use client"

import { motion } from "motion/react"



export const MotionWrapper = ({children}) => {



    return(
        <motion.div
            initial={{ opacity: 0, x: -100  }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "tween", delay: 0.2 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}