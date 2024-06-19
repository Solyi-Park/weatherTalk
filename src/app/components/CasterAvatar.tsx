"use client";
import Image from "next/image";
import { useState } from "react";
import ModalPortal from "./ModalPortal";
import CasterOptions from "./CasterOptions";
import CasterModal from "./CasterModal";
import useAvatar from "../hooks/caster";

export default function CasterAvatar() {
  const [openModal, setOpenModal] = useState(false);
  const { caster, currentCaster, selectRandomCaster } = useAvatar();

  return (
    <section className="flex flex-col py-2">
      {currentCaster && (
        <div className="relative w-[400px] h-[400px] hover:cursor-pointer">
          <Image
            priority
            src={currentCaster.src}
            alt={`image of ${currentCaster.name} `}
            fill
            onClick={() => selectRandomCaster}
          />
        </div>
      )}
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
