import { FC } from "react"
interface Txt {
text: string
}
const Button: FC<Txt> = ({text}) => {
  return (
    <>
      <button className="hover:scale-105 duration-300 bg-[#00616C] font-medium text-lg hover:shadow-lg text-white px-10 py-3 rounded-full">{text}</button>
    </>
  )
}

export default Button
