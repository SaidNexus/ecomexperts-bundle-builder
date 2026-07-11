import { useBundleContext } from "../../context/BundleContext";
import ReviewContent from "./ReviewContent";
import ReviewPanelEmpty from "./ReviewPanelEmpty";

export default function ReviewPanel() {
  const { bundle } = useBundleContext();

  const hasSelections =
    bundle.cameras.length > 0 ||
    bundle.sensors.length > 0 ||
    bundle.protections.length > 0 ||
    bundle.plan !== null;

  return hasSelections ? <ReviewContent /> : <ReviewPanelEmpty />;
}
