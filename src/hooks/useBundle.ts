import { useState } from "react";
import type { BundleState, ProductVariant } from "../types";

export function useBundle() {
  const initialBundle: BundleState = {
    cameras: [],
    sensors: [],
    protections: [],
    plan: null,
  };

  const [bundle, setBundle] = useState<BundleState>(() => {
    const savedBundle = localStorage.getItem("bundle");

    if (!savedBundle) {
      return initialBundle;
    }

    return JSON.parse(savedBundle);
  });

  const saveBundle = () => {
    localStorage.setItem("bundle", JSON.stringify(bundle));
  };

  //updataCameraQuantity
  const updateCameraQuantity = (
    productId: number,
    variant: ProductVariant,
    mode: string,
  ) => {
    if (mode === "increase") {
      setBundle((prev) => {
        const existingItem = prev.cameras.find(
          (item) =>
            item.productId === productId && item.color === variant.color,
        );

        if (existingItem) {
          return {
            ...prev,
            cameras: prev.cameras.map((item) =>
              item.productId === productId && item.color === variant.color
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          };
        }

        return {
          ...prev,
          cameras: [
            ...prev.cameras,
            {
              productId,
              color: variant.color,
              quantity: 1,
            },
          ],
        };
      });
    } else {
      setBundle((prev) => {
        const existingItem = prev.cameras.find(
          (item) =>
            item.productId === productId && item.color === variant.color,
        );

        if (!existingItem) {
          return prev;
        }

        if (existingItem.quantity === 1) {
          return {
            ...prev,
            cameras: prev.cameras.filter(
              (item) =>
                !(item.productId === productId && item.color === variant.color),
            ),
          };
        }

        return {
          ...prev,
          cameras: prev.cameras.map((item) =>
            item.productId === productId && item.color === variant.color
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ),
        };
      });
    }
  };
  //updataCameraQuantity

  // SelectPlan
  const selectPlan = (plan: string) => {
    setBundle((prev) => ({
      ...prev,
      plan: plan,
    }));
  };
  // SelectPlan

  // SelectSensor
  const selectSensor = (
    productId: number,
    variant: ProductVariant,
    mode: "increase" | "decrease",
  ) => {
    setBundle((prev) => {
      const existingItem = prev.sensors.find(
        (item) => item.productId === productId && item.color === variant.color,
      );

      if (mode === "increase") {
        if (existingItem) {
          return {
            ...prev,
            sensors: prev.sensors.map((item) =>
              item.productId === productId && item.color === variant.color
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item,
            ),
          };
        }

        return {
          ...prev,
          sensors: [
            ...prev.sensors,
            {
              productId,
              color: variant.color,
              quantity: 1,
            },
          ],
        };
      }

      if (!existingItem) {
        return prev;
      }

      if (existingItem.quantity === 1) {
        return {
          ...prev,
          sensors: prev.sensors.filter(
            (item) =>
              !(item.productId === productId && item.color === variant.color),
          ),
        };
      }

      return {
        ...prev,
        sensors: prev.sensors.map((item) =>
          item.productId === productId && item.color === variant.color
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        ),
      };
    });
  };
  // SelectSensor

  // CheckboxProtection
  const toggleProtection = (productId: number) => {
    setBundle((prev) => {
      const exists = prev.protections.some(
        (item) => item.productId === productId,
      );

      if (exists) {
        return {
          ...prev,
          protections: prev.protections.filter(
            (item) => item.productId !== productId,
          ),
        };
      }

      return {
        ...prev,
        protections: [
          ...prev.protections,
          {
            productId,
            quantity: 1,
          },
        ],
      };
    });
  };
  // CheckboxProtection

  // ProtectionQuantity
  const updateProtectionQuantity = (
    productId: number,
    mode: "increase" | "decrease",
  ) => {
    setBundle((prev) => {
      const existingItem = prev.protections.find(
        (item) => item.productId === productId,
      );

      if (mode === "increase") {
        if (existingItem) {
          return {
            ...prev,
            protections: prev.protections.map((item) =>
              item.productId === productId
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item,
            ),
          };
        }

        return {
          ...prev,
          protections: [
            ...prev.protections,
            {
              productId,
              quantity: 1,
            },
          ],
        };
      }

      if (!existingItem) {
        return prev;
      }

      if (existingItem.quantity === 1) {
        return {
          ...prev,
          protections: prev.protections.filter(
            (item) => item.productId !== productId,
          ),
        };
      }

      return {
        ...prev,
        protections: prev.protections.map((item) =>
          item.productId === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        ),
      };
    });
  };
  // ProtectionQuantity

  return {
    updateProtectionQuantity,
    bundle,
    selectPlan,
    updateCameraQuantity,
    selectSensor,
    toggleProtection,
    saveBundle,
  };
}
