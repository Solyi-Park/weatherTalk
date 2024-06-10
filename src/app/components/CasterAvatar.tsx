import Image from "next/image";
import { useCaster } from "../context/CasterContext";
import { Caster } from "../service/openai";

type CasterDetail = {
  name: Caster;
  src: string;
};

export const CASTERS: CasterDetail[] = [
  { name: "할머니", src: "/images/grandma.webp" },
  { name: "이장님", src: "/images/viliageChief.webp" },
  { name: "엄마", src: "/images/mom.webp" },
  { name: "여자캐스터", src: "/images/femaleCaster.webp" },
  { name: "남자캐스터", src: "/images/maleCaster.webp" },
  { name: "KPOP매니아", src: "/images/kpopMania.webp" },
  { name: "먹방유튜버", src: "/images/foodVlogger.webp" },
];

export default function CasterAvatar() {
  const { caster, setCaster } = useCaster();

  const currentCasterIndex = CASTERS.findIndex((c) => c.name === caster);
  const nextCasterIndex =
    currentCasterIndex !== -1 && currentCasterIndex + 1 < CASTERS.length
      ? currentCasterIndex + 1
      : 0;

  const handleAvatar = () => setCaster(CASTERS[nextCasterIndex].name);

  const currentCaster = CASTERS.find((c) => c.name === caster);

  return (
    <div className="flex items-center justify-center ">
      {currentCaster && (
        <Image
          className="cursor-pointer"
          priority
          src={currentCaster.src}
          alt={`image of ${currentCaster.name} `}
          width={500}
          height={500}
          onClick={handleAvatar}
        />
      )}
    </div>
  );
}
