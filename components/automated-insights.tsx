"use client";
import { BadgeDollarSignIcon, ChartNoAxesCombined } from "lucide-react"
import { Button } from "@/components/ui/button"
import AiIcon from "@/components/ai-icon"

export default function AutomatedInsights() {
  return <div className="px-[100px] mx-[100px] my-8">
  <div className="flex flex-col md:flex-row gap-24 items-start"> 
    <div className="w-full md:w-1/4 relative">
      <img 
        src="https://framerusercontent.com/images/uXQDV8AHWHcM9DsQa74eTPOnVk.png"
        alt="Descriptive alt text"
        className="w-full h-auto rounded-xl shadow-lg object-cover hover:animate-float"
        style={{
          animation: 'float 3s ease-in-out infinite'
        }}
      />
    </div>
    
    {/* Text Column - 2/3 width */}
    <div className="w-full md:w-3/4 space-y-6 text-left">
      <h2 className="text-6xl font-bold">Smarter Trades</h2>
      <p className="text-lg">
      Let AI scan markets, detect trends, and provide high-probability trading signals.
      </p>

      {/* Nested Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="space-y-3">
          <ChartNoAxesCombined size={30} />
          <h3 className="text-xl font-semibold">The Ultimate AI Analyst</h3>
          <p className="">
          From breaking news to predictive signals, our AI processes vast data streams to give you an unbeatable edge in fast-moving markets.
          </p>
        </div>
        <div className="space-y-3">
          <BadgeDollarSignIcon size={30} />
          <h3 className="text-xl font-semibold">Future-Proof Your Investments</h3>
          <p className="">
          We combine deep learning and real-time analytics to forecast trends, optimize trades, and keep your portfolio ahead of market shifts.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Animation CSS - now properly scoped and with 5px movement */}
  <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-8px);
      }
    }
    .hover\:animate-float:hover, .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  `}</style>
</div>
};
// export default function AutomatedInsights() {
//   return <div className="px-[100px] py-12 flex flex-col items-center text-center container">
//   <div className="flex flex-col md:flex-row gap-6 items-center px-20">
//     {/* Image Column */}
//     <div className="w-1/2">
//       <img 
//         src="https://framerusercontent.com/images/uXQDV8AHWHcM9DsQa74eTPOnVk.png" 
//         alt="Descriptive alt text"
//         className="w-1/2 h-1/2 py-10 rounded-xl shadow-lg object-cover"
//         style={{
//           animation: 'float 3s ease-in-out infinite'
//         }}
//       />
//     </div>

//     {/* Text Column */}
//     <div className="w-full md:w-1/2 space-y-6">
//       <h2 className="text-6xl font-bold">Smarter Trades</h2>
//       <p className="text-lg">
//       Let AI scan markets, detect trends, and provide high-probability trading signals.
//       </p>

//       {/* Nested Two Columns */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
//         {/* First Sub-column */}
//         <div className="space-y-3">
//           <h3 className="text-xl font-semibold">The Ultimate AI Analyst</h3>
//           <p className="text-">
//           From breaking news to predictive signals, our AI processes vast data streams to give you an unbeatable edge in fast-moving markets.
//           </p>
//         </div>

//         {/* Second Sub-column */}
//         <div className="space-y-3">
//           <h3 className="text-xl font-semibold">Future-Proof Your Investments</h3>
//           <p className="">
//           We combine deep learning and real-time analytics to forecast trends, optimize trades, and keep your portfolio ahead of market shifts.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// }
