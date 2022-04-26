const tl = gsap.timeline({ defaults: { duration: 0.75, ease: 'power1.out' } })

tl.fromTo(
  '.modal h1',
  { x: '-100%' },
  { x: '0', ease: 'elastic.out(1, 0.4)', duration: 3 }
)
