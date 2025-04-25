import { motion } from "framer-motion";

const animationVariants = {
	initial: {
		opacity: 0,
		x: 50,
	},
	animate: {
		opacity: 1,
		x: 0, // ✅ zmiana z 90 na 0
		transition: {
			duration: 1.5,
		},
	},
};

function FadeInRight({ children, className = "" }) {
	return (
		<motion.div
			variants={animationVariants}
			initial="initial"
			whileInView="animate"
			className={className}
			viewport={{ once: true }}
			style={{ width: "100%", maxWidth: "100%" }} // ✅ dodatkowa ochrona
		>
			{children}
		</motion.div>
	);
}

export default FadeInRight;
