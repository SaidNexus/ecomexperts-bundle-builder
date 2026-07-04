import BundleBuilder from "./components/bundle/BundleBuilder";
import ReviewPanel from "./components/review/ReviewPanel";

function App() {
  return (
    <main className="min-h-screen container max-w-[1213px] flex lg:flex-col sm:flex-row flex-col mx-auto p-4">
      <BundleBuilder />

      <ReviewPanel />
    </main>
  );
}

export default App;
