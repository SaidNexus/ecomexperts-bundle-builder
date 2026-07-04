import ProtectionIcon from "../../assets/icons/ProtectionIcon";
import StepHeader from "../ui/StepHeader";

export default function ProtectionStep() {
  return (
    <>
      <StepHeader step={4} title="Add extra protection" icon={<ProtectionIcon className="w-[30px] text-[#6F7882] h-[31px]"/>} />
    </>
  );
}
