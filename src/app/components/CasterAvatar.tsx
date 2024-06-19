"use client";
import Image from "next/image";
import { useCaster } from "../context/CasterContext";
import { Caster } from "../service/openai";
import { useEffect, useState } from "react";
import ModalPortal from "./ModalPortal";
import CasterOptions, { CASTER_KEY } from "./CasterOptions";
import CasterModal from "./CasterModal";
import { FULLCASTERS, CasterDetail } from "../data/casters";

export default function CasterAvatar() {
  const [openModal, setOpenModal] = useState(false);
  const { caster, setCaster } = useCaster();
  const [currentCaster, setCurrentCaster] = useState<CasterDetail | null>(null);

  const randomIndex = Math.floor(Math.random() * FULLCASTERS.length);

  useEffect(() => {
    const savedCaster = localStorage.getItem(CASTER_KEY);
    if (savedCaster) {
      const foundCaster = FULLCASTERS.find((c) => c.name === savedCaster);
      if (foundCaster) {
        setCurrentCaster(foundCaster);
        setCaster(foundCaster.name);
      }
    } else {
      const randomCaster = FULLCASTERS[randomIndex];
      setCurrentCaster(randomCaster);
      setCaster(randomCaster.name);
      localStorage.setItem(CASTER_KEY, randomCaster.name);
    }
  }, [setCaster]);

  const onClickAvatar = () => {
    const newCaster = FULLCASTERS[randomIndex];
    setCurrentCaster(newCaster);
    setCaster(newCaster.name);
    localStorage.setItem(CASTER_KEY, newCaster.name);
  };
  return (
    <section className="flex flex-col py-2">
      {currentCaster && (
        <div className="relative w-[400px] h-[400px] hover:cursor-pointer">
          <Image
            priority
            src={currentCaster.src}
            alt={`image of ${currentCaster.name} `}
            fill
            onClick={onClickAvatar}
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
