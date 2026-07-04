import CameraIcon from "../../assets/icons/CameraIcon";
import ProductCard from "../shared/ProductCard";
import StepHeader from "../ui/StepHeader";

export default function CameraStep() {
  return (
    <div className="bg-step-bg rounded-[10px] py-[15px] flex flex-col gap-[5px] ">
      <div className="px-[15px] py-[5px] flex flex-col gap-[15px]">
        <StepHeader
          step={1}
          isExpanded={true}
          title="Choose your cameras"
          icon={<CameraIcon className="w-[30px] text-[#6F7882] h-[31px]" />}
        />

        {/* Products */}
        <div className="flex gap-[15px] overflow-x-auto">
          {[1, 2, 3, 4, 5].map((item) => (
            <ProductCard key={item} />
          ))}
        </div>

        <div
          className="flex justify-center text-[#4E2FD2]
         font-gilroy font-semibold text-[18px]"
        >
          <button className="py-[5px] px-[24px] border-[1px] rounded-[7px]">
            Next: Choose your sensors
          </button>
        </div>
      </div>
    </div>
  );
}
