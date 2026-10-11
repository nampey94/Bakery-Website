import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewport } from '../hooks/motion.js'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!valid) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
  }

  return (
    <motion.section
      className="newsletter"
      id="newsletter"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div className="newsletter-inner" variants={fadeUp}>
        <h2>تازه از تنور.</h2>
        <p>اخبار نانوایی، محصولات فصلی و نان تازه را در ایمیل خود دریافت کنید.</p>
        <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            placeholder="آدرس ایمیل شما"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
            aria-label="آدرس ایمیل"
            aria-invalid={status === 'error'}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            عضویت
          </motion.button>
        </form>
        {status === 'error' && <div className="newsletter-error">لطفاً یک آدرس ایمیل معتبر وارد کنید.</div>}
        {status === 'success' && (
          <div className="newsletter-success show">سپاسگزاریم! شما در لیست هستید. 🥐</div>
        )}
      </motion.div>
    </motion.section>
  )
}
