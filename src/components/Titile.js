import { IoMdArrowDropup } from "react-icons/io";

const Title = ({ title }) => {
    return (
        <>
            <div className="flex items-center">
                <IoMdArrowDropup size={30} color="sky" />
                <p className="font-semibold">{title}</p>
            </div>
        </>
    )
}

export default Title;