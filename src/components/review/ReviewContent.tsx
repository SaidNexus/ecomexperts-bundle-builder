import ReviewHeader from "./ReviewHeader";
import ReviewSection from "./ReviewSection";
import ReviewSummary from "./ReviewSummary";

export default function ReviewContent() {
  return (
    <div
      className="bg-[#EDF4FF] flex flex-col md:flex-col
       xl:flex-row gap-6 md:gap-[52px] xl:gap-8
         rounded-[10px] p-4 md:py-[20px] md:px-[30px]
         xl:max-w-[1213px] md:min-w-[400px] 
       xl:pt-[20px] xl:pb-[31px] xl:pl-[30px] xl:pr-[20px] mb-[60px]"
    >
      <div className="flex-1 w-full min-w-0">
        <ReviewHeader />
        <ReviewSection />
      </div>

      <div className="flex-1 w-full min-w-0">
        <ReviewSummary />
      </div>
    </div>
  );
}
