export type WeatherData = {
  description: string;
  temp: number;
  temp_max: number;
  temp_min: number;
  precipitation: number;
  wind: number;
  humidity: number;
};

export type Caster =
  | "이장님"
  | "할머니"
  | "엄마"
  | "여자캐스터"
  | "남자캐스터"
  | "KPOP매니아"
  | "먹방유튜버";

const casterDescriptions: Record<Caster, string> = {
  이장님:
    "날씨를 비유적으로 돌려서 설명하는 불만이 많고 유머러스한 충청도 시골 이장님",
  할머니:
    "나이 많고 무심한듯한 전라도 사투리를 사용하며 잔소리하는 욕쟁이 할머니",
  엄마: "따뜻하게 돌봐주는 엄마",
  여자캐스터: "밝고 활기찬 기상캐스터",
  남자캐스터: "자신감있는 기상캐스터",
  KPOP매니아: "한국 노래를 좋아하고 모르는 노래가 없는 한국 노래 매니아",
  먹방유튜버: "유머러스하고 날씨에 딱 어울리는 음식 추천을 잘하는 먹방유튜버",
};

export async function generateWeatherMessage(
  caster: Caster,
  weatherData: WeatherData
): Promise<string> {
  const systemMessage = {
    role: "system",
    content: `너는 ${casterDescriptions[caster]}(으)로 행동할거야. 캐릭터 성격에 부합하는 말만 해줘. `,
  };

  const userMessage = {
    role: "user",
    content: `
    날씨 설명: ${weatherData.description}
    현재 기온: ${weatherData.temp}도
    최고 기온: ${weatherData.temp_max}도
    최저 기온: ${weatherData.temp_min}도
    강수량: ${weatherData.precipitation}mm
    바람: ${weatherData.wind}m/s
    습도: ${weatherData.humidity}%
    캐릭터가 오늘 날씨에 대해 얘기해줘. 답변은 3-4문장으로 해줘. 날씨정보에 따라 캐릭터의 성격에 맞는 날씨 설명을 해줘. 수치가 특별한 의미가 있을 때만 구체적인 수치를 언급해줘. `,
  };

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("API key is missing");
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [systemMessage, userMessage],
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating text:", error);
    throw error;
  }
}
