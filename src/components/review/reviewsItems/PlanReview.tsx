import WyzeGuaranteeIcon from "../../../assets/icons/WyzeGuaranteeIcon";
import { useBundleContext } from "../../../context/BundleContext";
import protections from "../../../data/Protection.json";
import ProtectionIcon from "../../steps/protection/ProtectionIcon";

export default function PlanReview() {
  const { bundle } = useBundleContext();

  const selectedExtras = bundle.protections
    .map((protection) => {
      const product = protections.find(
        (item) =>
          item.id === protection.productId && item.reviewCategory === "plan",
      );

      if (!product) return null;

      return {
        product,
        quantity: protection.quantity,
      };
    })
    .filter(Boolean);

  return (
    <div className="space-y-[8px] pt-[15px] border-t border-[#CED6DE]">
      {/* TITLE */}
      <h1 className="text-[#A8B2BD] text-[12px] tracking-[3%]">PLAN</h1>

      {/* Selected Plan */}
      <div className="flex justify-between items-center py-4">
        {bundle.plan === "noPlan" ? (
          <h2 className="font-gilroy font-medium text-[18px]">No Plan</h2>
        ) : (
          <div className="flex items-center gap-3 w-full">
            {/* UnlimitedPlanIcon */}
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-1 ">
                <WyzeGuaranteeIcon className="md:w-10 md:h-10 w-5 h-5 translate-0.5 md:translate-1" />
                <div className="xl:text-[20px] md:text-[16px] font-gilroy font-bold">
                  <span>Cam</span>{" "}
                  <span className="text-[#4E2FD2] ">Unlimited</span>
                </div>
              </div>

              <div
                className="flex flex-col xl:flex-row xl:gap-[10px] items-end sm:items-center 
            font-gilroy font-medium text-[12px] sm:text-[16px]"
              >
                <p className="line-through text-[#6F7882]">$12.99/mo</p>

                <p
                  className="text-[#4E2FD2] font-semibold
              md:-translate-y-1 xl:translate-y-0"
                >
                  $9.99/mo
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Plan Extras */}
      {selectedExtras.map((item) => (
        <div
          key={item.product.id}
          className="flex justify-between items-center border-t border-[#CED6DE] py-4 gap-2"
        >
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="bg-white p-1 rounded-md flex-shrink-0">
              <ProtectionIcon
                icon={item.product.icon}
                className="w-8 h-8 xl:w-10 xl:h-10 text-[#4E2FD2]"
              />
            </div>

            <h2 className="font-gilroy font-medium text-[#0B0D10] truncate text-[14px] ">
              {item.product.name}
            </h2>
          </div>

          <span className="font-gilroy font-semibold text-[#4E2FD2] flex-shrink-0 text-[14px] sm:text-[16px]">
            {item.product.variants[0].price === 0
              ? "FREE"
              : `$${item.product.variants[0].price.toFixed(2)}`}
          </span>
        </div>
      ))}
    </div>
  );
}
