import type { Protection } from "../../types";
import Counter from "../ui/Counter";
import { useBundleContext } from "../../context/BundleContext";
import { ShieldCheck, Wrench, ShieldAlert } from "lucide-react";
import FastShippingIcon from "../../assets/icons/FastShippingIcon";

type ProtectionCardProps = {
  item: Protection;
  toggleProtection: (productId: number) => void;
};

export default function ProtectionCard({
  item,
  toggleProtection,
}: ProtectionCardProps) {
  const variant = item.variants[0];

  const { bundle, updateProtectionQuantity } = useBundleContext();

  const currentItem = bundle.protections.find(
    (protection) => protection.productId === item.id,
  );

  const quantity = currentItem?.quantity ?? 0;

  const getIcon = () => {
    switch (item.icon) {
      case "shield-check":
        return (
          <ShieldCheck
            className="w-8 h-8 md:w-10 md:h-10 text-[#4E2FD2]"
            strokeWidth={1.5}
          />
        );

      case "fast-shipping":
        return (
          <FastShippingIcon className="w-8 h-8 md:w-10 md:h-10 text-[#0AA288]" />
        );

      case "wrench":
        return (
          <Wrench
            className="w-8 h-8 md:w-10 md:h-10 text-gray-700"
            strokeWidth={1.5}
          />
        );

      case "shield-alert":
        return (
          <ShieldAlert
            className="w-8 h-8 md:w-10 md:h-10 text-red-500"
            strokeWidth={1.5}
          />
        );

      default:
        return (
          <img
            src="https://res.cloudinary.com/ddzk9wuye/image/upload/v1783705812/wyze-microsd-card-wyze-labs-inc-814588_rxbfl5.webp"
            alt={item.name}
            className="w-10 h-10 md:w-14 md:h-14 object-contain"
          />
        );
    }
  };

  return (
    <div
      className="
        bg-white rounded-[10px]
        border-2 border-transparent
        transition-all duration-300

        w-full
        h-full

        flex flex-col
        p-4
      "
    >
      <div className="flex items-start gap-4 flex-1">
        {/* ICON */}
        <div
          className="
            flex-shrink-0
            w-10 h-10
            md:w-12 md:h-12
            flex items-center justify-center
          "
        >
          {getIcon()}
        </div>

        {/* CONTENT */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Header */}
          <div className="flex justify-between gap-3 items-start">
            <h2
              className="
                text-[13px]
                md:text-[14px]
                font-semibold
                font-gilroy
                break-words
              "
            >
              {item.name}
            </h2>

            {item.type === "checkbox" && (
              <input
                type="checkbox"
                checked={bundle.protections.some(
                  (protection) => protection.productId === item.id,
                )}
                onChange={() => toggleProtection(item.id)}
                className="mt-1 shrink-0"
              />
            )}
          </div>

          {/* Description */}
          <p
            className="
              mt-2
              text-[12px]
              leading-4
              text-gray-600
              break-words
            "
          >
            {item.description}
          </p>

          {/* Price */}
          <div className="mt-3">
            <span className="font-semibold text-[#575757]">
              {variant.price === 0 ? "FREE" : `$${variant.price.toFixed(2)}`}
            </span>
          </div>

          {/* Counter */}
          {item.type !== "checkbox" && (
            <div className="flex justify-end mt-auto pt-3">
              <Counter
                quantity={quantity}
                onIncrease={() => updateProtectionQuantity(item.id, "increase")}
                onDecrease={() => updateProtectionQuantity(item.id, "decrease")}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
