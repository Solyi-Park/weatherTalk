import { Caster } from "../service/openai";

export type CasterDetail = {
  name: Caster;
  path: string;
};

export const FULLCASTERS: CasterDetail[] = [
  { name: "할머니", path: "/images/grandma.webp" },
  { name: "이장님", path: "/images/viliageChief.webp" },
  { name: "엄마", path: "/images/mom.webp" },
  { name: "여자캐스터", path: "/images/femaleCaster.webp" },
  { name: "남자캐스터", path: "/images/maleCaster.webp" },
  { name: "KPOP매니아", path: "/images/kpopMania.webp" },
  { name: "먹방유튜버", path: "/images/foodVlogger.webp" },
  { name: "패션인플루언서1", path: "/images/femaleInfluencer.webp" },
  { name: "패션인플루언서2", path: "/images/maleInfluencer.webp" },
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
