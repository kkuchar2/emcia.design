export const hiTitleAnim = {
    initial: "hidden",
    exit: "hidden",
    animate: "visible",
    variants: {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: [0.7, 0.1, 0.3, 0.9]
            }
        },
        hidden: {
            y: -50,
            opacity: 0,
            transition: {
                duration: 0.4
            }
        }
    }
};

export const nameTitleAnim = {
    initial: "hidden",
    exit: "hidden",
    animate: "visible",
    variants: {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                delay: 0.1,
                ease: [0.0, 0.3, 0.6, 1]
            }
        },
        hidden: {
            y: -50,
            opacity: 0,
            transition: {
                duration: 0.4
            }
        }
    }
};