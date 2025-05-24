import './animatedPhone.scss'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AnimatedPhone = ({ slides, activeIndex }) => {
    const [loaded, setLoaded] = useState(false)
    const imageSrc = slides[activeIndex].image
    const direction = activeIndex % 2 === 0 ? 1 : -1

    useEffect(() => {
        setLoaded(false)
        const img = new Image()
        img.src = imageSrc
        img.onload = () => setLoaded(true)
    }, [imageSrc])

  return (
    <div className="phone-container">
        <AnimatePresence mode="wait">
            {loaded && (
            <motion.img
                key={imageSrc}
                src={imageSrc}
                alt="Cell content"
                className="phone-background"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            />
            )}
        </AnimatePresence>

        <motion.div
            key={activeIndex}
            className="floating-elements"
            initial={{ x: direction * 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
        />
    </div>
  )
}

export default AnimatedPhone