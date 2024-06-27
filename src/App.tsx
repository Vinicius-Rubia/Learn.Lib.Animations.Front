import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      {/* <AuroraHero /> */}
      {/* <ShuffleHero /> */}
      {/* <TextParallaxContent /> */}
      {/* <FloatingPhone /> */}
      {/* <BouncyCardsFeatures /> */}
      {/* <ParticleRing /> */}
      {/* <EncryptButton /> */}
      {/* <DrawOutlineButton /> */}

      {/* <div className="bg-neutral-800">
        <div className="flex h-48 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll down
          </span>
        </div>
        <HorizontalScrollCarousel />
        <div className="flex h-48 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll up
          </span>
        </div>
      </div> */}

      {/* <Terminal /> */}
      {/* <GoogleGeminiEffectDemo  /> */}
    </ThemeProvider>
  );
}

export default App;
