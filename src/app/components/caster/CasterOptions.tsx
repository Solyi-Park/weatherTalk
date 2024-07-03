import { Caster } from "../../service/openai";
import { useCaster } from "../../context/CasterContext";
import { CASTERS, FULLCASTERS } from "../../constants/casters";

type Props = {
  onClose: () => void;
};

export const CASTER_KEY = "caster";

export default function CasterOptions({ onClose }: Props) {
  const { setCaster } = useCaster();

  const handleSelect = (event: React.MouseEvent<HTMLLIElement>) => {
    const clickedText = event.currentTarget.innerText as Caster;
    const foundCaster = FULLCASTERS.find(
      (caster) => caster.name == clickedText
    );
    if (foundCaster) {
      setCaster(foundCaster);
      localStorage.setItem(CASTER_KEY, clickedText);
    }
    onClose();
  };

  return (
    <ul className="flex flex-col items-center w-full h-full justify-around ">
      {CASTERS.map((caster) => (
        <li
          onClick={handleSelect}
          className="py-2 hover:cursor-pointer flex justify-center items-center w-full h-full  hover:bg-indigo-50 border-b"
          key={caster}
        >
          {caster}
        </li>
      ))}
    </ul>
  );
}
