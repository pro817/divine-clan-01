"use client";

import { useState } from "react";
import { StartPage, TestPage, ResultPage } from "@/components/TestApp";
import type { AnswerMap } from "@/lib/scoring";
import type { Gender } from "@/data/weapons";

type UserProfile = {
  nickname: string;
  gender: Gender;
  weapon: string;
};

export default function Home() {
  const [step, setStep] = useState<"start" | "test" | "result">("start");
  const [user, setUser] = useState<UserProfile | null>(null);
  const [answers, setAnswers] = useState<AnswerMap>({});

  return (
    <>
      {step === "start" && (
        <StartPage
          onStart={(profile) => {
            setUser(profile);
            setAnswers({});
            setStep("test");
          }}
        />
      )}

      {step === "test" && (
        <TestPage
          onBackToStart={() => setStep("start")}
          onFinish={(nextAnswers) => {
            setAnswers(nextAnswers);
            setStep("result");
          }}
        />
      )}

      {step === "result" && user && (
        <ResultPage
          user={user}
          answers={answers}
          onRestart={() => {
            setAnswers({});
            setStep("start");
          }}
        />
      )}
    </>
  );
}
