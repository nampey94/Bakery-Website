import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../hooks/motion.js'
import './BrandMission.css'

export default function BrandMission() {
  return (
    <motion.section
      className="mission"
      id="mission"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="left">
        <span className="micro-label">مأموریت برند</span>
      </div>
      <div className="right">
        <p>
          هدف برند ما این است که به مشتریان احساس زیبایی و گرمای خانه‌ای
          را با لمسی مدرن بدهیم. برندی طراحی کرده‌ایم که گرم اما مدرن است.
        </p>
        <motion.a
          className="btn-pill btn-pill-outline learn-btn"
          href="#about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          بیشتر بدانید
        </motion.a>
      </div>
    </motion.section>
  )
}
