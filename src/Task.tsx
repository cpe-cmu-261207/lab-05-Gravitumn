import React,{useState} from 'react'
type TaskProps = {
    id: Number;
    name: String;
    done: Function;
    deleteFn: Function; //Function type
    isFinish: Boolean
}

const Task = ({ id, name, deleteFn , done , isFinish }: TaskProps) => {
    const [display,setdis] = useState<string>("none")
    return (
        <div>
            <div
            className="flex justify-between h-8 items-center py-6 border-b" onMouseOver={()=>setdis('block')} onMouseOut={()=>setdis('none')}
            >
                {isFinish?<span className="text-2xl"> {name} </span>:<span className="text-2xl"> <del>{name}</del> </span>}
                <div className="flex space-x-1 items-center">
                    {isFinish? <button className="bg-green-400 w-24 text-2xl" id="don" onClick ={()=>{done(id)}} onMouseOver={()=>setdis('block')} onMouseOut={()=>setdis('none')} style={{display:display}}>Done</button>:null}
                    {isFinish? <button className="bg-red-400 w-24 text-2xl" id="del" onClick={()=>{deleteFn(id)}} style={{display: display}} onMouseOut={()=>setdis('none')} onMouseOver={()=>setdis('block')}>Delete</button>:null}
                </div>
            </div>
        </div>
    )
}

export default Task