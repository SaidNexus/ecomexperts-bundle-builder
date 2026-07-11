import type { Sensor } from "../../types";
import Counter from "../ui/Counter";
import { useBundleContext } from "../../context/BundleContext";

type SensorCardProps = {
  data: Sensor;
};

export default function SensorsCard({ data }: SensorCardProps) {
  const { bundle, selectSensor } = useBundleContext();
  const activeVariant = data.variants[0];
  const currentItem = bundle.sensors.find(
    (sen) => sen.productId === data.id && sen.color === activeVariant.color,
  );
  const quantity = currentItem?.quantity ?? 0;

  return (
    <div className="py-[6px] px-5 bg-white rounded-[10px] w-full h-full flex flex-col border-[2px] border-transparent transition-all duration-300">
      <div className="flex gap-4 items-center mb-4">
        <img
          src={activeVariant.image}
          alt={data.name}
          className="w-[60px] h-[100px] object-contain flex-shrink-0"
        />

        <div className="flex flex-col gap-2">
          <h1 className="text-[14px] font-gilroy font-semibold break-words">{data.name}</h1>
          <h2 className="text-gray-500 font-gilroy font-semibold">
            ${activeVariant.price}
          </h2>
        </div>
      </div>
      <div className="flex justify-end mt-auto">
        <Counter
          variant="card"
          quantity={quantity}
          onIncrease={() => {
            selectSensor(data.id, activeVariant, "increase");
          }}
          onDecrease={() => {
            selectSensor(data.id, activeVariant, "decrease");
          }}
        />
      </div>
    </div>
  );
}
