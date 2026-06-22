import ClickButton from "../components/ClickButton";
import { playSound } from "../utils/playSound";

function Clicker() {

const soundCount = (count: number) =>
  Math.floor(count / 3) + 1;

const soundMap = {
  1: "clicker1",
  2: "clicker2",
  3: "clicker3",
} as const;

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-[32px] shadow-2xl border border-zinc-800">

        <div className="grid grid-cols-3 gap-4">

          {["🐱", "🐰", "🐻", "🍓", "🍩", "🧁", "⭐", "🌈", "💖"].map(
            (item, index) => (
                <ClickButton key={index} index={index} content={item} onClick={()=>playSound(soundMap[soundCount(index) as 1|2|3])}/>
            )
          )}

        </div>

      </div>
    </div>
  );
}

export default Clicker;