import { ComDescription } from "../../../../../components";

interface HeroProps {
  title: string;
  description?: string;
  imageUrl: string;
}

export const HeroComp = ({ imageUrl, title, description }: HeroProps) => {
  return (
    <div className="h-[90vh] relative flex items-center justify-center px-8">
      <div
        className="absolute inset-1 left-0 top-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),url(${imageUrl})`,
        }}
      ></div>
      <div className="z-10 text-white text-center">
        <h1 className="bebasNeue text-3xl font-bold uppercase">{title}</h1>
        {description && <ComDescription contenido={description} />}
      </div>
    </div>
  );
};
