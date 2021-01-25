export const sentence = {
    hidden: {opacity: 1},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.04,
        },
    },
}
export const letter = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
}
export const animateView = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            // delay: 4,
            duration: 1,
            staggerChildren: 4
        },
    },
}

export const animateTitle = {
    hidden: {
        opacity: 0,
        y: 200
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.75,
            ease: "easeOut"
        }
    }
}
export const slider = {
    hidden: {
        y: '0%',
        width: "500%"
        /*, skew: "45deg"*/
    },
    show: {
        y: "-130%",

        // skew: "0deg",
        transition: {ease: "easeIn", duration: 1}
    }
}
