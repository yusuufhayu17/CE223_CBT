const questions = [
  {
    question: "What is a fluid?",
    options: [
      "A compressible solid",
      "A material that deforms continuously under shear stress and takes the shape of its container",
      "A gas only",
      "A solid with a fixed shape and volume"
    ],
    answer: 1
  },
  {
    question: "Differentiate between liquids and gases.",
    options: [
      "Liquids and gases have the same compressibility",
      "Liquids have definite volume; gases fill their container completely",
      "Both liquids and gases have fixed volumes",
      "Gases have definite volume; liquids fill their container"
    ],
    answer: 1
  },
  {
    question: "Define hydrostatics.",
    options: [
      "Study of gases in motion",
      "Study of solids under pressure",
      "Study of fluids at rest without shear stress",
      "Study of fluid motion with friction"
    ],
    answer: 2
  },
  {
    question: "What is hydrodynamics?",
    options: [
      "Study of flow in open channels only",
      "Study of fluid motion considering forces and energies",
      "Study of fluids at rest",
      "Study of solid body mechanics"
    ],
    answer: 1
  },
  {
    question: "What is an ideal fluid?",
    options: [
      "Compressible and viscous",
      "Incompressible with high viscosity",
      "Compressible and has surface tension",
      "Incompressible, inviscid, and no surface tension"
    ],
    answer: 3
  },
  {
    question: "Define density (ρ).",
    options: [
      "Volume per unit mass",
      "Mass per unit volume (kg/m³)",
      "Weight per unit volume",
      "Force per unit mass"
    ],
    answer: 1
  },
  {
    question: "What is specific weight?",
    options: [
      "Weight per unit volume (N/m³)",
      "Volume per unit weight",
      "Mass per unit volume",
      "Force per unit area"
    ],
    answer: 0
  },
  {
    question: "What is viscosity?",
    options: [
      "Resistance to flow due to internal friction between fluid layers",
      "Force exerted by fluid on a surface",
      "Speed of flow",
      "Density of the fluid"
    ],
    answer: 0
  },
  {
    question: "State Newton’s law of viscosity.",
    options: [
      "Viscosity depends only on temperature",
      "Shear stress (τ) equals dynamic viscosity times velocity gradient: τ = μ(du/dy)",
      "Velocity is inversely proportional to shear stress",
      "Shear stress is proportional to pressure"
    ],
    answer: 1
  },
  {
    question: "Differentiate between dynamic and kinematic viscosity.",
    options: [
      "Kinematic viscosity is higher than dynamic viscosity",
      "Dynamic viscosity (μ) is shear stress divided by velocity gradient; kinematic viscosity (ν) is μ divided by density (ρ)",
      "They are the same",
      "Dynamic viscosity is μ divided by density"
    ],
    answer: 1
  },
  {
    question: "How does temperature affect viscosity of liquids/gases?",
    options: [
      "Both liquids and gases viscosity increase with temperature",
      "Liquids: viscosity decreases; Gases: viscosity increases with temperature",
      "Liquids viscosity increases; gases viscosity decreases with temperature",
      "Both liquids and gases viscosity decrease with temperature"
    ],
    answer: 1
  },
  {
    question: "Define surface tension.",
    options: [
      "Pressure difference between two points",
      "Force per unit length acting at the interface of a liquid and gas (N/m)",
      "Force per unit area inside a fluid",
      "Mass per unit area"
    ],
    answer: 1
  },
  {
    question: "What is cohesion?",
    options: [
      "Attraction between liquid molecules and a solid surface",
      "Repulsion between molecules of different liquids",
      "Attraction between molecules of the same liquid",
      "Force causing fluid flow"
    ],
    answer: 2
  },
  {
    question: "What is adhesion?",
    options: [
      "Resistance to flow",
      "Surface tension force in a liquid",
      "Attraction between liquid molecules and a solid surface",
      "Attraction between molecules of the same liquid"
    ],
    answer: 2
  },
  {
    question: "Calculate pressure inside a water droplet of diameter ‘d’.",
    options: [
      "p = 2σ/d",
      "p = 4σ/d",
      "p = 8σ/d",
      "p = σd"
    ],
    answer: 1
  },
  {
    question: "Define pressure.",
    options: [
      "Mass per unit volume",
      "Normal force per unit area (N/m² or Pa)",
      "Weight per unit volume",
      "Force per unit length"
    ],
    answer: 1
  },
  {
    question: "What is Pascal’s law?",
    options: [
      "Pressure increases with temperature",
      "Pressure at a point in a static fluid is equal in all directions",
      "Pressure decreases with depth",
      "Pressure is the same in moving fluids"
    ],
    answer: 1
  },
  {
    question: "Calculate pressure at depth ‘h’ in a liquid.",
    options: [
      "p = ρg/h",
      "p = ρgh",
      "p = γ/h",
      "p = h/γ"
    ],
    answer: 1
  },
  {
    question: "Differentiate between absolute and gauge pressure.",
    options: [
      "Absolute pressure equals gauge pressure",
      "Absolute pressure = Gauge pressure + Atmospheric pressure",
      "Absolute pressure = Gauge pressure - Atmospheric pressure",
      "Gauge pressure is always higher than absolute pressure"
    ],
    answer: 1
  },
  {
    question: "A diver is at 20m depth in seawater (γ = 10 kN/m³). Find gauge pressure.",
    options: [
      "200 kPa",
      "2 kPa",
      "20 kPa",
      "0.2 kPa"
    ],
    answer: 0
  },
  {
    question: "What is a hydraulic press?",
    options: [
      "Machine that compresses solids",
      "Pump that moves water uphill",
      "Device that amplifies force via fluid pressure using Pascal’s law",
      "Valve that controls fluid flow"
    ],
    answer: 2
  },
  {
    question: "In a hydraulic press, if plunger diameter = 30mm and ram diameter = 200mm, find weight lifted for 400N input.",
    options: [
      "4 kN",
      "17.77 kN",
      "400 N",
      "200 N"
    ],
    answer: 1
  },
  {
    question: "What is buoyancy?",
    options: [
      "Upward force on a submerged object equal to weight of displaced fluid",
      "Downward force due to gravity",
      "Frictional force in fluids",
      "Force causing fluid to flow"
    ],
    answer: 0
  },
  {
    question: "State Archimedes’ principle.",
    options: [
      "Buoyant force equals weight of displaced fluid",
      "Fluid velocity increases in constrictions",
      "Force equals mass times acceleration",
      "Pressure decreases with depth"
    ],
    answer: 0
  },
  {
    question: "A stone weighs 400N in air and 225N in water. Find its volume.",
    options: [
      "0.0225 m³",
      "0.0178 m³",
      "0.0100 m³",
      "0.0125 m³"
    ],
    answer: 1
  },
  {
    question: "State Bernoulli’s equation.",
    options: [
      "F = ma",
      "p/γ + V²/2g + z = constant",
      "Q = AV",
      "p = ρgh"
    ],
    answer: 1
  },
  {
    question: "Assumptions of Bernoulli’s equation include:",
    options: [
      "Compressible flow, unsteady, viscous",
      "Turbulent flow, compressible fluid",
      "Flow with heat transfer",
      "Ideal fluid, steady flow, incompressible, no friction, along streamline"
    ],
    answer: 3
  },
  {
    question: "A pipe (90mm diameter) carries water at 2 m/s, pressure 350 kN/m², 8m above datum. Find total head.",
    options: [
      "25 m",
      "43.88 m",
      "50 m",
      "35 m"
    ],
    answer: 1
  },
  {
    question: "Define total head.",
    options: [
      "Velocity of flow",
      "Sum of pressure head, velocity head, and elevation head",
      "Height of water only",
      "Pressure at the pipe inlet"
    ],
    answer: 1
  },
  {
    question: "What is stagnation pressure?",
    options: [
      "Atmospheric pressure",
      "Pressure due to fluid weight",
      "Pressure when fluid is brought to rest isentropically (total pressure)",
      "Pressure at the pipe outlet"
    ],
    answer: 2
  },
  {
    question: "What is dimensional homogeneity?",
    options: [
      "Pressure has no units",
      "Dimensions of force only",
      "All terms in an equation have identical dimensions",
      "Length and time are same"
    ],
    answer: 2
  },
  {
    question: "State Buckingham’s π-theorem.",
    options: [
      "It relates velocity and pressure",
      "All variables must have dimensions",
      "If ‘n’ variables involve ‘m’ fundamental dimensions, they form (n - m) dimensionless π-terms",
      "No dimensionless terms exist"
    ],
    answer: 2
  },
  {
    question: "List advantages of dimensional analysis.",
    options: [
      "Makes calculations difficult",
      "Increases variables",
      "Reduces variables, simplifies experiments, checks validity of equations",
      "Complicates experimental setups"
    ],
    answer: 2
  },
  {
    question: "Dimensions of dynamic viscosity (μ) are:",
    options: [
      "ML⁻¹T⁻¹",
      "MLT⁻¹",
      "L²T⁻¹",
      "MT⁻²"
    ],
    answer: 0
  },
  {
    question: "Dimensions of kinematic viscosity (ν) are:",
    options: [
      "MT⁻²",
      "L²T⁻¹",
      "M⁻¹L²T",
      "ML⁻¹T⁻¹"
    ],
    answer: 1
  },
  {
    question: "Resistance (F) of a sphere depends on D, V, ρ, μ. Express as π-terms.",
    options: [
      "F = ρVμ/D",
      "F = ρD²V² f(μ/ρVD)",
      "F = μD²V²",
      "F = D²V/ρμ"
    ],
    answer: 1
  },
  {
    question: "What are repeating variables?",
    options: [
      "Variables chosen to form dimensionless groups, e.g., length, velocity, density",
      "Variables used repeatedly in calculations",
      "Variables with no dimensions",
      "Variables that vary with time"
    ],
    answer: 0
  },
  {
    question: "Define Reynolds number (Re).",
    options: [
      "Ratio of inertial forces to viscous forces: Re = ρVD/μ",
      "Ratio of pressure to velocity",
      "Ratio of density to viscosity",
      "Ratio of weight to volume"
    ],
    answer: 0
  },
  {
    question: "Define Froude number (Fr).",
    options: [
      "Ratio of velocity to density",
      "Ratio of inertial to gravitational forces: Fr = V/√(gL)",
      "Ratio of pressure to velocity",
      "Ratio of mass to volume"
    ],
    answer: 1
  },
  {
    question: "Define Mach number (M).",
    options: [
      "Ratio of flow speed to sound speed: M = V/C",
      "Ratio of density to velocity",
      "Ratio of velocity to pressure",
      "Ratio of mass to weight"
    ],
    answer: 0
  },
  {
    question: "What is open channel flow?",
    options: [
      "Flow in closed pipes only",
      "Flow with free surface exposed to atmosphere (e.g., rivers, canals)",
      "Flow inside tanks only",
      "Flow without gravity effects"
    ],
    answer: 1
  },
  {
    question: "Define Chezy’s formula.",
    options: [
      "V = C√(RS), where C = Chezy’s coefficient, R = hydraulic radius, S = slope",
      "V = RS/C",
      "V = C/R",
      "V = S√(RC)"
    ],
    answer: 0
  },
  {
    question: "What is the most economical channel section?",
    options: [
      "Cross-section with minimum wetted perimeter for maximum discharge",
      "Circular section",
      "Rectangular with no slope",
      "Section with maximum perimeter"
    ],
    answer: 0
  },
  {
    question: "For a rectangular channel, optimal width-to-depth ratio is:",
    options: [
      "b = y",
      "b = 2y (width is twice the depth)",
      "b = 3y",
      "b = 0.5y"
    ],
    answer: 1
  },
  {
    question: "A trapezoidal channel (side slope 3:5) carries 1.2 m³/s. Find optimal dimensions if C = 70.",
    options: [
      "b ≈ 1.12 m, y ≈ 0.97 m",
      "b ≈ 3 m, y ≈ 2 m",
      "b ≈ 0.5 m, y ≈ 0.5 m",
      "b ≈ 2 m, y ≈ 1 m"
    ],
    answer: 0
  },
  {
    question: "Define Froude number in open channels.",
    options: [
      "Fr = V/√(gy); if Fr < 1: subcritical, Fr > 1: supercritical",
      "Fr = g/Vy",
      "Fr = V/gy",
      "Fr = √(gy)/V"
    ],
    answer: 0
  },
  {
    question: "What is specific energy?",
    options: [
      "E = y + V²/2g (energy per unit weight relative to channel bed)",
      "E = yV/g",
      "E = y/g + V",
      "E = V²/g"
    ],
    answer: 0
  },
  {
    question: "Differentiate between GVF and RVF.",
    options: [
      "GVF: gradual depth change; RVF: sudden depth change (e.g., hydraulic jump)",
      "GVF applies to gases only",
      "GVF: sudden depth change; RVF: gradual depth change",
      "Both are same"
    ],
    answer: 0
  },
  {
    question: "What is geometric similarity?",
    options: [
      "Prototype is smaller than model",
      "Model and prototype have identical shapes but scaled sizes",
      "Model and prototype have different shapes",
      "Model is smaller, shape irrelevant"
    ],
    answer: 1
  },
  {
    question: "Define dynamic similarity.",
    options: [
      "Forces in model and prototype are scaled proportionally",
      "Only shape matters",
      "Scale has no effect",
      "Velocity is same in model and prototype"
    ],
    answer: 0
  },
  {
    question: "A 1:20 scale model is tested with water. Prototype uses air. Find pressure drop if model Δp = 2 bar.",
    options: [
      "Pressure drops are equal",
      "Pressure drop is unrelated to scale",
      "Use scaling laws like Euler number to find prototype pressure drop",
      "Prototype pressure drop is twice model’s"
    ],
    answer: 2
  },
  {
    question: "What is Weber number?",
    options: [
      "Ratio of viscous to inertial forces",
      "Ratio of inertial to surface tension forces: We = ρV²L/σ",
      "Ratio of pressure to velocity",
      "Ratio of density to velocity"
    ],
    answer: 1
  },
  {
    question: "Water flows at 3 m/s in a pipe. Downstream, velocity = 12 m/s, elevation drop = 8m. Find pressure change if p₁ = 260 kN/m².",
    options: [
      "Pressure increases by 100 kPa",
      "Use Bernoulli’s equation to calculate p₂",
      "Pressure change is zero",
      "Pressure decreases by 50 kPa"
    ],
    answer: 1
  },
  {
    question: "A pipe tapers from 1.2m to 0.6m diameter. Flow rate = 0.1 m³/s. Find pressure at lower end if p₁ = 73.575 kPa.",
    options: [
      "Pressure remains same",
      "Pressure doubles",
      "Use continuity and Bernoulli’s equations to find p₂",
      "Pressure halves"
    ],
    answer: 2
  },
  {
    question: "Calculate Reynolds number for oil (μ = 0.4 Ns/m², ρ = 900 kg/m³) in a 20mm pipe at 2.5 m/s.",
    options: [
      "9000",
      "112.5",
      "2000",
      "400"
    ],
    answer: 1
  },
  {
    question: "Find Mach number for aircraft at 900 ft/s (sound speed = 980 ft/s).",
    options: [
      "0.92",
      "1.08",
      "0.5",
      "1.5"
    ],
    answer: 0
  },
  {
    question: "Design a trapezoidal channel (Q = 6 m³/s, V = 1.5 m/s, side slope 1:1.5).",
    options: [
      "b = 0.6y, y ≈ 1.9m, b ≈ 1.14m",
      "b = y, y = 1m",
      "b = 2y, y = 0.5m",
      "b = 3y, y = 2m"
    ],
    answer: 0
  },
  {
    question: "What is the effect of increasing temperature on fluid viscosity?",
    options: [
      "Viscosity increases for gases, decreases for liquids",
      "Viscosity decreases for both",
      "Viscosity increases for both",
      "Viscosity decreases for gases, increases for liquids"
    ],
    answer: 0
  },
  {
    question: "A body placed in fluid sinks if:",
    options: [
      "Weight < Upthrust",
      "Weight > Upthrust",
      "Weight = Upthrust",
      "Weight is zero"
    ],
    answer: 1
  },
  {
    question: "Which of the following is NOT a property of fluids?",
    options: [
      "Flow",
      "Fixed shape",
      "Take shape of container",
      "Continuous deformation under shear"
    ],
    answer: 1
  },
  {
    question: "Hydrostatic pressure at a point in a fluid depends on:",
    options: [
      "Depth below free surface",
      "Velocity of fluid",
      "Shape of container",
      "Temperature only"
    ],
    answer: 0
  },
  {
    question: "A fluid is called compressible if:",
    options: [
      "Density changes significantly with pressure",
      "Density remains constant",
      "Viscosity changes",
      "It flows"
    ],
    answer: 0
  },
  {
    question: "Pascal’s law is applied in:",
    options: [
      "Hydraulic press",
      "Water hammer",
      "Bernoulli’s theorem",
      "Viscosity measurement"
    ],
    answer: 0
  },
  {
    question: "Flow in a pipe is turbulent if Reynolds number is:",
    options: [
      "Less than 2000",
      "Between 2000 and 4000",
      "More than 4000",
      "Zero"
    ],
    answer: 2
  },
  {
    question: "Surface tension is caused by:",
    options: [
      "Cohesive forces between liquid molecules",
      "Adhesion with container",
      "Gravity",
      "Viscosity"
    ],
    answer: 0
  },
  {
    question: "In Bernoulli’s equation, the velocity head term is:",
    options: [
      "p/γ",
      "V²/2g",
      "z",
      "Q/A"
    ],
    answer: 1
  },
  {
    question: "Which of the following best describes laminar flow?",
    options: [
      "Chaotic flow",
      "Streamlined flow with layers",
      "High turbulence",
      "Irregular flow"
    ],
    answer: 1
  },
  {
    question: "Which dimensionless number predicts flow regime in pipes?",
    options: [
      "Froude number",
      "Reynolds number",
      "Mach number",
      "Weber number"
    ],
    answer: 1
  },
  {
    question: "The hydraulic radius R is defined as:",
    options: [
      "Area / Wetted perimeter",
      "Perimeter / Area",
      "Diameter / 4",
      "Velocity / Depth"
    ],
    answer: 0
  },
  {
    question: "The shape of a liquid surface in a capillary tube is due to:",
    options: [
      "Viscosity",
      "Surface tension and adhesion",
      "Density",
      "Temperature"
    ],
    answer: 1
  },
  {
    question: "What causes hydraulic jump?",
    options: [
      "Sudden change from supercritical to subcritical flow",
      "Slow flow",
      "Change in temperature",
      "Viscosity change"
    ],
    answer: 0
  },
  {
    question: "In open channel flow, flow is critical when:",
    options: [
      "Froude number = 1",
      "Reynolds number = 1",
      "Mach number = 1",
      "Weber number = 1"
    ],
    answer: 0
  },
  {
    question: "The discharge Q is related to velocity V and area A by:",
    options: [
      "Q = A/V",
      "Q = AV",
      "Q = A+V",
      "Q = V/A"
    ],
    answer: 1
  },
  {
    question: "The force causing fluid to resist relative motion between layers is called:",
    options: [
      "Pressure",
      "Viscosity",
      "Gravity",
      "Buoyancy"
    ],
    answer: 1
  },
  {
    question: "The SI unit of pressure is:",
    options: [
      "Pascal (Pa)",
      "Newton (N)",
      "Joule (J)",
      "Watt (W)"
    ],
    answer: 0
  },
  {
    question: "Which of the following fluids has zero viscosity?",
    options: [
      "Water",
      "Air",
      "Ideal fluid",
      "Honey"
    ],
    answer: 2
  },
  {
    question: "The velocity of fluid at the free surface in an open channel is generally:",
    options: [
      "Maximum",
      "Minimum",
      "Zero",
      "Equal to average velocity"
    ],
    answer: 0
  },
  {
    question: "Which law relates shear stress and velocity gradient in fluids?",
    options: [
      "Pascal’s law",
      "Newton’s law of viscosity",
      "Archimedes principle",
      "Bernoulli’s theorem"
    ],
    answer: 1
  },
  {
    question: "What is the effect of roughness on pipe flow?",
    options: [
      "Increases turbulence and friction losses",
      "Decreases flow velocity",
      "Has no effect",
      "Increases viscosity"
    ],
    answer: 0
  },
  {
    question: "What is the effect of temperature on density of liquids?",
    options: [
      "Density increases with temperature",
      "Density decreases with temperature",
      "Density remains constant",
      "Density doubles with temperature"
    ],
    answer: 1
  },
  {
    question: "An example of compressible fluid is:",
    options: [
      "Water",
      "Air",
      "Oil",
      "Honey"
    ],
    answer: 1
  },
  {
    question: "The energy line in fluid flow represents:",
    options: [
      "Total energy head of the fluid",
      "Pressure head only",
      "Velocity head only",
      "Elevation head only"
    ],
    answer: 0
  },
  {
    question: "If velocity in a pipe increases, pressure:",
    options: [
      "Increases",
      "Decreases",
      "Remains constant",
      "Depends on temperature"
    ],
    answer: 1
  },
  {
    question: "The principle used in hydraulic lifts is:",
    options: [
      "Bernoulli’s theorem",
      "Pascal’s law",
      "Archimedes principle",
      "Newton’s law"
    ],
    answer: 1
  },
  {
    question: "Which is the main cause of fluid flow?",
    options: [
      "Pressure difference",
      "Gravity only",
      "Temperature difference",
      "Surface tension"
    ],
    answer: 0
  },
  {
    question: "The major losses in pipe flow are due to:",
    options: [
      "Friction and turbulence",
      "Temperature change",
      "Pressure increase",
      "Surface tension"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a cause of conflict?",
    options: [
      "Identity",
      "Economic conditions",
      "Tolerance"
    ],
    answer: 2
  }
];

// UI Elements
const questionNav = document.getElementById('question-nav');
const startScreen = document.getElementById('start-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const app = document.getElementById('app');
const timerEl = document.getElementById('timer');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const scoreEl = document.getElementById('score');
const resultsList = document.getElementById('results-list');
const retryBtn = document.getElementById('retry-btn');
const customConfirm = document.getElementById('customConfirm');
const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Quiz variables
const TOTAL_QUESTIONS = 45;
const TIME_LIMIT = 45 * 60; // in seconds
let selectedQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timer;
let timeRemaining = TIME_LIMIT;

// Initialize quiz
startQuizBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  app.style.display = 'flex';
  initQuiz();
});

function initQuiz() {
  // Shuffle and pick questions
  const shuffled = shuffleArray([...questions]);
  selectedQuestions = shuffled.slice(0, Math.min(TOTAL_QUESTIONS, questions.length));

  currentQuestionIndex = 0;
  userAnswers = new Array(selectedQuestions.length).fill(null);

  timeRemaining = TIME_LIMIT;
  updateTimerDisplay();

  showQuestion();

  prevBtn.disabled = true;
  nextBtn.disabled = false;
  submitBtn.disabled = true;

  quizContainer.style.display = 'flex';
  resultContainer.style.display = 'none';

  startTimer();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(timer);
      finishQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  let min = Math.floor(timeRemaining / 60);
  let sec = timeRemaining % 60;
  timerEl.textContent = `Time Left: ${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}

function renderQuestionNav() {
  questionNav.innerHTML = '';
  selectedQuestions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.textContent = i + 1;
    if (userAnswers[i] !== null) btn.classList.add('answered');
    if (i === currentQuestionIndex) btn.classList.add('current');
    btn.addEventListener('click', () => {
      currentQuestionIndex = i;
      showQuestion();
      renderQuestionNav();
    });
    questionNav.appendChild(btn);
  });
}

function showQuestion() {
  const q = selectedQuestions[currentQuestionIndex];
  questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
  questionTextEl.textContent = q.question;

  optionsContainer.innerHTML = '';

  q.options.forEach((optionText, i) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.textContent = String.fromCharCode(65 + i) + ". " + optionText;
    
    // Add keyboard shortcut badge
    const keyBadge = document.createElement('div');
    keyBadge.className = 'key-badge';
    keyBadge.textContent = String.fromCharCode(65 + i);
    optionDiv.appendChild(keyBadge);

    if(userAnswers[currentQuestionIndex] === i) {
      optionDiv.classList.add('selected');
    }

    optionDiv.addEventListener('click', () => {
      selectOption(i);
    });

    optionsContainer.appendChild(optionDiv);
  });

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = currentQuestionIndex === selectedQuestions.length - 1;
  submitBtn.disabled = userAnswers[currentQuestionIndex] === null;

  renderQuestionNav();
}

function selectOption(optionIndex) {
  userAnswers[currentQuestionIndex] = optionIndex;
  
  Array.from(optionsContainer.children).forEach((optEl, idx) => {
    optEl.classList.toggle('selected', idx === optionIndex);
  });

  submitBtn.disabled = false;
  renderQuestionNav();
}

// Navigation buttons
prevBtn.addEventListener('click', () => {
  if(currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  if(currentQuestionIndex < selectedQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
});

// Submit button shows custom confirmation dialog
submitBtn.addEventListener('click', () => {
  customConfirm.style.display = 'flex';
});

// Confirm dialog buttons
confirmYes.addEventListener('click', () => {
  customConfirm.style.display = 'none';
  finishQuiz();
});

confirmNo.addEventListener('click', () => {
  customConfirm.style.display = 'none';
});

function finishQuiz() {
  clearInterval(timer);
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'flex';

  let correctCount = 0;
  resultsList.innerHTML = '';

  selectedQuestions.forEach((q, idx) => {
    const userAnsIndex = userAnswers[idx];
    const isCorrect = userAnsIndex === q.answer;
    if (isCorrect) correctCount++;

    const userAnswerText = userAnsIndex !== null ? q.options[userAnsIndex] : 'No Answer';
    const correctAnswerText = q.options[q.answer];

    const div = document.createElement('div');
    div.className = 'result-question';
    div.innerHTML = `
      <div><strong>Q${idx + 1}:</strong> ${q.question}</div>
      <div>Your answer: <span class="${isCorrect ? 'correct' : 'wrong'}">${userAnswerText}</span></div>
      ${isCorrect ? '' : `<div>Correct answer: <span class="correct">${correctAnswerText}</span></div>`}
    `;
    resultsList.appendChild(div);
  });

  scoreEl.textContent = `You answered ${correctCount} out of ${selectedQuestions.length} questions correctly.`;
  
  // Add performance comment
  let comment = "";
  const percentage = Math.round((correctCount / selectedQuestions.length) * 100);
  
  if (percentage >= 80) comment = "Excellent work! You have a strong grasp of this material.";
  else if (percentage >= 60) comment = "Good effort! Review the incorrect answers to improve.";
  else comment = "Keep studying! Focus on the topics you missed.";
  
  scoreEl.innerHTML += `<div style="margin-top:10px;font-weight:normal">${comment}</div>`;
}

retryBtn.addEventListener('click', () => {
  initQuiz();
});

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Ignore if focus is on input elements
  if (['INPUT', 'TEXTAREA', 'BUTTON'].includes(document.activeElement.tagName)) {
    return;
  }
  
  const key = e.key.toUpperCase();
  
  // Option selection
  if (key >= 'A' && key <= 'E') {
    const optionIndex = key.charCodeAt(0) - 65;
    const currentOptions = selectedQuestions[currentQuestionIndex]?.options || [];
    
    if (optionIndex < currentOptions.length) {
      selectOption(optionIndex);
    }
  }
  
  // Navigation
  switch(key) {
    case 'P':
      if (!prevBtn.disabled) prevBtn.click();
      break;
    case 'N':
      if (!nextBtn.disabled) nextBtn.click();
      break;
  }
});
