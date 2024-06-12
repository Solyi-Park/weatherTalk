import { Caster } from "../service/openai";
import { useCaster } from "../context/CasterContext";

type Props = {
  onClose: () => void;
};

const CASTERS: Caster[] = [
  "할머니",
  "이장님",
  "엄마",
  "여자캐스터",
  "남자캐스터",
  "KPOP매니아",
  "먹방유튜버",
];
export default function CasterOptions({ onClose }: Props) {
  const { caster, setCaster } = useCaster();

  const handleOptions = (event: React.MouseEvent<HTMLLIElement>) => {
    const clickedText = event.currentTarget.innerText as Caster;
    setCaster(clickedText);
    console.log("Clicked text:", clickedText);
    onClose();
  };

  return (
    <ul className="flex flex-col items-center w-full h-full justify-around ">
      {CASTERS.map((caster) => (
        <li
          onClick={handleOptions}
          className="flex justify-center items-center w-full h-full  hover:bg-indigo-50 border-b"
          key={caster}
        >
          {caster}
        </li>
      ))}
    </ul>
  );
}
