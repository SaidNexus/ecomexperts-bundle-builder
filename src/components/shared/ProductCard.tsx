import { Minus, Plus } from "lucide-react";

export default function ProductCard() {
  return (
    <div
      className="bg-white w-[224.6px] flex flex-col gap-[14px]
     h-[331.1px] rounded-[10px] py-[15px] pl-[11px]"
    >
      {/* TOP SIDE */}
      <div>
        <div
          className="font-gilroy text-center
        font-semibold text-[12px] text-white
        bg-[#4E2FD2] w-[65px] h-[19px] rounded-full "
        >
          Save 22%
        </div>
        <div>
          <img
            src="Cam.png"
            alt="cam"
            className="w-[143px] h-[117px] m-auto object-contain"
          />
        </div>
      </div>
      {/* ===TOP SIDE=== */}

      {/* BOTTOM SIDE */}
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-[18px] text-[#1F1F1F] font-gilroy font-semibold">
          Wyze Cam v4
        </h1>
        <p className="text-[14px] text-[#1F1F1F]/75 font-gilroy font-medium">
          The clearest Wyze Cam ever made.{" "}
          <span className="text-[#0000EE] underline">Learn More</span>
        </p>
        <div className="overflow-scroll flex gap-[6px] ">
          {[{ color: "White" }, { color: "Black" }, { color: "Gray" }].map(
            (item) => (
              <div
                className={`flex items-center py-[1px] px-[3px] justify-center 
            border-[0.5px] rounded-[2px]  ${
              item.color === "White"
                ? "border-[#0AA288] bg-[#1DF0BB]/4"
                : "border-[#CCCCCC]"
            } w-[63px] `}
              >
                <img
                  src="Cam.png"
                  alt="star"
                  className="w-[28px] h-[28px] font-gilroy font-medium object-contain"
                />
                <p className="text-[10px]">{item.color}</p>
              </div>
            ),
          )}
        </div>

        <div className="flex items-center justify-between  ">
          <div className="flex items-center justify-bettween gap-[10px]">
            <button
              className="border-[2px] border-[#E6EBF0]
             w-[20px] h-[20px] rounded-[4px] flex items-center justify-center "
            >
              <Minus className="w-[8px] h-[9.6px] text-[#CED6DE] " />
            </button>
            <button>1</button>
            <button
              className="border-[2px] border-[#F0F4F7] bg-[#F0F4F7]
             w-[20px] h-[20px] rounded-[4px] flex items-center justify-center ]"
            >
              <Plus className="w-[8px] h-[9.6px] text-[#525963] " />
            </button>
          </div>
          <div className="flex items-end justify-between gap-[3px] pr-[11px] ">
            <p className="text-[16px] text-[#D8392B] line-through font-gilroy font-regular ">
              $35.98
            </p>
            <p className="text-[16px] text-[#575757] font-gilroy font-regular ">
              $27.98
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
