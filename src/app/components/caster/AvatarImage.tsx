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
    />
  );
}
