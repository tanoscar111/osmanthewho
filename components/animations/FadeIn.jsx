import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function FadeIn ({ children }) {
  let el = useRef()

  useEffect(() => {
    gsap.from(el.current, {
			y: 15,
			duration: 1,
      autoAlpha: 0,
			scrollTrigger: {
				trigger: el.current,
				start: "top 70%",
				end: "top 70%",
				toggleActions: "play play reverse reverse",
			},
    })
  }, [])
  return <div ref={el}>{children}</div>
}

export function FadeInStagger({ children }) {
  const el = useRef()

  useEffect(() => {
		gsap.from(el.current.children, {
			y: 15,
			duration: 1,
			autoAlpha: 0,
			ease: "power4.out",
			stagger: 0.2,
			scrollTrigger: {
				trigger: el.current,
				start: "top 70%",
				end: "top 70%",
				toggleActions: "play play reverse reverse",
			}
		})
  }, [])

  return <div className="brands-images" ref={el}>{children}</div>
}
