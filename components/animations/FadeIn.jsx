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
		gsap.timeline({
			scrollTrigger: {
				trigger: el.current,
				start: "top 70%",
				end: "top 70%",
				toggleActions: "play play reverse reverse",
			}
		})
			.from(el.current.children, {
				y: 15,
				duration: 1,
				opacity: 0,
				ease: "power4",
				stagger: 0.1,
			})
			.to(el.current.children, {
				opacity: 0.5
			})
  }, [])

  return <div className="brands-images" ref={el}>{children}</div>
}
