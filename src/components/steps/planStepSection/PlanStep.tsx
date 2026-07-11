import StepHeader from "../../ui/StepHeader";
import ShieldIcon from "../../../assets/icons/ShieldIcon";
import UnlimitedPlan from "./UnlimitedPlan";
import { useState } from "react";
import { useBundleContext } from "../../../context/BundleContext";

type PlanStepProps = {
  expandedStep: number;
  setExpandedStep: (step: number) => void;
  nextStepRef?: React.RefObject<HTMLDivElement | null>;
};

export default function PlanStep({ expandedStep, setExpandedStep, nextStepRef }: PlanStepProps) {
  const { bundle, selectPlan } = useBundleContext();
  const isExpanded = expandedStep === 2;

  const handleNext = () => {
    setExpandedStep(3);
    setTimeout(() => {
      nextStepRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  return (
    <div
      className={`${isExpanded ? "bg-[#EDF4FF] py-5 my-5 rounded-[10px]" : ""}  transition-all duration-300`}
    >
      <StepHeader
        step={2}
        title="Choose tour plan"
        isExpanded={isExpanded}
        onToggle={() => setExpandedStep(isExpanded ? 0 : 2)}
        icon={<ShieldIcon className="xl:w-[30px] md:h-[21px] 
             md:w-[21px] w-[16px] h-[16px] text-[#6F7882] xl:h-[30px]" />}
      />
      {isExpanded && (
        <div className="flex flex-col gap-4">
          <div className="flex lg:flex-row flex-col gap-[25px] p-[30px]">
            <UnlimitedPlan selectPlan={selectPlan} planNum={bundle.plan} />

            <div
              className="flex-1 p-[15px] rounded-[10px] space-y-2 bg-white cursor-pointer"
              onClick={() => selectPlan("noPlan")}
            >
              <div className="flex gap-4 items-center">
                <input
                  type="radio"
                  checked={bundle.plan == "noPlan"}
                  readOnly
                  className="md:w-[18px] md:h-[18px] translate-0.5"
                />
                <h1 className="font-gilroy md:text-[16px] text-[14px] font-semibold">
                  No Plan
                </h1>
              </div>
              <p className="pl-8 text-[12px] md:text-[14px] text-gray-500">
                Continue without a subscription
              </p>
            </div>
          </div>
          <div
            className="flex justify-center text-[#4E2FD2]
            font-gilroy font-semibold text-[18px]"
          >
            <button
              onClick={handleNext}
              className="py-[5px] px-[24px] border-[1px] border-[#4E2FD2] rounded-[7px]"
            >
              Next: Choose your sensors
            </button>
          </div>
        </div>
      )}
      {isExpanded ? null : <div className="h-px bg-[#1f1f1f] " />}
    </div>
  );
}
