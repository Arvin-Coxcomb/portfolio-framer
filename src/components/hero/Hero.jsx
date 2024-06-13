import "./hero.scss"
import {motion} from "framer-motion"
export default function Hero() {
    const textVariants = {
        initial : {
            x : -500,
            opacity : 0
        },
        animate : {
            x : 0,
            opacity : 1,
            transition  : {
                duration : 1,
                staggerChildren : 0.1
            }
        },
        scrollButton : {
            opacity : 0,
            y : 20,
            transition : {
                duration : 2,
                repeat : Infinity

            }
        }
    }

    const slideVariants = {
        initial : {
            x : 0
        },
        animate : {
            x : "-220%",
            transition : {
                duration : 20,
                repeat : Infinity,
                repeatType : "mirror"
            }
        }
    }

  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>Harvey Teyler</motion.h2>
                <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants} whileHover={{backgroundColor: "white", color: "black"}}>See the latest works</motion.button>
                    <motion.button variants={textVariants} whileHover={{backgroundColor: "white", color: "black"}}>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png"/>
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={slideVariants} initial="initial" animate="animate">
            Writer Content Creator Influencer
        </motion.div>
        <div className="imageContainer">
            <img src="/hero.png" alt="error in loading image"/>
        </div>
    </div>
  )
}
