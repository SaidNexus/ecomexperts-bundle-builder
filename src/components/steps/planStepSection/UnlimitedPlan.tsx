import WyzeGuaranteeIcon from "../../../assets/icons/WyzeGuaranteeIcon";
import { Check } from "lucide-react";

const PLAN_FEATURES = [
  "Unlimited cloud storage",
  "Person detection",
  "Smart alerts",
  "Cancel anytime",
] as const;

interface choosePlan {
  selectPlan: (plan: string) => void;
  planNum: string | null;
}

export default function UnlimitedPlan({ selectPlan, planNum }: choosePlan) {
  return (
    <div
      onClick={() => selectPlan("unLimited")}
      className="flex-1 border border-[#4E2FD2] p-[15px] rounded-[10px]"
    >
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-[15px]">
          <input
            type="radio"
            checked={planNum == "unLimited"}
            className="md:w-[18px] md:h-[18px] translate-0.5"
          />

          <div className="flex gap-[8px] items-center justify-center ">
            <WyzeGuaranteeIcon className="xl:w-[35px] xl:h-[35px] md:w-[28px] md:h-[28px] w-[20px] h-[20px]" />

            <h1
              className="text-nowrap xl:text-[22px] font-gilroy
                 font-semibold text-[#3318ad] text-[18px]"
            >
              Can Unlimited
            </h1>
          </div>
        </div>

        <p className="text-[#3318ad] font-gilroy font-semibold">$9.99/mo</p>
      </div>

      <div className="flex flex-wrap justify-start sm:justify-center py-5 w-full gap-4 sm:gap-8 md:gap-16 lg:gap-[140px] font-gilroy ">
        <div className="flex flex-col items-start">
          {PLAN_FEATURES.slice(0, 2).map((feature) => (
            <div
              key={feature}
              className="flex items-center justify-center gap-[12px]"
            >
              <Check className="w-4 h-4 text-[#3318ad] translate-0.5" />
              <p className="text-[14px]">{feature}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start">
          {PLAN_FEATURES.slice(2).map((feature) => (
            <div
              key={feature}
              className="flex items-center justify-center gap-[12px]"
            >
              <Check className="w-4 h-4 text-[#3318ad] translate-0.5" />
              <p className="text-[14px]">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
