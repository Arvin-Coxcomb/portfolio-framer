import { useRef } from "react";
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id : 1,
        title : "React AI Chatbot",
        img : "https://images.pexels.com/photos/18069696/pexels-photo-18069696/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-illustration-depicts-language-models-which-generate-text-it-was-created-by-wes-cockx-as-part-of-the-visualising-ai-project-l.png",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo mariores?"
    },
    {
        id : 2,
        title : "Food Ordering App",
        img : "https://images.pexels.com/photos/4061560/pexels-photo-4061560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo mariores?"
    },
    {
        id : 3,
        title : "Next Commerce",
        img : "https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo mariores?"
    },
    {
        id : 4,
        title : "Music App",
        img : "https://images.pexels.com/photos/4114807/pexels-photo-4114807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo mariores?"
    }
];

const Single = ({item})=>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target : ref,
        //offset : ["start start", "end start"]
    })
    const y = useTransform(scrollYProgress, [0,1], [-300,300] )
    return(
        <section >
            <div className="portfolio-container">
                <div className="portfolio-wrapper">
                    <div className="portfolio-imageContainer" ref={ref}>
                        <img src={item.img} alt = "Image not found"/>
                    </div>
                    <motion.div className="portfolio-textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>    
                    </motion.div> 
                </div>
            </div>
        </section>
    );
}

export default function Portfolio() {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target : ref,
        offset : ["end end", "start start"]
    })
    const scaleX = useSpring(scrollYProgress,{
        stiffness : 100,
        damping : 30
    })
    
  return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div className="progressBar" style={{scaleX:scaleX}}></motion.div>
        </div>
        {items.map((item)=>
        <Single item={item} key={item.id}/>
        )}
     </div>
)
}
