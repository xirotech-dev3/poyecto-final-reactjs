import { useState } from "react";

export const Count = ( ) => {
    const [contador, setContador] = useState(1);

    const sum  = () => setContador(contador + 1 )
    const res  = () => setContador(contador - 1 )

    return (
        <div>
            <button onClick={()=> res()}>-</button>
            {contador}
            <button onClick={()=> sum()}>+</button>
        </div>
    )
};