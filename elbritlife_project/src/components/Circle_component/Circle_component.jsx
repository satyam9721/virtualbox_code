
const Circle_component = ({data, text}) => {
  return (
    <div className="flex flex-row m-3">
        <div className='w-10 h-10  rounded-full bg-[#144151] '>

        </div>
        <div>
            <div className="text-[#17414f] text-sm font-bold">
                <p>{data}</p>
            </div>
            <div className="text-[] text-xs">{text}</div>
        </div>

    </div>
  )
}

export default Circle_component