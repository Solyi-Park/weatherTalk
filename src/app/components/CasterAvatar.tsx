import Image from "next/image";
import { useCaster } from "../context/CasterContext";
import { Caster } from "../service/openai";
import { useState } from "react";
import ModalPortal from "./ModalPortal";
import CasterOptions from "./CasterOptions";
import CasterModal from "./CasterModal";

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
  const [openModal, setOpenModal] = useState(false);
  const { caster, setCaster } = useCaster();

  const currentCasterIndex = CASTERS.findIndex((c) => c.name === caster);
  const nextCasterIndex =
    currentCasterIndex !== -1 && currentCasterIndex + 1 < CASTERS.length
      ? currentCasterIndex + 1
      : 0;

  const handleAvatar = () => setCaster(CASTERS[nextCasterIndex].name);

  const currentCaster = CASTERS.find((c) => c.name === caster);

  return (
    <section className="flex flex-col py-2">
      <div className="relative w-[400px] h-[400px]">
        {currentCaster && (
          <Image
            className="cursor-pointer"
            priority
            src={currentCaster.src}
            alt={`image of ${currentCaster.name} `}
            onClick={handleAvatar}
            fill
          />
        )}
      </div>
      <button
        className="mt-5 p-3 bg-white bg-opacity-50 rounded-md font-bold hover:bg-opacity-30"
        onClick={() => setOpenModal(true)}
      >
        {caster}
      </button>
      {openModal && (
        <ModalPortal>
          <CasterModal onClose={() => setOpenModal(false)}>
            <CasterOptions onClose={() => setOpenModal(false)} />
          </CasterModal>
        </ModalPortal>
      )}
    </section>
  );
}
