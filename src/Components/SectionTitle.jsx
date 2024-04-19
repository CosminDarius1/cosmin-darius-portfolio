
const SectionTitle = ({text, width}) => {
    return (
        <div className="border-b border-gray-200 pb-5" style={{width: width}}>
            <h2 className="text-3xl font-medium tracking-wider capitalize text-orange-500 ">{text}</h2>
        </div>
    )
}

export default SectionTitle;