import ShieldIcon from "../../assets/icons/ShieldIcon";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";
import type { ReactNode } from "react";

type StepHeaderProps = {
  step: number;
  title: string;
  icon: ReactNode;
  isExpanded?: boolean;
};

export default function StepHeader({
  step,
  title,
  icon,
  isExpanded,
}: StepHeaderProps) {
  return (
    <div>
      <header className="px-[15px]">
        <p
          className="text-[#484848]  tracking-[1.6px] 
                 text-[12px] font-gilroy font-medium uppercase "
        >
          step {step} of 4
        </p>
      </header>
      <div className="h-px bg-[#1f1f1f] " />
      <div>
        <div
          className={`flex justify-between px-[15px] ${isExpanded ? "pt-[15px]" : "py-[21.5px]"} `}
        >
          <div className=" flex gap-[8px] items-center">
            {icon}
            <div className="text-[28px] text-[#0B0D10] font-gilroy font-semibold ">
              {title}
            </div>
          </div>

          <div className="text-slected font-gilroy font-medium flex items-center gap-[5px]">
            <p>2 selected</p>
            <ChevronDownIcon className="w-[10px] h-[7px]" />
          </div>
        </div>
        {step === 1 ? "" : <div className="h-px bg-[#1f1f1f] " />}
      </div>
    </div>
  );
}
