export default function ReviewPanelEmpty() {
  return (
    <div
      className="bg-[#EDF4FF] flex flex-col items-center justify-center
       rounded-[10px] p-8 md:py-[40px] md:px-[30px]
       xl:max-w-[1213px] md:min-w-[400px] mb-[60px] text-center"
    >
      <h2 className="text-[#1F1F1F] font-gilroy font-semibold text-[20px] md:text-[24px]">
        Your security system
      </h2>
      <p className="text-[#1f1f1f]/75 font-gilroy font-medium text-[14px] md:text-[16px] mt-2 max-w-[300px]">
        Start building your personalized protection system by selecting cameras,
        sensors, and a plan.
      </p>
    </div>
  );
}
