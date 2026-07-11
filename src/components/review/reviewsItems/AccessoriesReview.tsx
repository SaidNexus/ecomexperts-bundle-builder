import Counter from "../../ui/Counter";
import { useBundleContext } from "../../../context/BundleContext";
import protections from "../../../data/Protection.json";

export default function AccessoriesReview() {
  const { bundle, updateProtectionQuantity } = useBundleContext();

  const currentItem = bundle.protections.find((item) => item.productId === 3);

  if (!currentItem) return null;

  const product = protections.find((item) => item.id === 3);

  if (!product) return null;

  const variant = product.variants[0];

  return (
    <div className="space-y-[8px] pt-[15px] border-t border-[#CED6DE]">
      {/* TITLE */}
      <h3 className="text-[#A8B2BD] text-[12px] tracking-[3%]">ACCESSORIES</h3>

      <div className="flex justify-between items-center gap-2 py-1">
        {/* IMAGE + NAME */}
        <div className="flex gap-2 sm:gap-[12px] items-center min-w-0 flex-1">
          <div
            className="w-[35px] h-[35px] sm:w-[41px] sm:h-[41px] rounded-[5px]
            bg-white flex items-center justify-center flex-shrink-0"
          >
            <img
              src="https://res.cloudinary.com/ddzk9wuye/image/upload/v1783705812/wyze-microsd-card-wyze-labs-inc-814588_rxbfl5.webp"
              alt={product.name}
              className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] object-contain"
            />
          </div>

          <h2 className="text-[14px] font-gilroy font-medium ">
            {product.name}
          </h2>
        </div>

        {/* COUNTER + PRICE */}
        <div className="flex gap-2 sm:gap-[16px] items-center justify-end flex-shrink-0">
          <Counter
            quantity={currentItem.quantity}
            variant="review"
            onIncrease={() => updateProtectionQuantity(product.id, "increase")}
            onDecrease={() => updateProtectionQuantity(product.id, "decrease")}
          />

          <div className="flex flex-col sm:flex-row sm:gap-[10px] items-end sm:items-center font-gilroy font-medium text-[12px] sm:text-[16px]">
            {variant.originalPrice && (
              <p className="text-[#6F7882] line-through">
                ${(variant.originalPrice * currentItem.quantity).toFixed(2)}
              </p>
            )}

            <p className="text-[#4E2FD2] font-semibold">
              ${(variant.price * currentItem.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
