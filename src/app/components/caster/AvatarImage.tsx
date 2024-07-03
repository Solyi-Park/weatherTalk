import Image from "next/image";

type Props = {
  name: string;
  src: string;
  onClick: () => void;
};
export default function AvatarImage({ name, src, onClick }: Props) {
  return (
    <Image
      priority
      src={src}
      alt={`image of ${name} `}
      fill
      onClick={onClick}
      // sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px"
    />
  );
}
