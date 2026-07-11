import Counter from "../../ui/Counter";
import { useBundleContext } from "../../../context/BundleContext";
import sensors from "../../../data/Sensors.json";

export default function SensorReview() {
  const { bundle, selectSensor } = useBundleContext();

  const selectedSensors = bundle.sensors.flatMap((sensor) => {
    const product = sensors.find((item) => item.id === sensor.productId);

    if (!product) return [];

    const variant = product.variants.find((v) => v.color === sensor.color);

    if (!variant) return [];

    return [
      {
        product,
        variant,
        quantity: sensor.quantity,
      },
    ];
  });

  return (
    <div className="space-y-[8px] pt-[15px] border-t border-[#CED6DE]">
      {/* HEAD */}
      <h3 className="text-[#A8B2BD] text-[12px] tracking-[3%]">SENSORS</h3>

      {selectedSensors.map((item) => (
        <div
          key={`${item.product.id}-${item.variant.color}`}
          className="flex justify-between items-center gap-2 py-1"
        >
          {/* IMG AND NAME */}
          <div className="gap-2 sm:gap-[12px] items-center flex min-w-0 flex-1">
            <div
              className="w-[35px] h-[35px] sm:w-[41px] sm:h-[41px]
              flex items-center rounded-[5px] bg-white justify-center flex-shrink-0"
            >
              <img
                src={item.variant.image}
                alt={item.product.name}
                className="w-[28px] h-[28px] sm:w-[35px] sm:h-[35px] object-contain"
              />
            </div>

            <p className="text-[14px] font-gilroy font-medium">
              {item.product.name}
            </p>
          </div>

          {/* COUNTER AND PRICE */}
          <div className="flex gap-2 sm:gap-[16px] items-center justify-end flex-shrink-0">
            <Counter
              quantity={item.quantity}
              variant="review"
              onIncrease={() =>
                selectSensor(item.product.id, item.variant, "increase")
              }
              onDecrease={() =>
                selectSensor(item.product.id, item.variant, "decrease")
              }
            />

            <div
              className="flex flex-col xl:flex-row sm:gap-[10px]
              items-end sm:items-center font-gilroy
              font-medium text-[12px] sm:text-[16px]"
            >
              {item.variant.originalPrice && (
                <p className="text-[#6F7882] line-through">
                  ${(item.variant.originalPrice * item.quantity).toFixed(2)}
                </p>
              )}

              <p className="text-[#4E2FD2] font-semibold">
                ${(item.variant.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
