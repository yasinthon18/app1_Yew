import React from "react";

export function Component(){
    n1 = 20
    n2 = 4

    calculate = (op) => {
        let c = `${n1} ${op} ${n2}`
        let r = eval(c)
        alert(`${c} = ${r}`)
    }

}