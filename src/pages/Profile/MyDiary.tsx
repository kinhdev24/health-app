export const MyDiary = () => {
  return (
    <div id="my_diary">
      <div className="uppercase text-[22px]">My Diary</div>
      <div className="grid grid-cols-4 gap-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <DiaryItem key={index} />
        ))}
      </div>
    </div>
  )
}

const DiaryItem = () => {
  return (
    <div className="p-4 border-2 border-solid border-[#707070] h-56">
      <div className="text-lg">
        2021.05.21 <br /> 23:25
      </div>
      <div className=" text-xs mt-2 font-notoJP">
        私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
      </div>
    </div>
  )
}
