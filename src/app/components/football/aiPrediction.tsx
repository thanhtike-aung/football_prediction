"use client";

import { fetchGeminiApi } from "@/app/api/gemini/get";
import { parseStringData } from "@/app/helper/jsonStringFormat";
import { geminiResponseType } from "@/app/types/ai";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Skeleton } from "@/components/ui/skeleton";
import { predictionPromptHepler } from "@/constants";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { StatusCodes } from "http-status-codes";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function AiPrediction({
  homeTeam,
  awayTeam,
}: {
  homeTeam: string;
  awayTeam: string;
}) {
  const [activateAi, setActivateAi] = useState<boolean>(false);
  const [prediction, setPrediction] = useState<string>("");
  const [finalResult, setFinalResult] = useState<geminiResponseType>({
    keyFactor: "",
    predictedScore: "",
    predictedWinner: "",
  });

  useEffect(() => {
    if (!activateAi) return;
    const getPrediction = async () => {
      const result = await fetchGeminiApi(
        `Can you predict upcoming match of ${homeTeam} vs ${awayTeam}. ${predictionPromptHepler}`
      );
      if (result.status !== StatusCodes.OK) return;
      if (!("data" in result)) return;
      if (typeof result.data === "string") {
        setPrediction(result.data);
      }
    };
    getPrediction();
  }, [activateAi]);

  useEffect(() => {
    if (!prediction) return;
    const parsePrediction = parseStringData(prediction);
    setFinalResult(parsePrediction);
  }, [prediction]);
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            onClick={() => setActivateAi(true)}
            variant="outline"
            className="border-black"
          >
            Predict with AI
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <VisuallyHidden>
              <DrawerTitle></DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </VisuallyHidden>
          </DrawerHeader>
          <div className="flex justify-center px-2">
            {finalResult.keyFactor ? (
              <TextLayout data={finalResult} />
            ) : (
              <SkeletonLayout />
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const TextLayout = ({ data }: { data: geminiResponseType }) => (
  <>
    <div className="mx-auto w-full">
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 pb-2">Short Review</h2>
        <p className="mt-1 text-gray-600">
          <Typewriter words={[data.keyFactor]} typeSpeed={30} />
        </p>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800">
          Score Prediction
        </h3>
        <p className="mt-1 text-gray-600">{data.predictedScore}</p>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800">Favourite Team</h3>
        <p className="mt-1 text-gray-600">{data.predictedWinner}</p>
      </div>
      <p className="text-xs text-[#9c9c9c]">
        Disclaimer: This is just an AI-generated prediction for fun. Please
        don&#39;t bet seriously based on this. Enjoy the match! 🤗
      </p>
    </div>
  </>
);

const SkeletonLayout = () => (
  <>
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[50px] w-[350px]" />
      <Skeleton className="h-[30px] w-[250px]" />
      <Skeleton className="h-[20px] w-[150px]" />
    </div>
  </>
);
