export const sentence = {
    hidden: {opacity: 1},
    show: {
        opacity: 1,
        transition: {
            delay: 55,
            staggerChildren: 0.05,
        },
    },
}
export const letter = {
    hidden: {
        opacity: 0,
        // y: 50
    },
    show: {
        opacity: 1,
        // y: 0,
    },
}
export const animView = {
    start: {opacity: 0},
    end: {
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 1,
        },
    },
}