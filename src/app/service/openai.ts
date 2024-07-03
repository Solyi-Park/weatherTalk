import axios from "axios";

export type WeatherData = {
  description: string;
  temp: number;
  temp_max: number;
  temp_min: number;
  precipitation: number | null;
  wind: number;
  snow: number | null;
  humidity: number;
  sunrise: number;
  sunset: number;
  icon: string;
};

export type Caster =
  | "이장님"
  | "할머니"
  | "엄마"
  | "여자캐스터"
  | "남자캐스터"
  | "KPOP매니아"
  | "먹방유튜버"
  | "패션인플루언서1"
  | "패션인플루언서2";

const casterDescriptions: Record<Caster, string> = {
  이장님: "느긋하고 유머러스한 충청도 시골 이장",
  할머니: "나이 많고 잔소리를 많이 하는 할머니",
  엄마: "자식을 따뜻하게 챙겨주는 40대 엄마",
  여자캐스터: "밝고 활기찬 30대 여성 기상캐스터",
  남자캐스터: "섬세하고 예의 바른 30대 남성 기상캐스터",
  KPOP매니아: "친근하고 사교적인 20대 KPOP 팬",
  먹방유튜버: "유머러스하고 유쾌한 20대 먹방 유튜버",
  패션인플루언서1: "트렌디한 여자 패션 인플루언서",
  패션인플루언서2: "세련된 남자 패션 인플루언서",
};

type Message = {
  message: string;
};

export async function generateWeatherMessage(
  caster: Caster,
  weatherData: WeatherData
): Promise<Message> {
  const exampleResponses: Record<Caster, string> = {
    이장님:
      "오늘은 맑아서 좋구먼! 해가 쨍쨍하니 일하기는 좋지만 조금 더울 수도 있으니 양산 쓰고 다니세. 공기 중 물기도 적당해서 그늘만 찾아 다니면 괜찮을 거여.",
    할머니:
      "오늘 날씨가 해가 쨍해서 이불 빨래하기 딱 좋네. 낮엔 좀 더울 테니 바깥에 싸돌아 댕기지 말어. 바람도 살짝 불어서 더위가 조금 덜하겠구먼.",
    엄마: "오늘은 정말 화창하고 따뜻한 날씨야! 아이들과 함께 밖에서 놀기 좋은 날이네.",
    여자캐스터:
      "오늘은 정말 화창하고 따뜻한 날씨입니다! 나가서 산책하거나 가벼운 운동을 하기에 좋은 날씨예요.",
    남자캐스터: "오늘은 맑고 쾌청한 날씨입니다. 기분 좋은 하루 보내세요.",
    KPOP매니아:
      "오늘 같은 흐린 날엔 BTS의 'Spring Day'가 딱이야. 이 곡을 들으면 기분이 좋아질 거야!",
    먹방유튜버:
      "오늘 같은 날엔 뜨끈한 김치찌개 한 그릇 어때? 이 날씨에 딱 맞는 메뉴야.",
    패션인플루언서1:
      "오늘 같은 맑은 날엔 라이트 블루 청바지에 화이트 티셔츠를 입으면 정말 스타일리시할 거야! 거기에 선글라스를 추가하면 완벽해!",
    패션인플루언서2:
      "오늘 같은 맑은 날엔 베이지 치노 팬츠에 네이비 폴로 셔츠를 입으면 깔끔하고 멋질 거야! 모자를 써도 좋아.",
  };

  const systemMessage = {
    role: "system",
    content: `너는 ${casterDescriptions[caster]} 캐릭터로 행동할 거야. 캐릭터의 방식에 맞게 날씨를 설명해줘.
    여기 각 캐릭터의 예시 응답을 참고해:
    - 이장님: ${exampleResponses["이장님"]}
    - 할머니: ${exampleResponses["할머니"]}
    - 엄마: ${exampleResponses["엄마"]}
    - 여자캐스터: ${exampleResponses["여자캐스터"]}
    - 남자캐스터: ${exampleResponses["남자캐스터"]}
    - KPOP매니아: ${exampleResponses["KPOP매니아"]}
    - 먹방유튜버: ${exampleResponses["먹방유튜버"]}
    - 패션인플루언서1: ${exampleResponses["패션인플루언서1"]}
    - 패션인플루언서2: ${exampleResponses["패션인플루언서2"]}
    `,
  };

  const userMessage = {
    role: "user",
    content: `
    날씨 설명: ${weatherData.description}
    현재 기온: ${Math.floor(weatherData.temp)}도
    최고 기온: ${Math.floor(weatherData.temp_max)}도
    최저 기온: ${Math.floor(weatherData.temp_min)}도
    강수량: ${weatherData.precipitation}mm
    바람: ${weatherData.wind}m/s
    습도: ${weatherData.humidity}%
    ${caster}의 성격으로 날씨를 설명해줘. 170자 내로 문장을 마무리해줘. '바람', '습도'라는 직접적인 단어를 언급하지마. 기온을 제외하고서는 구체적인 수치를 사용하지마. 중요한 단어는 글씨를 굵게 표시해줘. 내 캐릭터의 성격에 맞는 이야기만 해야해. 이야기할때 "캐릭터이름: "은 언급하지마.
`,
  };

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("No OpenAI API key found");
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
        messages: [systemMessage, userMessage],
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;
    const message = {
      message: data.choices[0].message.content,
    };

    return message;
  } catch (error) {
    console.error("Error generating text:", error);
    throw error;
  }
}
