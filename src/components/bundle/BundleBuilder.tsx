import CameraStep from "../steps/CameraStep";
import PlanStep from "../steps/PlanStep";
import ProtectionStep from "../steps/ProtectionStep";
import SensorsStep from "../steps/SensorsStep";

export default function BundleBuilder() {
  return (
    <section className="flex flex-col gap-[15px]">
      <CameraStep />

      <PlanStep />

      <SensorsStep />

      <ProtectionStep />
    </section>
  );
}
