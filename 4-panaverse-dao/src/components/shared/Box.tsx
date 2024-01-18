import { FC } from "react"

const Box:FC<{text: string,value: number,val:string}> = ({text,value,val}) => {
  return (
    <>
      <div className="text-white relative px-20 h-60 mt-20">

      <p className="text-4xl text-white font-bold relative mt-10">Quarter</p>
      <p>{text}</p> 
      <h3 className="font-semibold text-4xl mt-2">{value}</h3>

<p className="text-8xl text-gray-50 font-extrabold absolute top-0 right-6 mt-3">{val}</p>
    
      </div>
    </>
  )
}

export default Box
