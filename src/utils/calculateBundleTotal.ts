import type { BundleState } from "../types";

import products from "../data/products.json";
import sensors from "../data/Sensors.json";
import protections from "../data/Protection.json";

export function calculateBundleSummary(bundle: BundleState) {
  let subtotal = 0;
  let total = 0;

  // Cameras
  bundle.cameras.forEach((camera) => {
    const product = products.find((p) => p.id === camera.productId);

    const variant = product?.variants.find((v) => v.color === camera.color);

    if (!variant) return;

    const originalPrice = variant.originalPrice ?? variant.price;

    subtotal += originalPrice * camera.quantity;
    total += variant.price * camera.quantity;
  });

  // Sensors
  bundle.sensors.forEach((sensor) => {
    const product = sensors.find((p) => p.id === sensor.productId);

    const variant = product?.variants.find((v) => v.color === sensor.color);

    if (!variant) return;

    const originalPrice = variant.originalPrice ?? variant.price;

    subtotal += originalPrice * sensor.quantity;
    total += variant.price * sensor.quantity;
  });

  // Protections & Accessories
  bundle.protections.forEach((protection) => {
    const product = protections.find((p) => p.id === protection.productId);

    if (!product) return;

    const variant = product.variants[0];

    const originalPrice = variant.originalPrice ?? variant.price;

    subtotal += originalPrice * protection.quantity;
    total += variant.price * protection.quantity;
  });

  // Plan
  if (bundle.plan === "unLimited") {
    subtotal += 9.99;
    total += 9.99;
  }

  const discount = subtotal - total;

  return {
    subtotal,
    discount,
    total,
  };
}
