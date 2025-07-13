import { TextPrimary } from "../components";

export const Error404Page = () => {
  return (
    <div className="bgGradient">
      <div className="pt-16 min-h-screen mx-auto max-w-[80rem] z-10 relative pb-10 flex items-center justify-center">
        <div className="grid grid-cols-1 w-full text-center">
          <TextPrimary label="404" className="text-8xl font-bold" />
          <h2 className="text-xl font-bold">UH OH! You're lost.</h2>
          <p className="text-sm">
            The page you are looking for does not exist. How you got here is a
            mystery.
          </p>
        </div>
      </div>
    </div>
  );
};
