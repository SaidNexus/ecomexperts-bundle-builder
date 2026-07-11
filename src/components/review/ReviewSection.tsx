import CameraReview from "./reviewsItems/CameraReview";
import SensorReview from "./reviewsItems/SensorReview";
import AccessoriesReview from "./reviewsItems/AccessoriesReview";
import PlanReview from "./reviewsItems/PlanReview";
import { useBundleContext } from "../../context/BundleContext";
import protections from "../../data/Protection.json";

export default function ReviewSection() {
  const { bundle } = useBundleContext();

  const hasPlanExtras = bundle.protections.some((protection) =>
    protections.some(
      (item) =>
        item.id === protection.productId &&
        item.reviewCategory === "plan",
    ),
  );

  const hasAccessories = bundle.protections.some((protection) =>
    protections.some(
      (item) =>
        item.id === protection.productId &&
        item.reviewCategory === "accessories",
    ),
  );

  return (
    <div className="space-y-[10px]">
      {bundle.cameras.length > 0 && <CameraReview />}

      {bundle.sensors.length > 0 && <SensorReview />}

      {hasAccessories && <AccessoriesReview />}

      {(bundle.plan !== null || hasPlanExtras) && <PlanReview />}
    </div>
  );
}