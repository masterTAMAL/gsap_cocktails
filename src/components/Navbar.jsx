import { navLinks } from "../../constant";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

const Navbar=()=>{
 
    useGSAP(() => {
        const navTween = gsap.timeline({ // Create a timeline for the animation
	 scrollTrigger: {
		trigger: 'nav', // Trigger the animation when the nav comes into view
		start: 'bottom top'// Start the animation when the bottom of the nav reaches the top of the viewport
	 }

    });
  navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
	 backgroundColor: '#00000050',
	 backgroundFilter: 'blur(10px)',
	 duration: 1,
	 ease: 'power1.inOut'
	});
 })




    return(
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                     <img src="/images/logo.png" alt="logo" />
                     <p>Velvet Pour</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
			<li key={link.id}>
			 <a href={`#${link.id}`}>{link.title}</a>
			</li>
		 ))}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;