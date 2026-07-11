import FastShippingIcon from "../../../assets/icons/FastShippingIcon";
import { ShieldCheck, ShieldAlert, Wrench } from "lucide-react";

type ProtectionIconProps = {
  icon: string;
  className?: string;
};

export default function ProtectionIcon({
  icon,
  className = "",
}: ProtectionIconProps) {
  switch (icon) {
    case "shield-check":
      return <ShieldCheck className={className} strokeWidth={1.8} />;

    case "fast-shipping":
      return <FastShippingIcon className={className} />;

    case "wrench":
      return <Wrench className={className} strokeWidth={1.8} />;

    case "shield-alert":
      return <ShieldAlert className={className} strokeWidth={1.8} />;

    case "sd-card":
      return (
        <img
          src="https://res.cloudinary.com/ddzk9wuye/image/upload/v1783705812/wyze-microsd-card-wyze-labs-inc-814588_rxbfl5.webp"
          alt="SD Card"
          className={className}
        />
      );

    default:
      return null;
  }
}
