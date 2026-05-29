import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import OnboardingWizard from "./components/OnboardingWizard";
import ResultsView from "./components/ResultsView";
import { SITUATIONS_DATA } from "./data/situations";
import { getMatchedSituations } from "./utils/matching";

export default function App() {
  const [screen, setScreen] = useState("landing");
  const [wizardData, setWizardData] = useState(null);
  const [matchedSituations, setMatchedSituations] = useState([]);

  const handleStart = () => {
    setScreen("wizard");
  };

  const handleWizardComplete = (data) => {
    const results = getMatchedSituations(data, SITUATIONS_DATA);
    setWizardData(data);
    setMatchedSituations(results);
    setScreen("results");
  };

  const handleWizardBack = () => {
    setScreen("landing");
  };

  const handleResultsBack = () => {
    setScreen("wizard");
  };

  if (screen === "landing") {
    return <LandingPage onStart={handleStart} />;
  }

  if (screen === "wizard") {
    return (
      <OnboardingWizard
        onComplete={handleWizardComplete}
        onBack={handleWizardBack}
      />
    );
  }

  if (screen === "results") {
    return (
      <ResultsView
        wizardData={wizardData}
        situations={matchedSituations}
        onBack={handleResultsBack}
      />
    );
  }

  return null;
}
