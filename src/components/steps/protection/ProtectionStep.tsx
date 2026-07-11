import ProtectionIcon from "../../../assets/icons/ProtectionIcon";
import StepHeader from "../../ui/StepHeader";
import ProtectionCards from "../../../data/Protection.json";
import ProtectionCard from "../../shared/ProtectionCard";
import { useBundleContext } from "../../../context/BundleContext";

type ProtectionStepProps = {
  expandedStep: number;
  setExpandedStep: (step: number) => void;
};

export default function ProtectionStep({ expandedStep, setExpandedStep }: ProtectionStepProps) {
  const { toggleProtection } = useBundleContext();
  const isExpanded = expandedStep === 4;

  return (
    <div
      className={`${isExpanded ? "bg-[#EDF4FF] py-[20px] rounded-[10px] my-[15px]" : ""} transition-all duration-300`}
    >
      <StepHeader
        step={4}
        isExpanded={isExpanded}
        onToggle={() => setExpandedStep(isExpanded ? 0 : 4)}
        title="Add extra protection"
        icon={<ProtectionIcon className="w-[30px] text-[#6F7882] h-[31px]" />}
      />
      {isExpanded && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 px-4 py-4 transition-all duration-300">
          {ProtectionCards.map((item) => (
            <ProtectionCard
              item={item}
              key={item.id}
              toggleProtection={toggleProtection}
            />
          ))}
        </div>
      )}
      {!isExpanded && <div className="h-px bg-[#1f1f1f] " />}
    </div>
  );
}
