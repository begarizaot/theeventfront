interface ComDescriptionProps {
  contenido: string;
}
export const ComDescription = ({ contenido }: ComDescriptionProps) => {
  const contenidoConSaltos = `${contenido}`?.replace(/\n/g, '<br />');
  return <p dangerouslySetInnerHTML={{ __html: contenidoConSaltos }} />;
};
