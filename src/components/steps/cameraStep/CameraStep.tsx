import CameraIcon from "../../../assets/icons/CameraIcon";
import ProductCard from "../../shared/ProductCard";
import StepHeader from "../../ui/StepHeader";
import Cameras from "../../../data/products.json";
import { useBundleContext } from "../../../context/BundleContext";

type CameraStepProps = {
  expandedStep: number;
  setExpandedStep: (step: number) => void;
  nextStepRef?: React.RefObject<HTMLDivElement | null>;
};

export default function CameraStep({ expandedStep, setExpandedStep, nextStepRef }: CameraStepProps) {
  const { bundle } = useBundleContext();
  const isExpanded = expandedStep === 1;
  const selectedCount = bundle.cameras.reduce((acc, c) => acc + c.quantity, 0);

  const handleNext = () => {
    setExpandedStep(2);
    setTimeout(() => {
      nextStepRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  return (
    <div
      className={`${isExpanded ? "bg-step-bg py-[15px]" : ""} rounded-[10px] transition-all duration-300  flex flex-col gap-[5px] `}
    >
      <div className=" flex flex-col ">
        <StepHeader
          step={1}
          isExpanded={isExpanded}
          onToggle={() => setExpandedStep(isExpanded ? 0 : 1)}
          selectedCount={selectedCount}
          title="Choose your cameras"
          icon={
            <CameraIcon
              className="xl:w-[30px] md:h-[21px] 
             md:w-[21px] w-[16px] h-[16px] text-[#6F7882] xl:h-[30px]"
            />
          }
        />

        {isExpanded && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 items-stretch gap-4 px-4 pt-4 ">
              {Cameras.map((item) => (
                <div
                  key={item.id}
                  className="
                    h-full flex
                    lg:[&:last-child:nth-child(odd)]:col-span-2
                    lg:[&:last-child:nth-child(odd)]:w-[calc(50%-8px)]
                    lg:[&:last-child:nth-child(odd)]:mx-auto
                    xl:[&:last-child:nth-child(odd)]:col-span-1
                    xl:[&:last-child:nth-child(odd)]:w-full
                    xl:[&:last-child:nth-child(odd)]:mx-0
                  "
                >
                  <ProductCard item={item} />
                </div>
              ))}
            </div>

            <div
              className="flex justify-center text-[#4E2FD2]
              font-gilroy font-semibold text-[18px]"
            >
              <button
                onClick={handleNext}
                className="py-[5px] px-[24px] border-[1px] rounded-[7px]"
              >
                Next: Choose your plan
              </button>
            </div>
          </div>
        )}
        {!isExpanded && <div className="h-px bg-[#1f1f1f] " />}
      </div>
    </div>
  );
}
