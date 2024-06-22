"use client";
import Image from "next/image";
import { useState } from "react";
import CasterOptions from "./CasterOptions";
import useAvatar from "@/app/hooks/avatar";
import ModalPortal from "../ModalPortal";
import CasterModal from "./CasterModal";
import AvatarImage from "./AvatarImage";

export default function CasterAvatar() {
  const [openModal, setOpenModal] = useState(false);
  const { caster, selectRandomCaster } = useAvatar();

  return (
    <section className="flex flex-col items-center py-2 w-[400px] h-full">
      <div className="relative w-[350px] h-[350px] hover:cursor-pointer">
        {caster && (
          <AvatarImage
            name={caster.name}
            src={caster.path}
            onClick={selectRandomCaster}
          />
        )}
      </div>
      <button
        className="mt-5 p-3 w-full bg-white bg-opacity-50 rounded-md font-bold hover:bg-opacity-30"
        onClick={() => setOpenModal(true)}
      >
        {caster.name}
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
