import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function FadeIn ({
  children,
}) {

  let componentRef = useRef(null)
  useEffect(() => {
    gsap.from(componentRef.current, {
			ease: "none",
			duration: 1,
      opacity: 0,
			scrollTrigger: {
				trigger: componentRef.current,
				start: "center 65%",
				end: "center 65%",
				toggleActions: "play play reverse reverse",
			},
    })
  }, [])
  return <div ref={componentRef}>{children}</div>
}

export function FadeInStagger({ children }) {
  const el = useRef()

  useEffect(() => {
		gsap.from(el.current.children, {
			duration: 1,
			autoAlpha: 0,
			ease: "none",
			stagger: 0.1,
			scrollTrigger: {
				trigger: el.current,
				start: "top 65%",
				end: "top 65%",
				toggleActions: "play play reverse reverse",
			}
		})

		gsap.utils.toArray(el.current.children).forEach((element) => {
			element.addEventListener("mouseenter", () => gsap.to(element, {opacity: 1, duration: 0.1}))
			element.addEventListener("mouseleave", () => gsap.to(element, {opacity: 0.5, duration: 0.1}))
		})
  }, [])

  return <div className="brands-images" ref={el}>{children}</div>
}
