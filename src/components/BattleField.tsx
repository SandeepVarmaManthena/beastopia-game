import ProgressBar from "@ramonak/react-progress-bar";


const BattleField = (props: { img: string | undefined; }) => {
  return (
    <>
        <div className="main_wrapper flex flex-col p-4">
            <div className="beast_image flex items-center justify-center bg-gray-900 py-8 rounded-lg" >
                <img src={props.img} alt=""className='w-[40%]'/>
            </div>
            <div className="beast_details py-6">
                <div className="HP flex flex-row items-center justify-between px-2 py-2">
                    <p className='text-md font-bold '>HP</p>
                    <div className="HP_sub flex flex-row items-center gap-2 w-[70%] justify-between">
                    <ProgressBar 
                        completed={50}
                        bgColor="#101828"
                        isLabelVisible={false}
                        baseBgColor="#F0A500"
                        labelColor="#F0A500"
                        animateOnRender
                        maxCompleted={100}
                        height="10px"
                        labelSize="11px"
                        // customLabel={props.power.toString()}
                        className="border-1 border-[#F0A500] rounded-full w-[80%]"
                        />
                        <p className='text-mg font-bold '>50/100</p>
                    </div>
                </div>
                <div className="Attack flex flex-row items-center justify-between px-2 py-2">
                    <p className='text-md font-bold '>Attack</p>
                    <div className="HP_sub flex flex-row items-center gap-2 w-[70%] justify-between">
                        <ProgressBar 
                        completed={60}
                        bgColor="#101828"
                        isLabelVisible={false}
                        baseBgColor="#F0A500"
                        labelColor="#F0A500"
                        animateOnRender
                        maxCompleted={100}
                        height="10px"
                        labelSize="11px"
                        // customLabel={props.power.toString()}
                        className="border-1 border-[#F0A500] rounded-full w-[80%]"
                        />
                        <p className='text-mg font-bold '>60/100</p>
                    </div>
                </div>
                <div className="Defence flex flex-row items-center justify-between px-2 py-2">
                    <p className='text-md font-bold '>Defence</p>
                    <div className="HP_sub flex flex-row items-center gap-2 w-[70%] justify-between">
                        <ProgressBar 
                            completed={70}
                            bgColor="#101828"
                            isLabelVisible={false}
                            baseBgColor="#F0A500"
                            labelColor="#F0A500"
                            animateOnRender
                            maxCompleted={100}
                            height="10px"
                            labelSize="11px"
                            // customLabel={props.power.toString()}
                            className="border-1 border-[#F0A500] rounded-full w-[80%]"
                        />
                        <p className='text-mg font-bold '>70/100</p>
                    </div>
                </div>
            </div>
            <div className="beast_moves flex flex-col gap-4 pt-2">
                <button className='bg-[#3b82f6] py-2 text-md font-bold rounded-lg'>Move 1</button>
                <button className='bg-[#16a34a] py-2 text-md font-bold rounded-lg'>Move 2</button>
                <button className='bg-[#dc2626] py-2 text-md font-bold rounded-lg'>Move 3</button>
            </div>
        </div>
    </>
  )
}

export default BattleField