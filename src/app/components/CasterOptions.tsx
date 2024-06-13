import { Caster } from "../service/openai";
import { useCaster } from "../context/CasterContext";

type Props = {
  onClose: () => void;
};
export type ExtendedCaster = Caster | "랜덤";

const CASTERS: ExtendedCaster[] = [
  "랜덤",
  "할머니",
  "이장님",
  "엄마",
  "여자캐스터",
  "남자캐스터",
  "KPOP매니아",
  "먹방유튜버",
];
export default function CasterOptions({ onClose }: Props) {
  const { setCaster } = useCaster();

  const handleOptions = (event: React.MouseEvent<HTMLLIElement>) => {
    const clickedText = event.currentTarget.innerText as ExtendedCaster;

    if (clickedText === "랜덤") {
      const randomIndex = Math.floor(Math.random() * (CASTERS.length - 1)) + 1;
      setCaster(CASTERS[randomIndex] as Caster);
    } else {
      setCaster(clickedText);
    }
    onClose();
  };

  return (
    <ul className="flex flex-col items-center w-full h-full justify-around ">
      {CASTERS.map((caster) => (
        <li
          onClick={handleOptions}
          className="hover:cursor-pointer flex justify-center items-center w-full h-full  hover:bg-indigo-50 border-b"
          key={caster}
        >
          {caster}
        </li>
      ))}
    </ul>
  );
}
