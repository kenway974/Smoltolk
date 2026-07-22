import React, { useState, useMemo } from "react";
import { SITUATIONS_DATA } from "./data/situations";
import { matchSituations } from "./utils/matching";
import { suggestIntention } from "./data/intentions";
import WizardLayout from "./components/WizardLayout";
import StepLieu from "./components/StepLieu";
import StepDuo from "./components/StepDuo";
import StepIntention from "./components/StepIntention";
import StepContexte from "./components/StepContexte";
import StepInteret from "./components/StepInteret";
import ResultsView from "./components/ResultsView";

const ALL_ENVIRONMENTS = [...new Set(SITUATIONS_DATA.map(s => s.environnement))].sort();
const ALL_INTERETS     = [...new Set(SITUATIONS_DATA.map(s => s.centreInteret))].sort();

const INITIAL_MOI      = { genre: null, ageGroupe: null };
const INITIAL_AVATAR   = { genre: null, ageGroupe: null, vibe: null };
const INITIAL_CONTEXTE = { proximite: null, audace: null };

const TOTAL_STEPS = 5;
const STEP_NUM = { step1: 1, step2: 2, step3: 3, step4: 4, step5: 5 };

export default function App() {
  const [screen,   setScreen]   = useState("step1");
  const [lieu,     setLieu]     = useState(null);
  const [moi,      setMoi]      = useState(INITIAL_MOI);
  const [avatar,   setAvatar]   = useState(INITIAL_AVATAR);
  const [intention, setIntention] = useState(null);
  const [intentionTouched, setIntentionTouched] = useState(false);
  const [contexte, setContexte] = useState(INITIAL_CONTEXTE);
  const [interet,  setInteret]  = useState(null);

  const results = useMemo(
    () => matchSituations(SITUATIONS_DATA, { lieu, moi, avatar, interet, contexte, intention }),
    [lieu, moi, avatar, interet, contexte, intention]
  );

  const goResults = () => setScreen("results");

  // En quittant l'étape Duo, on pré-remplit l'intention suggérée (sauf si l'utilisateur
  // l'a déjà choisie manuellement).
  const leaveDuo = () => {
    if (!intentionTouched) setIntention(suggestIntention(moi, avatar));
    setScreen("step3");
  };

  const chooseIntention = (val) => {
    setIntentionTouched(true);
    setIntention(val);
  };

  const handleBack = () => {
    if (screen === "step2") setScreen("step1");
    else if (screen === "step3") setScreen("step2");
    else if (screen === "step4") setScreen("step3");
    else if (screen === "step5") setScreen("step4");
    else if (screen === "results") setScreen("step5");
  };

  const handleRestart = () => {
    setLieu(null);
    setMoi(INITIAL_MOI);
    setAvatar(INITIAL_AVATAR);
    setIntention(null);
    setIntentionTouched(false);
    setContexte(INITIAL_CONTEXTE);
    setInteret(null);
    setScreen("step1");
  };

  if (screen === "results") {
    return (
      <ResultsView
        situations={results}
        criteria={{ lieu, moi, avatar, contexte, interet, intention }}
        onRestart={handleRestart}
      />
    );
  }

  const stepNum = STEP_NUM[screen] ?? 1;

  return (
    <WizardLayout step={stepNum} total={TOTAL_STEPS} onBack={stepNum === 1 ? handleRestart : handleBack}>
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
        <StepDuo
          moi={moi}
          avatar={avatar}
          onChangeMoi={setMoi}
          onChangeAvatar={setAvatar}
          onNext={leaveDuo}
          onSkip={() => { setMoi(INITIAL_MOI); setAvatar(INITIAL_AVATAR); leaveDuo(); }}
        />
      )}
      {screen === "step3" && (
        <StepIntention
          value={intention}
          suggested={suggestIntention(moi, avatar)}
          onChange={chooseIntention}
          onNext={() => setScreen("step4")}
          onSkip={() => { setIntention(null); setIntentionTouched(false); setScreen("step4"); }}
        />
      )}
      {screen === "step4" && (
        <StepContexte
          value={contexte}
          onChange={setContexte}
          onNext={() => setScreen("step5")}
          onSkip={() => { setContexte(INITIAL_CONTEXTE); setScreen("step5"); }}
        />
      )}
      {screen === "step5" && (
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
