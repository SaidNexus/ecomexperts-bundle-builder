import CameraReview from "./reviewsItems/CameraReview";
import SensorReview from "./reviewsItems/SensorReview";
import PlanReview from "./reviewsItems/PlanReview";
import AccessoriesReview from "./reviewsItems/AccessoriesReview";
import { useBundleContext } from "../../context/BundleContext";

export default function ReviewSection() {
  const { bundle } = useBundleContext();

  return (
    <div className="space-y-4">
      {bundle.cameras.length > 0 && <CameraReview />}

      {bundle.sensors.length > 0 && <SensorReview />}

      {bundle.protections.length > 0 && <AccessoriesReview />}

      {bundle.plan && <PlanReview />}
    </div>
  );
}
