import CameraStep from "../steps/cameraStep/CameraStep";
import PlanStep from "../steps/planStepSection/PlanStep";
import ProtectionStep from "../steps/protection/ProtectionStep";
import SensorsStep from "../steps/SensorsStep";
import { useRef, useState } from "react";

export default function BundleBuilder() {
  const [expandedStep, setExpandedStep] = useState(1);
  const planRef = useRef<HTMLDivElement>(null);
  const sensorsRef = useRef<HTMLDivElement>(null);
  const protectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="flex flex-col xl:min-w-[1213px] w-full">
      <CameraStep
        expandedStep={expandedStep}
        setExpandedStep={setExpandedStep}
        nextStepRef={planRef}
      />

      <div ref={planRef}>
        <PlanStep
          expandedStep={expandedStep}
          setExpandedStep={setExpandedStep}
          nextStepRef={sensorsRef}
        />
      </div>

      <div ref={sensorsRef}>
        <SensorsStep
          expandedStep={expandedStep}
          setExpandedStep={setExpandedStep}
          nextStepRef={protectionRef}
        />
      </div>

      <div ref={protectionRef}>
        <ProtectionStep
          expandedStep={expandedStep}
          setExpandedStep={setExpandedStep}
        />
      </div>
    </section>
  );
}
