import Counter from "../ui/Counter";
import { useState } from "react";
import type { Product } from "../../types";
import { useBundleContext } from "../../context/BundleContext";

type ProductCardProps = {
  item: Product;
};

export default function ProductCard({ item }: ProductCardProps) {
  const { bundle, updateCameraQuantity } = useBundleContext();

  const [activeVariant, setActiveVariant] = useState(item.variants[0]);

  const currentItem = bundle.cameras.find(
    (cam) => cam.productId === item.id && cam.color === activeVariant.color,
  );

  const quantity = currentItem?.quantity ?? 0;

  return (
    <div
      className={`
        bg-white rounded-[10px] border-2 transition-all duration-300
        w-full
        flex flex-row xl:flex-col
        gap-3 xl:gap-4
        p-[10px] xl:p-[12px]
        min-h-[150px] xl:min-h-[331px]
        ${quantity > 0 ? "border-[#4E2FD2B2]" : "border-transparent"}
      `}
    >
      {/* TOP */}
      <div className="flex-none w-[70px] xl:w-auto">
        {item.discount ? (
          <div
            className="
              w-[65px] h-[19px]
              rounded-full
              bg-[#4E2FD2]
              text-white text-[12px]
              font-semibold font-gilroy
              flex items-center justify-center
            "
          >
            Save {item.discount}%
          </div>
        ) : (
          <div className="hidden xl:block h-[19px]" />
        )}

        <img
          src={activeVariant.image}
          alt={item.name}
          className="
            mx-auto object-contain transition-all duration-200
            w-[100px] h-[100px]
            xl:w-[150px] xl:h-[115px]
          "
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col xl:justify-between min-w-0">
        {/* TEXT */}
        <div>
          <h2
            className="
              text-[14px] xl:text-[16px]
              font-semibold
              font-gilroy
              text-[#1F1F1F]
              break-words
            "
          >
            {item.name}
          </h2>

          <p
            className="
              mt-1
              text-[12px]
              text-[#1F1F1F]/75
              font-medium
              break-words
            "
          >
            {item.description}{" "}
            <span className="underline text-[#0000EE] whitespace-nowrap">
              Learn More
            </span>
          </p>
        </div>

        {/* VARIANTS */}
        {item.variants.length > 1 && (
          <div className="flex gap-[6px] mt-2 xl:mt-3">
            {item.variants.map((variant) => (
              <div
                key={variant.color}
                onClick={() =>
                  variant.color !== activeVariant.color &&
                  setActiveVariant(variant)
                }
                className={`
                  flex items-center justify-center
                  gap-1
                  w-[63px]
                  py-[2px] px-[3px]
                  rounded-[2px]
                  border transition-all duration-200
                  ${
                    variant.color === activeVariant.color
                      ? "border-[#0AA288] bg-[#1DF0BB]/4"
                      : "border-[#CCCCCC] cursor-pointer"
                  }
                `}
              >
                <img
                  src={variant.image}
                  alt={variant.color}
                  className="w-5 xl:w-[28px] object-contain"
                />
                <span className="text-[10px]">{variant.color}</span>
              </div>
            ))}
          </div>
        )}

        {/* FOOTER */}
        <div className="flex items-end justify-between  xl:items-start xl:gap-2 mt-2 xl:mt-4">
          <Counter
            quantity={quantity}
            variant="card"
            onIncrease={() =>
              updateCameraQuantity(item.id, activeVariant, "increase")
            }
            onDecrease={() =>
              updateCameraQuantity(item.id, activeVariant, "decrease")
            }
          />

          <div className="flex flex-col xl:flex-row items-end gap-[2px]">
            {activeVariant.originalPrice && (
              <p className="text-[#D8392B] line-through translate-y-2 xl:translate-y-0 text-[13px] xl:text-[16px]">
                ${activeVariant.originalPrice}
              </p>
            )}

            <p className="text-[#575757] text-[13px] xl:text-[16px]">
              ${activeVariant.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
