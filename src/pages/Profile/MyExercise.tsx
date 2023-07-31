export const MyExercise = () => {
  return (
    <div
      className="w-full py-4 px-6 bg-primary-black text-white h-96 max-h-96 overflow-auto"
      id="my_exercise"
    >
      <div className="flex gap-4 items-center">
        <div>
          MY <br />
          EXERCISE
        </div>
        <div className="text-[22px]">2021.05.21</div>
      </div>
      <div className="mt-1 grid grid-cols-2 gap-x-10 gap-y-2">
        {Array.from({ length: 20 }).map((_, index) => (
          <Activity key={index} />
        ))}
      </div>
    </div>
  )
}

const Activity = () => {
  return (
    <div className="flex border-b border-solid border-[#777777] items-center justify-between">
      <div>
        <div className="text-base">
          <span className="mr-1 font-light font-notoJP">&#8226;</span>{" "}
          家事全般（立位・軽い）
        </div>
        <div className="text-primary-yellow ml-4">26kcal</div>
      </div>
      <div className=" text-primary-yellow text-lg">10 min</div>
    </div>
  )
}
