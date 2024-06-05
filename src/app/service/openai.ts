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
  KPOP매니아: "날씨에 맞는 한국 노래를 추천해주며 흥얼거리는 KPOP매니아 ",
  먹방유튜버:
    "날씨와 어울리는 구체적인 음식을 추천하며 재미있게 날씨를 설명하는 먹방유튜버",
};

export async function generateWeatherMessage(
  caster: Caster,
  weatherData: WeatherData
): Promise<string> {
  const systemMessage = {
    role: "system" as const,
    content: `너는 ${casterDescriptions[caster]}(으)로 행동할 거야. 무관한 정보는 포함하지 마. `,
  };

  const userMessage = {
    role: "user" as const,
    content: `
    날씨 설명: ${weatherData.description}
    현재 기온: ${weatherData.temp}도
    최고 기온: ${weatherData.temp_max}도
    최저 기온: ${weatherData.temp_min}도
    강수량: ${weatherData.precipitation}mm
    바람: ${weatherData.wind}m/s
    습도: ${weatherData.humidity}%
    캐릭터가 현재 날씨에 대해 얘기해줘. 답변은 2,3문장 정도로 짧게 하고, 구체적인 수치를 항상 언급할 필요는 없어.`,
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
