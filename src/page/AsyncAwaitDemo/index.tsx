import React, { useEffect, useState } from "react";
import "./index.css";

export default function AsyncAwaitDemo() {
  const [demoText, setDemoText] = useState<string[]>([]);
  const simulateWaitingResponse = <T,>(
    waitTime: number,
    returnWording: T
  ): Promise<string> =>
    new Promise((resolve) =>
      setTimeout(() => resolve(`${returnWording}完成`), waitTime)
    );

  const simulateSendApi = async (apiString: string, waitTime: number) => {
    setDemoText((pre) => [
      ...pre,
      `${apiString}開始,等待 ${waitTime / 1000} 秒`,
    ]);
    await simulateWaitingResponse(waitTime, apiString);
    setDemoText((pre) => [...pre, `${apiString}完成`]);
    return true;
  };

  useEffect(() => {
    (async () => {
      const [funOne, funSec] = await Promise.all([
        simulateSendApi("函示一", 2000),
        simulateSendApi("函示二", 3000),
      ]);
      if (funOne && funSec) {
        await simulateSendApi("函示三", 4000);
        await simulateSendApi("函示四", 3000);
      }
    })();
  }, []);

  return <div className="async_await_demo">{demoText.join("\n")}</div>;
}
