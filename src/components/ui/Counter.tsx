import { Minus, Plus } from "lucide-react";

type CounterProps = {
  quantity?: number;
  variant?: "card" | "review";
  onIncrease?: () => void;
  onDecrease?: () => void;
};

const VARIANT_STYLES = {
  card: {
    gap: "gap-[10px]",
    minus: "border-[#E6EBF0]",
    plus: "border-[#F0F4F7] bg-[#F0F4F7]",
  },
  review: {
    gap: "gap-[12px]",
    minus: "border-white bg-white",
    plus: "border-white bg-white",
  },
} as const;

export default function Counter({
  quantity = 0,
  variant = "card",
  onIncrease,
  onDecrease,
}: CounterProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div className={`flex items-center justify-between ${styles.gap}`}>
      <button
        onClick={onDecrease}
        aria-label="Decrease quantity"
        className={`border-[2px] ${styles.minus}
           w-[20px] h-[20px] rounded-[4px] 
           flex items-center justify-center `}
      >
        <Minus className="w-[8px] h-[9.6px] text-[#CED6DE] " />
      </button>
      <span>{quantity}</span>
      <button
        onClick={onIncrease}
        aria-label="Increase quantity"
        className={`border-[2px] ${styles.plus} cursor-pointer
           w-[20px] h-[20px] rounded-[4px] flex items-center justify-center `}
      >
        <Plus className="w-[8px] h-[9.6px] text-[#525963]  " />
      </button>
    </div>
  );
}
