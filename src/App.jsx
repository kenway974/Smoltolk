import React, { useState, useMemo, useRef, useEffect, lazy, Suspense } from "react";
import { SITUATIONS_DATA } from "./data/situations";
import { matchSituations } from "./utils/matching";
import { suggestIntention } from "./data/intentions";
import { suggestRole } from "./data/roles";
import WizardLayout from "./components/WizardLayout";
import HomeView from "./components/HomeView";
import StepLieu from "./components/StepLieu";
import StepDuo from "./components/StepDuo";
import StepIntention from "./components/StepIntention";
import StepRole from "./components/StepRole";
import StepContexte from "./components/StepContexte";
import StepInteret from "./components/StepInteret";

// Écrans lourds : chargés à la demande (bundle initial plus léger, ouverture plus rapide).
const ResultsView        = lazy(() => import("./components/ResultsView"));
const GuideView          = lazy(() => import("./components/GuideView"));
const NewsView           = lazy(() => import("./components/NewsView"));
const FavoritesView      = lazy(() => import("./components/FavoritesView"));
const BlocagesView       = lazy(() => import("./components/BlocagesView"));
const JournalView        = lazy(() => import("./components/JournalView"));
const MissionsView       = lazy(() => import("./components/MissionsView"));
const OutilsView         = lazy(() => import("./components/OutilsView"));
const EntrainementView   = lazy(() => import("./components/EntrainementView"));
const ConfidentialiteView = lazy(() => import("./components/ConfidentialiteView"));
const SortieView         = lazy(() => import("./components/SortieView"));

const ALL_ENVIRONMENTS = [...new Set(SITUATIONS_DATA.map(s => s.environnement))].filter(e => e !== "Partout").sort();
const ALL_INTERETS     = [...new Set(SITUATIONS_DATA.map(s => s.centreInteret))].sort();

const INITIAL_MOI      = { genre: null, ageGroupe: null };
const INITIAL_AVATAR   = { genre: null, ageGroupe: null, vibe: null };
const INITIAL_CONTEXTE = { proximite: null, audace: null };

const TOTAL_STEPS = 6;
const STEP_NUM = { step1: 1, step2: 2, step3: 3, step4: 4, step5: 5, step6: 6 };

function Loader() {
  return (
    <div className="min-h-svh flex items-center justify-center">
      <span className="w-7 h-7 rounded-full border-2 border-stone-300 border-t-stone-700 animate-spin" aria-label="Chargement" />
    </div>
  );
}

export default function App() {
  const [screen,   setScreen]   = useState("home");
  const [lieu,     setLieu]     = useState(null);
  const [moi,      setMoi]      = useState(INITIAL_MOI);
  const [avatar,   setAvatar]   = useState(INITIAL_AVATAR);
  const [intention, setIntention] = useState(null);
  const [intentionTouched, setIntentionTouched] = useState(false);
  const [role,     setRole]     = useState(null);
  const [roleTouched, setRoleTouched] = useState(false);
  const [contexte, setContexte] = useState(INITIAL_CONTEXTE);
  const [interet,  setInteret]  = useState(null);
  const [guideReturn, setGuideReturn] = useState("home");
  const [guideFocus, setGuideFocus] = useState(null);
  const [journalPrefill, setJournalPrefill] = useState(null);
  const [missionsReturn, setMissionsReturn] = useState("home");

  // Bouton « retour » matériel / navigateur : au lieu de quitter l'app, il ramène
  // à l'accueil depuis n'importe quel écran. Les retours fins restent gérés par
  // les boutons « retour » de chaque écran.
  const screenRef = useRef(screen);
  useEffect(() => { screenRef.current = screen; }, [screen]);
  useEffect(() => {
    window.history.pushState({ smoltolk: true }, "");
    const onPop = () => {
      if (screenRef.current !== "home") {
        setScreen("home");
        window.history.pushState({ smoltolk: true }, "");
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const openJournal = (prefill) => {
    setJournalPrefill(prefill && typeof prefill === "object" && !prefill.nativeEvent ? prefill : null);
    setScreen("journal");
  };
  const openMissions = (from) => { setMissionsReturn(from); setScreen("missions"); };

  // focus peut être une clé de palier (ex. "p2") ; les boutons génériques passent
  // un event, qu'on ignore.
  const openGuide  = (focus) => {
    setGuideReturn(screen);
    setGuideFocus(typeof focus === "string" ? focus : null);
    setScreen("guide");
  };
  const closeGuide = () => setScreen(guideReturn);

  const results = useMemo(
    () => matchSituations(SITUATIONS_DATA, { lieu, moi, avatar, interet, contexte, intention, role }),
    [lieu, moi, avatar, interet, contexte, intention, role]
  );

  const goResults = () => setScreen("results");

  // En quittant l'étape Duo, on pré-remplit l'intention suggérée.
  const leaveDuo = () => {
    if (!intentionTouched) setIntention(suggestIntention(moi, avatar));
    setScreen("step3");
  };
  const chooseIntention = (val) => { setIntentionTouched(true); setIntention(val); };

  // En quittant l'étape Intention, on pré-remplit le rôle suggéré selon le lieu.
  const leaveIntention = () => {
    if (!roleTouched) setRole(suggestRole(lieu));
    setScreen("step4");
  };
  const chooseRole = (val) => { setRoleTouched(true); setRole(val); };

  const handleBack = () => {
    if (screen === "step2") setScreen("step1");
    else if (screen === "step3") setScreen("step2");
    else if (screen === "step4") setScreen("step3");
    else if (screen === "step5") setScreen("step4");
    else if (screen === "step6") setScreen("step5");
    else if (screen === "results") setScreen("step6");
  };

  const handleRestart = () => {
    setLieu(null);
    setMoi(INITIAL_MOI);
    setAvatar(INITIAL_AVATAR);
    setIntention(null); setIntentionTouched(false);
    setRole(null); setRoleTouched(false);
    setContexte(INITIAL_CONTEXTE);
    setInteret(null);
    setScreen("home");
  };

  let el;

  if (screen === "home") {
    el = (
      <HomeView
        onStart={() => setScreen("step1")}
        onOpenGuide={openGuide}
        onOpenNews={() => setScreen("news")}
        onOpenFavorites={() => setScreen("favorites")}
        onOpenBlocages={() => setScreen("blocages")}
        onOpenJournal={() => openJournal(null)}
        onOpenMissions={() => openMissions("home")}
        onOpenOutils={() => setScreen("outils")}
        onOpenEntrainement={() => setScreen("entrainement")}
        onOpenConfidentialite={() => setScreen("confidentialite")}
        onOpenSortie={() => setScreen("sortie")}
      />
    );
  } else if (screen === "journal") {
    el = (
      <JournalView
        onBack={() => setScreen("home")}
        onStart={() => setScreen("step1")}
        onOpenMissions={() => openMissions("journal")}
        prefill={journalPrefill}
      />
    );
  } else if (screen === "missions") {
    el = <MissionsView onBack={() => setScreen(missionsReturn)} />;
  } else if (screen === "outils") {
    el = <OutilsView onBack={() => setScreen("home")} />;
  } else if (screen === "entrainement") {
    el = <EntrainementView onBack={() => setScreen("home")} />;
  } else if (screen === "confidentialite") {
    el = <ConfidentialiteView onBack={() => setScreen("home")} />;
  } else if (screen === "sortie") {
    el = <SortieView onBack={() => setScreen("home")} onLog={() => openJournal(null)} />;
  } else if (screen === "blocages") {
    el = (
      <BlocagesView
        onBack={() => setScreen("home")}
        onStart={() => setScreen("step1")}
        onOpenGuide={openGuide}
      />
    );
  } else if (screen === "news") {
    el = <NewsView onBack={() => setScreen("home")} />;
  } else if (screen === "favorites") {
    el = <FavoritesView onBack={() => setScreen("home")} />;
  } else if (screen === "guide") {
    el = <GuideView onBack={closeGuide} focus={guideFocus} />;
  } else if (screen === "results") {
    el = (
      <ResultsView
        situations={results}
        criteria={{ lieu, moi, avatar, contexte, interet, intention, role }}
        onRestart={handleRestart}
        onOpenGuide={openGuide}
        onOpenFavorites={() => setScreen("favorites")}
        onLog={() => openJournal({ lieu: lieu && lieu !== "Partout" ? lieu : "", intention: intention || null })}
      />
    );
  } else {
    const stepNum = STEP_NUM[screen] ?? 1;
    el = (
      <WizardLayout step={stepNum} total={TOTAL_STEPS} onBack={stepNum === 1 ? handleRestart : handleBack} onOpenGuide={openGuide}>
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
            onNext={leaveIntention}
            onSkip={() => { setIntention(null); setIntentionTouched(false); leaveIntention(); }}
          />
        )}
        {screen === "step4" && (
          <StepRole
            value={role}
            suggested={suggestRole(lieu)}
            onChange={chooseRole}
            onNext={() => setScreen("step5")}
            onSkip={() => { setRole(null); setRoleTouched(false); setScreen("step5"); }}
          />
        )}
        {screen === "step5" && (
          <StepContexte
            value={contexte}
            onChange={setContexte}
            onNext={() => setScreen("step6")}
            onSkip={() => { setContexte(INITIAL_CONTEXTE); setScreen("step6"); }}
          />
        )}
        {screen === "step6" && (
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

  return <Suspense fallback={<Loader />}>{el}</Suspense>;
}
