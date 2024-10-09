/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export const AnimatedSection = ({ direction, children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,    // When 10% of the component is in view
    });

    // Define animation variants for different directions
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'top' ? 100 : direction === 'bottom' ? -100 : 0,
            x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}