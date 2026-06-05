import React, { useState, useMemo } from "react";
import { SITUATIONS_DATA } from "./data/situations";
import { matchSituations } from "./utils/matching";
import WizardLayout from "./components/WizardLayout";
import StepLieu from "./components/StepLieu";
import StepAvatar from "./components/StepAvatar";
import StepContexte from "./components/StepContexte";
import StepInteret from "./components/StepInteret";
import ResultsView from "./components/ResultsView";

const ALL_ENVIRONMENTS = [...new Set(SITUATIONS_DATA.map(s => s.environnement))].sort();
const ALL_INTERETS     = [...new Set(SITUATIONS_DATA.map(s => s.centreInteret))].sort();

const INITIAL_AVATAR   = { genre: null, ageGroupe: null, vibe: null };
const INITIAL_CONTEXTE = { proximite: null, audace: null };

export default function App() {
  const [screen,   setScreen]   = useState("step1");
  const [lieu,     setLieu]     = useState(null);
  const [avatar,   setAvatar]   = useState(INITIAL_AVATAR);
  const [contexte, setContexte] = useState(INITIAL_CONTEXTE);
  const [interet,  setInteret]  = useState(null);

  const results = useMemo(
    () => matchSituations(SITUATIONS_DATA, { lieu, avatar, interet, contexte }),
    [lieu, avatar, interet, contexte]
  );

  const goResults = () => setScreen("results");

  const handleBack = () => {
    if (screen === "step2") setScreen("step1");
    else if (screen === "step3") setScreen("step2");
    else if (screen === "step4") setScreen("step3");
    else if (screen === "results") setScreen("step4");
  };

  const handleRestart = () => {
    setLieu(null);
    setAvatar(INITIAL_AVATAR);
    setContexte(INITIAL_CONTEXTE);
    setInteret(null);
    setScreen("step1");
  };

  if (screen === "results") {
    return (
      <ResultsView
        situations={results}
        criteria={{ lieu, avatar, contexte, interet }}
        onRestart={handleRestart}
      />
    );
  }

  const stepNum = { step1: 1, step2: 2, step3: 3, step4: 4 }[screen] ?? 1;

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
        <StepContexte
          value={contexte}
          onChange={setContexte}
          onNext={() => setScreen("step4")}
          onSkip={() => { setContexte(INITIAL_CONTEXTE); setScreen("step4"); }}
        />
      )}
      {screen === "step4" && (
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
