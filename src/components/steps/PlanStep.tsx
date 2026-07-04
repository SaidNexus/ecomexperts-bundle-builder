import StepHeader from "../ui/StepHeader";
import ShieldIcon from "../../assets/icons/ShieldIcon";

export default function PlanStep() {
  return (
    <>
      <StepHeader step={2} title="Choose tour plan" icon={<ShieldIcon className="w-[30px] text-[#6F7882] h-[31px]" />} />
    </>
  );
}
