import { createContext, useContext } from "react";
import { useBundle } from "../hooks/useBundle";

const BundleContext = createContext<ReturnType<typeof useBundle> | null>(null);

export function BundleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const bundle = useBundle();

  return (
    <BundleContext.Provider value={bundle}>
      {children}
    </BundleContext.Provider>
  );
}

export function useBundleContext() {
  const context = useContext(BundleContext);

  if (!context) {
    throw new Error("useBundleContext must be used inside BundleProvider");
  }

  return context;
}