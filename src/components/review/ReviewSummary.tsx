import SatisfactionBadge from "../../assets/Badges/SatisfactionBadge.svg";
import { calculateBundleSummary } from "../../utils/calculateBundleTotal";
import { useBundleContext } from "../../context/BundleContext";

export default function ReviewSummary() {
  const { bundle, saveBundle } = useBundleContext();
  const summary = calculateBundleSummary(bundle);
  return (
    <div className="w-full">
      <div className="flex xl:flex-col justify-between gap-[16px]">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[25px] justify-center items-center text-center sm:text-left">
          <img
            src={SatisfactionBadge}
            alt="100% satisfaction guarantee badge"
            className="xl:w-16 xl:h-16 w-[78px] h-[78px] sm:w-auto sm:h-auto"
          />
          <div className="flex flex-col hidden xl:block gap-2 sm:gap-[16px]">
            <h1 className="font-semibold font-gilroy text-[16px] sm:text-[18px]">
              30-day hassle-free returns
            </h1>
            <p className="font-regular font-gilroy text-[14px]">
              If you're not totally in love with the product, we will refund you
              100%.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row md:justify-between justify-center items-center sm:items-end gap-4 mt-4">
          <h1
            className="bg-[#4E2FD2] xl:p-[8px] px-1.5 rounded-[3px] font-gilroy font-medium
           text-white w-fit text-nowrap text-[14px] text-[12px] xl:text-[16px]"
          >
            as low as $19.19/mo
          </h1>

          <div className="flex justify-end gap-2 sm:gap-[8px]">
            <p className="text-[#6F7882] font-gilroy font-medium md:text-[18px] xl:text-[22px] line-through">
              ${summary.subtotal.toFixed(2)}
            </p>
            <h1 className="text-[19px] md:text-[24px] xl:text-[28px] text-[#4E2FD2] font-gilroy font-bold leading-none">
              ${summary.total.toFixed(2)}
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-[4px]">
        <div className="space-y-[4px]">
          <p className="text-[12px] xl:text-[14px] font-gilroy font-semibold text-center text-[#0AA288]">
            Congrats! You're saving $50.92 on your security bundle!
          </p>
          <button
            className="bg-[#4E2FD2] font-[700] text-[17px]
           text-white py-[13px] w-full rounded-[4px]"
          >
            Checkout
          </button>
          <div className="flex justify-center w-full">
            <button onClick={saveBundle} className="underline  text-[#484848]">
              Save my system for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
