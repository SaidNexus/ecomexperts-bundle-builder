import SensorIcon from "../../assets/icons/SensorIcon";
import StepHeader from "../ui/StepHeader";

export default function SensorsStep() {
  return (
    <>
      <StepHeader step={3} title="Choose your sensors" icon={<SensorIcon className="w-[30px] text-[#6F7882] h-[31px]" />} />
    </>
  );
}
