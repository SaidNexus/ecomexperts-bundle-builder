import BundleBuilder from "./components/bundle/BundleBuilder";
import ReviewPanel from "./components/review/ReviewPanel";
import { BundleProvider } from "./context/BundleContext";

function App() {
  return (
    <BundleProvider>
      <main
        className="min-h-screen container max-w-[1213px] gap-6 xl:gap-[33.58px]
      flex md:flex-row flex-col xl:flex-col mx-auto p-4 md:p-6"
      >
        <div className="xl:w-[815px] xl:flex-shrink-0 w-full">
          <BundleBuilder />
        </div>
        <div className="flex-1 w-full xl:sticky xl:top-6 h-fit">
          <ReviewPanel />
        </div>
      </main>
    </BundleProvider>
  );
}

export default App;
