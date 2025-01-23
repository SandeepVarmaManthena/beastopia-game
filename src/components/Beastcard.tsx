import ProgressBar from "@ramonak/react-progress-bar";


const Beastcard = (props: { image: string; name: string; desc: string; power :number; speed :number; healing :number; }) => {
  return (
    <>
        <div className="beast_wrapper flex justify-center items-center p-6 w-[360px] bg-gray-900 rounded-lg shadow-lg">
            <div className="beast_card  text-white flex flex-col gap-2 align-center justify-center w-[80%]">
                <div className="wrap flex flex-row items-center gap-2 pb-3">
                    <div className="empty bg-[#F0A500] w-[3px] h-[20px]"></div>
                    <h2 className="beast_name text-xl font-bold text-[#F0A500]">
                        {props.name}
                    </h2>
                </div>
                <div className="beast_image w-[220px] rounded-t-lg overflow-hidden m-auto animate-slow-move">
                    <img src={props.image} alt="beast" className="animate-pulse"/>
                </div>
                {/* <div className="beast_info p-4">
                    <h2 className="beast_name text-2xl font-bold">{props.name}</h2>
                    <p className="beast_description text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio at felis.</p>
                    <div className="beast_attributes flex flex-row gap-2 mt-3">
                        <div className="beast_attribute bg-[#F0A500] text-gray-800 rounded-lg p-1 text-xs">Attribute 1</div>
                        <div className="beast_attribute bg-[#F0A500] text-gray-800 rounded-lg p-1 text-xs">Attribute 2</div>
                        <div className="beast_attribute bg-[#F0A500] text-gray-800 rounded-lg p-1 text-xs">Attribute 3</div>
                    </div>
                </div> */}
                <div className="beast_details w-[100%] flex flex-col gap-2">
                    <div className="power">
                        <h1 className="text-[#F0A500] text-sm font-bold">Power</h1>
                        <ProgressBar 
                        completed={props.power}
                        bgColor="#101828"
                        isLabelVisible={true}
                        baseBgColor="#F0A500"
                        labelColor="#F0A500"
                        animateOnRender
                        maxCompleted={100}
                        height="10px"
                        labelSize="11px"
                        customLabel={props.power.toString()}
                        className="border-1 border-[#F0A500] rounded-full"
                        />
                    </div>
                    <div className="speed">
                        <h1 className="text-[#F0A500] text-sm font-bold">Speed</h1>
                        <ProgressBar 
                        completed={props.speed}
                        bgColor="#101828"
                        isLabelVisible={true}
                        baseBgColor="#F0A500"
                        labelColor="#F0A500"
                        animateOnRender
                        maxCompleted={100}
                        height="10px"
                        labelSize="11px"
                        customLabel={props.speed.toString()}
                        className="border-1 border-[#F0A500] rounded-full bg-[#F0A500]"
                        />
                    </div>
                    <div className="healing">
                        <h1 className="text-[#F0A500] text-sm font-bold">Healing</h1>
                        <ProgressBar 
                        completed={props.healing}
                        bgColor="#101828"
                        isLabelVisible={true}
                        baseBgColor="#F0A500"
                        labelColor="#F0A500"
                        animateOnRender
                        maxCompleted={100}
                        customLabel={props.healing.toString()}
                        height="10px"
                        labelSize="11px"
                        className="border-1 border-[#F0A500] rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Beastcard