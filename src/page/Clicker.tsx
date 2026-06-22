function Clicker() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-[32px] shadow-2xl border border-zinc-800">

        <div className="grid grid-cols-3 gap-4">

          {["🐱", "🐰", "🐻", "🍓", "🍩", "🧁", "⭐", "🌈", "💖"].map(
            (item, index) => (
              <button
                key={index}
                className="
                  w-24 h-24
                  rounded-3xl
                  bg-zinc-800
                  border
                  border-zinc-700
                  text-4xl
                  shadow-[0_6px_0_rgb(39,39,42)]
                  hover:-translate-y-1
                  hover:bg-zinc-700
                  active:translate-y-1
                  active:shadow-[0_2px_0_rgb(39,39,42)]
                  transition-all
                  duration-150
                "
              >
                {item}
              </button>
            )
          )}

        </div>

      </div>
    </div>
  );
}

export default Clicker;