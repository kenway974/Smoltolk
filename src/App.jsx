import React, { useState, useMemo } from "react";
import { SITUATIONS_DATA } from "./data/situations";
import { matchSituations } from "./utils/matching";
import WizardLayout from "./components/WizardLayout";
import StepLieu from "./components/StepLieu";
import StepAvatar from "./components/StepAvatar";
import StepInteret from "./components/StepInteret";
import ResultsView from "./components/ResultsView";

const ALL_ENVIRONMENTS = [...new Set(SITUATIONS_DATA.map(s => s.environnement))].sort();
const ALL_INTERETS     = [...new Set(SITUATIONS_DATA.map(s => s.centreInteret))].sort();

const INITIAL_AVATAR = { genre: null, ageGroupe: null, vibe: null };

export default function App() {
  const [screen, setScreen]   = useState("step1");
  const [lieu, setLieu]       = useState(null);
  const [avatar, setAvatar]   = useState(INITIAL_AVATAR);
  const [interet, setInteret] = useState(null);

  const results = useMemo(
    () => matchSituations(SITUATIONS_DATA, { lieu, avatar, interet }),
    [lieu, avatar, interet]
  );

  const goResults = () => setScreen("results");

  const handleBack = () => {
    if (screen === "step2") setScreen("step1");
    else if (screen === "step3") setScreen("step2");
    else if (screen === "results") setScreen("step3");
  };

  const handleRestart = () => {
    setLieu(null);
    setAvatar(INITIAL_AVATAR);
    setInteret(null);
    setScreen("step1");
  };

  if (screen === "results") {
    return (
      <ResultsView
        situations={results}
        criteria={{ lieu, avatar, interet }}
        onRestart={handleRestart}
      />
    );
  }

  const stepNum = screen === "step1" ? 1 : screen === "step2" ? 2 : 3;

  return (
    <WizardLayout step={stepNum} onBack={stepNum === 1 ? handleRestart : handleBack}>
      {screen === "step1" && (
        <StepLieu
          value={lieu}
          onChange={setLieu}
          options={ALL_ENVIRONMENTS}
          onNext={() => setScreen("step2")}
          onSkip={() => { setLieu(null); setScreen("step2"); }}
        />
      )}
      {screen === "step2" && (
        <StepAvatar
          value={avatar}
          onChange={setAvatar}
          onNext={() => setScreen("step3")}
          onSkip={() => { setAvatar(INITIAL_AVATAR); setScreen("step3"); }}
        />
      )}
      {screen === "step3" && (
        <StepInteret
          value={interet}
          onChange={setInteret}
          options={ALL_INTERETS}
          onNext={goResults}
          onSkip={() => { setInteret(null); goResults(); }}
        />
      )}
    </WizardLayout>
  );
}
