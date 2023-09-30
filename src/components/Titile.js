import { BiSolidCustomize } from "react-icons/bi";

const Title = ({ title }) => {
    return (
        <>
            <div className="flex items-center gap-x-1 mb-2">
                <BiSolidCustomize size={20} color="red" />
                <p className="font-semibold text-red-600">{title}</p>
            </div>
        </>
    )
}

export default Title;
