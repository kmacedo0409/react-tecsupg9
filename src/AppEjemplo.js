import {useState} from "react";
const PrimerComponente = ()=>{
    const [count,setCount] = useState(0)
    const sumar =()=>{
        setCount(count +1);
    }
    const restar =()=>{
        setCount(count -1);
        }
        const parametros =(a,b)=>{
            setCount(a+b);
            }
    return(
        <div>
            <h1>Este es mi componente {count}</h1>
            <h2>Hola desde mi componente</h2>
            <button onClick={sumar}>sumar</button>
            <button onClick={restar}>restar</button>
            <button onClick={()=>parametros (10,20)}>Calcular</button>
        </div>

    )
       
}
export default PrimerComponente;