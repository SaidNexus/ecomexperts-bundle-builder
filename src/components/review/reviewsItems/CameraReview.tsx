import Counter from "../../ui/Counter";
import { useBundleContext } from "../../../context/BundleContext";
import products from "../../../data/products.json";

export default function CameraReview() {
  const { bundle, updateCameraQuantity } = useBundleContext();
  const selectedCameras = bundle.cameras.map((camera) => {
    const product = products.find((item) => item.id === camera.productId);

    const variant = product?.variants.find((v) => v.color === camera.color);

    return {
      product,
      variant,
      quantity: camera.quantity,
    };
  });
  return (
    <div className="space-y-[8px] pt-[15px] border-t border-[#CED6DE] ">
      {/* Title */}
      <h1 className="text-[#A8B2BD] text-[12px] tracking-[3%]">CAMERA</h1>
      {/* Title */}

      {selectedCameras.map((item) => (
        <div
          className="flex justify-between items-center gap-2 py-1"
          key={`${item.product?.id}-${item.variant?.color}-${item.quantity}`}
        >
          {/* IMG AND NAME */}
          <div className="gap-2 sm:gap-[12px] items-center flex min-w-0 flex-1">
            <div
              className="w-[35px] h-[35px] sm:w-[41px] sm:h-[41px] flex items-center
           rounded-[5px] bg-white justify-center flex-shrink-0"
            >
              <img
                src={item.variant?.image}
                alt="cam"
                className="bg-white object-contain w-[28px] h-[28px] sm:w-[35px] sm:h-[35px]"
              />
            </div>

            <h1 className="text-[14px]font-gilroy font-medium ">
              {item.product?.name}
            </h1>
          </div>
          {/* COUNTER AND PRICE */}
          <div className="flex gap-2 sm:gap-[16px] items-center justify-end flex-shrink-0">
            <Counter
              quantity={item.quantity}
              variant="review"
              onIncrease={() => {
                updateCameraQuantity(
                  item.product?.id,
                  item.variant,
                  "increase",
                );
              }}
              onDecrease={() => {
                updateCameraQuantity(
                  item.product?.id,
                  item.variant,
                  "decrease",
                );
              }}
            />

            <div
              className="flex flex-col xl:flex-row xl:gap-[10px] items-end sm:items-center 
            font-gilroy font-medium text-[12px] sm:text-[16px]"
            >
              {item.variant?.originalPrice && (
                <p className="line-through text-[#6F7882]">
                  ${(item.variant.originalPrice * item.quantity).toFixed(2)}
                </p>
              )}
              <p
                className="text-[#4E2FD2] font-semibold
              md:-translate-y-1 xl:translate-y-0"
              >
                ${(item.variant?.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
