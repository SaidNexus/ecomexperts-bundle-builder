import SensorIcon from "../../assets/icons/SensorIcon";
import StepHeader from "../ui/StepHeader";
import Sensors from "../../data/Sensors.json";
import SensorsCard from "../shared/SensorsCard";
import { useBundleContext } from "../../context/BundleContext";

type SensorsStepProps = {
  expandedStep: number;
  setExpandedStep: (step: number) => void;
  nextStepRef?: React.RefObject<HTMLDivElement | null>;
};

export default function SensorsStep({ expandedStep, setExpandedStep, nextStepRef }: SensorsStepProps) {
  const { bundle } = useBundleContext();
  const isExpanded = expandedStep === 3;
  const selectedCount = bundle.sensors.reduce((acc, s) => acc + s.quantity, 0);

  const handleNext = () => {
    setExpandedStep(4);
    setTimeout(() => {
      nextStepRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  return (
    <div
      className={`${isExpanded ? "bg-[#EDF4FF] py-[20px] rounded-[10px] my-[15px]" : ""} transition-all duration-300`}
    >
      <StepHeader
        isExpanded={isExpanded}
        onToggle={() => setExpandedStep(isExpanded ? 0 : 3)}
        step={3}
        selectedCount={selectedCount}
        title="Choose your sensors"
        icon={<SensorIcon className="w-[30px] text-[#6F7882] h-[30px]" />}
      />
      {isExpanded && (
        <div className="flex flex-col gap-4">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 px-4 transition-all duration-300"
          >
            {Sensors.map((item) => (
              <SensorsCard
                data={item}
                key={item.id}
              />
            ))}
          </div>
          <div
            className="flex justify-center text-[#4E2FD2]
            font-gilroy font-semibold text-[18px] mt-4"
          >
            <button
              onClick={handleNext}
              className="py-[5px] px-[24px] border-[1px] border-[#4E2FD2] rounded-[7px]"
            >
              Next: Add extra protection
            </button>
          </div>
        </div>
      )}
      {!isExpanded && <div className="h-px bg-[#1f1f1f] " />}
    </div>
  );
}
