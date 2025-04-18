export default function Divider() {
  return (
    <div className="relative w-full h-px my-8 overflow-visible">
    <div className="
      absolute inset-0 
      bg-gradient-to-r 
      from-transparent 
      via-blue-400/70 
      to-transparent
      h-full
      w-full
    "></div>
    <div className="
      absolute inset-0 
      bg-gradient-to-r 
      from-blue-100/30 
      via-blue-400 
      to-blue-100/30
      h-[2px] 
      w-full
      -top-[0.5px]
      blur-[1px]
      scale-y-50
      origin-center
    "></div>
  </div>
  )
}