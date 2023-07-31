type ContentProps = {
  children: React.ReactNode
}
export const Content = ({ children }: ContentProps) => {
  return <div className="px-[10%] mt-14 container m-auto">{children}</div>
}
