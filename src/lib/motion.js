// ── PATTERN 1: Auto-stagger (parent handles timing) ──
// Use when a group of elements should cascade in automatically,
// without you manually spacing out delays.


export const staggerContainer = (stagger = 0.15, delayChildren = 0.2 ) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren: stagger,
            delayChildren: delayChildren,
        },
    },
})


export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

// ── PATTERN 2: Manual delay (per-element control) ──
// Use when one specific element needs a custom delay/timing
// independent of any group — e.g. a single card, a standalone CTA.

export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeIn", delay },
  },
})

// Bonus variant you'll likely want for card-stacking later:
export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay },
  },
})