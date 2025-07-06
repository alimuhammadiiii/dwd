const BlackHoleGlow: React.FC = () => {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Glow aura */}
      <div
        className="absolute w-64 h-64 rounded-full 
                   bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-700 
                   blur-3xl opacity-70"
      ></div>

      {/* Central black circle */}
      <div className="relative w-48 h-48 rounded-full bg-black z-10"></div>
    </div>
  )
}

export default BlackHoleGlow
