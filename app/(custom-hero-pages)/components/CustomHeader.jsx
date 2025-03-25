


export const CustomHeader = ({headerClass, headerTitle}) => {

    return (
      <div className={`relative h-[180px] flex justify-evenly px-0 md:px-5 ${headerClass} bg-center bg-cover overflow-hidden`}>
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
              <h1 className="px-5 text-center text-gray-100 text-3xl md:text-5xl">{headerTitle}</h1>
          </div>
      </div>
    )
  }