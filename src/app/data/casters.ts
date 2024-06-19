import { Caster } from "../service/openai";

export type CasterDetail = {
  name: Caster;
  src: string;
};

export const FULLCASTERS: CasterDetail[] = [
  { name: "할머니", src: "/images/grandma.webp" },
  { name: "이장님", src: "/images/viliageChief.webp" },
  { name: "엄마", src: "/images/mom.webp" },
  { name: "여자캐스터", src: "/images/femaleCaster.webp" },
  { name: "남자캐스터", src: "/images/maleCaster.webp" },
  { name: "KPOP매니아", src: "/images/kpopMania.webp" },
  { name: "먹방유튜버", src: "/images/foodVlogger.webp" },
  { name: "패션인플루언서1", src: "/images/femaleInfluencer.webp" },
  { name: "패션인플루언서2", src: "/images/maleInfluencer.webp" },
];

export const CASTERS: Caster[] = [
  "할머니",
  "이장님",
  "엄마",
  "여자캐스터",
  "남자캐스터",
  "KPOP매니아",
  "먹방유튜버",
  "패션인플루언서1",
  "패션인플루언서2",
];
