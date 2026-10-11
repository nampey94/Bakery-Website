// Shared Framer Motion variants and config

export const ease = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease } }
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } }
}

export const hoverLift = {
  y: -4,
  transition: { duration: 0.25, ease }
}

export const tapPress = {
  scale: 0.97,
  transition: { duration: 0.15 }
}

export const viewport = { once: true, amount: 0.15 }
