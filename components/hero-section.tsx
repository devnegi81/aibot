export default function HeroSection() {

    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center text-center">

          <h2 className="absolute text-[140px] font-[600] bg-gradient-to-r select-none pointer-events-none w-full text-center from-green-500 via-teal-400 to-cyan-400 text-transparent bg-clip-text">
          Personalized Research
          <br />
          Assistant
          </h2>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <img 
                src="https://framerusercontent.com/images/4Y8JiQpY0d9kcWauC4ivJfPhoU.png"
                alt="Foreground content" 
                className="max-w-[90%] max-h-[90%] object-contain"
                />
            </div>
        </div>
    );
}