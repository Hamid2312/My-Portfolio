import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html as="div" center>
      <div className="flex flex-col items-center justify-center">
        <span className="canvas-loader" aria-label="Loading spinner" />

        <p className="mt-10 text-sm font-extrabold text-gray-200">
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
