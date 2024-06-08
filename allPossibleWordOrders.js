const verbFinalWordOrders = ["OSV", "SOV"]

const objectFinalWordOrders = ["SVO", "VSO"];

const subjectFinalWordOrders = ["VOS", "OVS"];

const allWordOrders = verbFinalWordOrders.concat(objectFinalWordOrders, subjectFinalWordOrders);

export {allWordOrders, subjectFinalWordOrders, objectFinalWordOrders, verbFinalWordOrders}