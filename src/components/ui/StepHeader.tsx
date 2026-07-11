import ChevronUpIcon from "../../assets/icons/ChevronUpIcon";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";
import type { ReactNode } from "react";

type StepHeaderProps = {
  step: number;
  title: string;
  icon: ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  selectedCount: number;
};

export default function StepHeader({
  step,
  title,
  icon,
  isExpanded,
  onToggle,
  selectedCount,
}: StepHeaderProps) {
  return (
    <>
      <header className="px-[15px]">
        <p
          className="text-[#484848]  tracking-[1.6px] 
          text-[12px] font-gilroy mb-1 font-medium uppercase "
        >
          step {step} of 4
        </p>
      </header>
      <div className="h-px bg-[#1f1f1f] " />
      <div
        onClick={onToggle}
        className={`flex justify-between px-[15px] cursor-pointer ${isExpanded ? "pt-[15px]" : "py-[21.5px]"} `}
      >
        <div className=" flex gap-[8px] items-center">
          {icon}
          <div className="xl:text-[28px] md:text-[18px] text-[16px] text-[#0B0D10] font-gilroy font-semibold ">
            {title}
          </div>
        </div>

        <div className="text-selected xl:text-[16px] text-[14px] font-gilroy font-medium transition-all duration-300 flex items-center gap-[5px]">
          {selectedCount > 0 && <p>{selectedCount} selected</p>}
          {isExpanded ? (
            <ChevronUpIcon className="w-[10px] h-[7px]" />
          ) : (
            <ChevronDownIcon className="w-[10px] h-[7px]" />
          )}
        </div>
      </div>
    </>
  );
}
