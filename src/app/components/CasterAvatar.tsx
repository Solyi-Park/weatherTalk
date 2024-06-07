import Image from "next/image";
import { useCaster } from "../context/CasterContext";
import { Caster } from "../service/openai";

type CasterDetail = {
  name: Caster;
  src: string;
};

const CASTERS: CasterDetail[] = [
  { name: "할머니", src: "/images/GrandMother.png" },
  { name: "이장님", src: "/images/VillageChief.png" },
  { name: "엄마", src: "/images/Mother.png" },
  { name: "여자캐스터", src: "/images/FemaleCaster.png" },
  { name: "남자캐스터", src: "/images/MaleCaster.png" },
  { name: "KPOP매니아", src: "/images/KpopMania.png" },
  { name: "먹방유튜버", src: "/images/FoodVlogger.png" },
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
    <>
      {currentCaster && (
        <Image
          src={currentCaster.src}
          alt={`image of ${currentCaster.name} `}
          width={350}
          height={350}
          onClick={handleAvatar}
        />
      )}
    </>
  );
}
