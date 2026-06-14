export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Glow 1 */}
<div
  className="
    animate-glow

    absolute
    left-[-150px]
    top-[100px]

    h-[500px]
    w-[500px]

    rounded-full
    bg-cyan-400/10

    blur-[160px]
  "
/>

{/* Glow 2 */}
<div
  className="
    animate-glow

    absolute
    right-[-150px]
    top-[800px]

    h-[450px]
    w-[450px]

    rounded-full
    bg-cyan-500/10

    blur-[160px]
  "
  style={{
    animationDelay: "4s",
  }}
/>

      {/* Glow 3 */}
      <div
        className="
          absolute
          left-[35%]
          bottom-[300px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-cyan-300/10
          blur-[140px]
        "
      />

      {/* Radial Light */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05),transparent_70%)]
        "
      />

      {/* Particles */}
      <div
        className="
          absolute
          inset-0
          opacity-30
          bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Film Grain */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.015]
          bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
        "
      />

    </div>
  );
}