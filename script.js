const questions = [
  // CE 222 Tutorial Questions 5
  {
    question: "The property by which a body returns to its original shape after removal of the force is called:",
    options: ["Plasticity", "Ductility", "Elasticity", "Malleability", "Hardness"],
    answer: 2
  },
  {
    question: "The property of a material by which it can be beaten or rolled into thin plates is called:",
    options: ["Elasticity", "Plasticity", "Ductility", "Malleability", "Hardness"],
    answer: 3
  },
  {
    question: "Which law is also called as the elasticity law?",
    options: ["Pascal's Law", "Hooke's Law", "Newton's Law", "Archimedes' Principle", "Boyle's Law"],
    answer: 1
  },
  {
    question: "The materials which have the same elastic properties in all directions are called:",
    options: ["Anisotropic materials", "Isotropic materials", "Orthotropic materials", "Homogeneous materials", "Composite materials"],
    answer: 1
  },
  {
    question: "A member which does not regain its original shape after removal of the load producing deformation is said to be:",
    options: ["Elastic", "Plastic", "Brittle", "Ductile", "Malleable"],
    answer: 1
  },
  {
    question: "The body will regain its previous shape and size only when the deformation caused by the external forces, is within a certain limit. What is that limit?",
    options: ["Proportional limit", "Elastic limit", "Yield point", "Ultimate stress", "Breaking point"],
    answer: 1
  },
  {
    question: "As the elastic limit reaches, tensile strain:",
    options: ["Increases", "Decreases", "Increases more rapidly", "Decreases more rapidly", "Becomes zero"],
    answer: 2
  },
  {
    question: "What kind of elastic materials are derived from a strain energy density function?",
    options: ["Linear elastic materials", "Non-linear elastic materials", "Hyperelastic materials", "Orthotropic materials", "Isotropic materials"],
    answer: 2
  },
  {
    question: "What is the number that measures an object's resistance to being deformed elastically when stress is applied to it?",
    options: ["Poisson's ratio", "Modulus of elasticity", "Bulk modulus", "Shear modulus", "Rigidity modulus"],
    answer: 1
  },
  {
    question: "A cube subjected to three mutually perpendicular stress of equal intensity 'p' expenses a volumetric strain.",
    options: [
      "p/E (1 - 2μ)",
      "3p/E (1 - 2μ)",
      "3p/E (1 + 2μ)",
      "p/E (1 + 2μ)",
      "p/E"
    ],
    answer: 0
  },
  {
    question: "The strain energy stored in a solid circular shaft subjected to shear stress (τ) is: (Where, G= Modulus of rigidity for the shaft material)",
    options: [
      "τ² / 2G",
      "τ² / 4G",
      "τ² / G",
      "τ² / 8G",
      "(τ² / 2G) × Volume of the shaft"
    ],
    answer: 4
  },
  {
    question: "The strain energy stored in a solid circular shaft in torsion, subjected to shear stress (τ), is: (Where, G= Modulus of rigidity for the shaft material)",
    options: [
      "(τ² / 2G) × Volume of the shaft",
      "τ² / G",
      "τ² / 2G",
      "τ² / 4G",
      "τ² / 8G"
    ],
    answer: 0
  },
  {
    question: "The stress induced in a body, when suddenly loaded, is ______ the same load is applied gradually.",
    options: ["Half of", "Equal to", "Twice", "Four times", "Three times"],
    answer: 2
  },
  {
    question: "A material obeys Hooke's law up to:",
    options: ["The elastic limit", "The ultimate stress point", "The proportional limit", "The yield point", "The breaking point"],
    answer: 2
  },
  {
    question: "The torque transmitted by a solid shaft of diameter (D) is: (where τ= Maximum allowable shear stress)",
    options: [
      "π/16 × τ × D³",
      "π/32 × τ × D³",
      "π/64 × τ × D³",
      "π/8 × τ × D³",
      "π/16 × τ × D²"
    ],
    answer: 0
  },
  {
    question: "The torque transmitted by a hollow shaft of outer diameter (d₁) and inner diameter (d₂) is: (where, τ= Maximum allowable shear stress)",
    options: [
      "π/16 × τ × (d₁⁴ - d₂⁴) / d₁",
      "π/32 × τ × (d₁⁴ - d₂⁴) / d₁",
      "π/16 × τ × (d₁⁴ - d₂⁴) / d₂",
      "π/32 × τ × (d₁⁴ - d₂⁴) / d₂",
      "π/16 × τ × d₁³"
    ],
    answer: 2
  },
  {
    question: "If Tₕ is the torque resisting capacity of a hollow shaft and Tₛ is that of a solid shaft, of the same material, length and weight. Then,",
    options: [
      "Tₕ < Tₛ",
      "Tₕ = Tₛ",
      "Tₕ > Tₛ",
      "Tₕ = 2 Tₛ",
      "Tₕ = 4 Tₛ"
    ],
    answer: 2
  },
  {
    question: "If Kₕ is the torque resisting capacity of a hollow shaft and Kₛ is that of a solid shaft, of the same material, length and weight. Then,",
    options: [
      "Kₕ < Kₛ",
      "Kₕ = Kₛ",
      "Kₕ > Kₛ",
      "Kₕ = 2 Kₛ",
      "Kₕ = 4 Kₛ"
    ],
    answer: 2
  },
  {
    question: "After reaching the yielding stage while testing a mild steel specimen, strain:",
    options: [
      "Increases slowly",
      "Increases rapidly",
      "Decreases",
      "Remains constant",
      "Becomes zero"
    ],
    answer: 1
  },
  {
    question: "Principal planes are planes having:",
    options: [
      "Only normal stress",
      "Only shear stress",
      "No normal stress",
      "No shear stress",
      "Both normal and shear stress"
    ],
    answer: 3
  },
  {
    question: "If the slenderness ratio for a column is 1....",
    options: [
      "It is a short column",
      "It is a long column",
      "It is a medium column",
      "It is not a column",
      "It is an unstable column"
    ],
    answer: 0
  },

  // CE 222 Tutorial Questions 6
  {
    question: "Slope in the beam at any point is measured in:",
    options: ["Radians", "Meters", "Degrees", "Centimeters", "Newtons"],
    answer: 0
  },
  {
    question: "Elastic curve is also known as:",
    options: [
      "Bending moment diagram",
      "Shear force diagram",
      "Deflection curve",
      "Deflected curve",
      "Stress-strain curve"
    ],
    answer: 2
  },
  {
    question: "Which of the following method is not used for determining slope and deflection at a point?",
    options: [
      "Double integration method",
      "Moment area method",
      "Conjugate beam method",
      "Force method",
      "Strain energy method"
    ],
    answer: 3
  },
  {
    question: "The slope is denoted by:",
    options: ["δ", "θ", "ε", "σ", "τ"],
    answer: 1
  },
  {
    question: "In cantilever beams the slope is:",
    options: [
      "Maximum at the free end",
      "Zero at the free end",
      "Maximum at the fixed end",
      "Zero at the fixed end",
      "Uniform throughout the beam"
    ],
    answer: 0
  },
  {
    question: "Slope is maximum at supported beams.",
    options: ["True", "False"],
    answer: 0
  },
  {
    question: "Mohr's theorem- 1 states:",
    options: [
      "The change in slope between any two points on the elastic curve is equal to the area of the bending moment diagram between those two points divided by EI.",
      "The deflection at any point is equal to the moment of the area of the bending moment diagram between that point and a point of zero slope, about the point of zero slope.",
      "The deflection at any point is equal to the moment of the area of the bending moment diagram between that point and the support, about that point, divided by EI.",
      "The deflection at any point is equal to the area of the bending moment diagram between that point and a point of zero slope, divided by EI.",
      "The slope at any point is zero."
    ],
    answer: 0
  },
  {
    question: "Using Mohr's theorem, calculate the maximum slope of a cantilever beam if the bending moment area diagram is 90 kNm². Take EI = 4000 kNm².",
    options: [
      "0.0225 radians",
      "0.045 radians",
      "0.00225 radians",
      "0.0045 radians",
      "0.225 radians"
    ],
    answer: 1
  },
  {
    question: "Contour canals are also called as:",
    options: [
      "Side slope canals",
      "Watershed canals",
      "Ridge canals",
      "Side canals",
      "All of the above"
    ],
    answer: 4
  },
  {
    question: "A generally higher side is left without bank. So it is also called a single bank canal.",
    options: ["True", "False"],
    answer: 0
  },

  // CE 222 Tutorial Questions 3
  {
    question: "____ of a beam is a measure of its resistance against deflection.",
    options: ["Shear force", "Bending moment", "Flexural rigidity", "Torsional rigidity", "Section modulus"],
    answer: 2
  },
  {
    question: "The maximum induced stresses should be within the safe permissible stresses to ensure ______ of the beam.",
    options: ["Deflection", "Strength", "Stiffness", "Durability", "Stability"],
    answer: 1
  },
  {
    question: "Elastic line is also called as:",
    options: [
      "Shear force diagram",
      "Bending moment diagram",
      "Deflection curve",
      "Elastic curve",
      "Neutral axis"
    ],
    answer: 3
  },
  {
    question: "In simply supported beams, the slope is ______ at supports.",
    options: ["Zero", "Maximum", "Minimum", "Uniform", "Variable"],
    answer: 0
  },
  {
    question: "In simply supported beam deflection is maximum at:",
    options: [
      "The supports",
      "The point of maximum shear force",
      "The center",
      "The point of maximum bending moment",
      "The point of zero bending moment"
    ],
    answer: 2
  },
  {
    question: "Calculate the maximum deflection of a simply supported beam if the maximum slope at A is 0.0075 radians and the distance of centre of gravity of bending moment diagram to support A is 1.33 metres.",
    options: [
      "0.005 m",
      "0.009975 m",
      "0.01995 m",
      "0.0025 m",
      "0.0075 m"
    ],
    answer: 1
  },
  {
    question: "____ is the best example for accelerator (admixture).",
    options: ["Calcium chloride", "Gypsum", "Fly ash", "Silica fume", "Water reducer"],
    answer: 0
  },
  {
    question: "____ is used to reduce the time for hardening of concrete.",
    options: [
      "Retarder",
      "Plasticizer",
      "Air-entraining agent",
      "Accelerator",
      "Superplasticizer"
    ],
    answer: 3
  },
  {
    question: "The full form of LEED is:",
    options: [
      "Leadership in Energy and Environmental Design",
      "Leading in Engineering and Economic Development",
      "Leadership in Environmental and Economic Development",
      "Leading in Energy and Environmental Design",
      "Leading Engineering and Environmental Design"
    ],
    answer: 0
  },
  {
    question: "____ has a lower heat of hydration.",
    options: [
      "Ordinary Portland Cement",
      "Rapid Hardening Cement",
      "Low Heat Cement",
      "High Alumina Cement",
      "Portland Pozzolana Cement"
    ],
    answer: 2
  },
  {
    question: "The factors that influence rate of hydration is:",
    options: [
      "Fineness of cement",
      "Water-cement ratio",
      "Temperature",
      "Chemical composition of cement",
      "All of the above"
    ],
    answer: 4
  },
  {
    question: "The steel suits best to reinforcement with concrete is:",
    options: [
      "Mild steel",
      "High tensile steel",
      "Carbon steel",
      "Stainless steel",
      "None of the above"
    ],
    answer: 0
  },
  {
    question: "Meander ratio is the ratio of meander belt to:",
    options: [
      "Meander length",
      "Meander width",
      "Channel width",
      "Wavelength",
      "Amplitude"
    ],
    answer: 3
  },

  // CE 222 Tutorial Questions 4
  {
    question: "According to Lami's theorem.",
    options: [
      "If three forces acting at a point are in equilibrium, each force is proportional to the sine of the angle between the other two.",
      "If three forces acting at a point are in equilibrium, the sum of their horizontal components is zero.",
      "If three forces acting at a point are in equilibrium, the sum of their vertical components is zero.",
      "If three forces acting at a point are in equilibrium, the sum of their moments is zero.",
      "None of the above."
    ],
    answer: 0
  },
  {
    question: "A number of forces acting at a point will be in equilibrium if:",
    options: [
      "Their resultant is zero.",
      "They are all equal in magnitude.",
      "They are all concurrent.",
      "They are all parallel.",
      "They are all perpendicular."
    ],
    answer: 0
  },
  {
    question: "The center of gravity of a triangle lies at the point of:",
    options: [
      "Intersection of its altitudes",
      "Intersection of its medians",
      "Intersection of its angle bisectors",
      "Intersection of its perpendicular bisectors",
      "All of the above"
    ],
    answer: 1
  },
  {
    question: "Angle of friction is the:",
    options: [
      "Angle between the normal reaction and the resultant of the normal reaction and the limiting friction.",
      "Angle between the normal reaction and the applied force.",
      "Angle between the applied force and the resultant of the normal reaction and the limiting friction.",
      "Angle between the limiting friction and the normal reaction.",
      "None of the above."
    ],
    answer: 0
  },
  {
    question: "Limiting force of friction is the:",
    options: [
      "Maximum force of friction that can be developed.",
      "Minimum force of friction that can be developed.",
      "Force of friction when the body is in motion.",
      "Force of friction when the body is at rest.",
      "Frictional force when the body is about to move."
    ],
    answer: 4
  },
  {
    question: "The necessary condition for forces to be in equilibrium is that these should be:",
    options: [
      "Concurrent",
      "Coplanar",
      "Parallel",
      "Both concurrent and coplanar",
      "Collinear"
    ],
    answer: 3
  },
  {
    question: "Which of the following is the example of lever of first order?",
    options: [
      "Nutcracker",
      "Sugar tongs",
      "Beam balance",
      "Wheelbarrow",
      "All of the above"
    ],
    answer: 2
  },
  {
    question: "A cable with a uniformly distributed load per horizontal metre run will take the following shape.",
    options: [
      "Parabola",
      "Catenary",
      "Hyperbola",
      "Circle",
      "Straight line"
    ],
    answer: 0
  },
  {
    question: "In determining stresses in frames by methods of sections, the frame is divided into two parts by an imaginary section drawn in such a way as not to cut more than:",
    options: [
      "One member",
      "Two members",
      "Three members",
      "Four members",
      "Five members"
    ],
    answer: 2
  },
  {
    question: "According to principle of transmissibility of forces, the effect of a force upon a body is:",
    options: [
      "Dependent on its point of application.",
      "Independent of its point of application.",
      "The same at any point along its line of action.",
      "The same at any point on the body.",
      "None of the above."
    ],
    answer: 2
  },
  {
    question: "Which of the following do not have identical dimensions?",
    options: [
      "Moment of inertia and product of inertia",
      "Moment of a force and work",
      "Stress and pressure",
      "Force and weight",
      "Power and energy"
    ],
    answer: 1
  },
  {
    question: "If a number of forces act simultaneously on a particle, it is possible:",
    options: [
      "To replace them by a single force.",
      "To replace them by a single force and a couple.",
      "To replace them by a couple only.",
      "To replace them by a moment only.",
      "None of the above."
    ],
    answer: 0
  },

  // Additional generic engineering questions to reach 150+
  {
    question: "What is the SI unit of stress?",
    options: ["Newton", "Pascal", "Joule", "Watt", "Newton-meter"],
    answer: 1
  },
  {
    question: "Modulus of rigidity is also known as:",
    options: ["Young's modulus", "Shear modulus", "Bulk modulus", "Poisson's ratio", "Elastic modulus"],
    answer: 1
  },
  {
    question: "The ratio of lateral strain to longitudinal strain is called:",
    options: ["Bulk modulus", "Shear modulus", "Poisson's ratio", "Young's modulus", "Modulus of elasticity"],
    answer: 2
  },
  {
    question: "The maximum bending moment in a simply supported beam carrying a uniformly distributed load w per unit length and span L is:",
    options: ["wL²/8", "wL/2", "wL²/12", "wL²/6", "wL"],
    answer: 0
  },
  {
    question: "Buckling occurs in columns due to:",
    options: ["Shear stress", "Compressive stress", "Tensile stress", "Bending stress", "Torsion"],
    answer: 1
  },
  {
    question: "The neutral axis of a beam cross section is:",
    options: [
      "Where the bending stress is maximum",
      "Where the bending stress is zero",
      "Where the shear stress is maximum",
      "Where the beam breaks",
      "Where the bending moment is zero"
    ],
    answer: 1
  },
  {
    question: "A simply supported beam of length L carries a point load P at its midspan. The maximum bending moment is:",
    options: ["PL/4", "PL/2", "PL/8", "PL", "2PL"],
    answer: 0
  },
  {
    question: "The deflection at the free end of a cantilever beam of length L under an end load P is:",
    options: ["PL³ / 3EI", "PL³ / 2EI", "PL² / 3EI", "PL / 3EI", "PL³ / 6EI"],
    answer: 0
  },
  {
    question: "What is the primary purpose of a strain gauge?",
    options: [
      "To measure displacement",
      "To measure stress",
      "To measure strain",
      "To measure temperature",
      "To measure force"
    ],
    answer: 2
  },
  {
    question: "The factor of safety is defined as:",
    options: [
      "Ultimate load / Working load",
      "Working load / Ultimate load",
      "Yield load / Ultimate load",
      "Yield load / Working load",
      "Ultimate load / Yield load"
    ],
    answer: 0
  },
  {
    question: "The maximum shear stress theory is also known as:",
    options: [
      "Tresca theory",
      "Von Mises theory",
      "Maximum distortion energy theory",
      "Rankine theory",
      "Saint-Venant theory"
    ],
    answer: 0
  },
  {
    question: "Young's modulus is the ratio of:",
    options: [
      "Stress / Strain",
      "Strain / Stress",
      "Shear stress / Shear strain",
      "Bulk stress / Bulk strain",
      "None of the above"
    ],
    answer: 0
  },
  {
    question: "Bulk modulus is the ratio of:",
    options: [
      "Volumetric stress / Volumetric strain",
      "Shear stress / Shear strain",
      "Tensile stress / Tensile strain",
      "Bending stress / Bending strain",
      "None of the above"
    ],
    answer: 0
  },
  {
    question: "Poisson’s ratio for most materials lies between:",
    options: [
      "0 and 0.5",
      "0.5 and 1",
      "-1 and 0",
      "-0.5 and 0",
      "1 and 2"
    ],
    answer: 0
  },
  {
    question: "The moment of inertia of a rectangle about its centroidal axis is:",
    options: [
      "bh³/12",
      "bh³/3",
      "bh²/12",
      "bh³/6",
      "bh²/6"
    ],
    answer: 0
  },
  {
    question: "In a cantilever beam with a point load at the free end, the maximum bending moment occurs at:",
    options: [
      "The free end",
      "The fixed end",
      "At mid-span",
      "Quarter span",
      "Three-quarter span"
    ],
    answer: 1
  },
  {
    question: "The maximum shear force in a simply supported beam subjected to a uniformly distributed load w over a span L is:",
    options: [
      "wL/2",
      "wL/4",
      "wL",
      "wL/8",
      "0"
    ],
    answer: 0
  },
  {
    question: "The maximum deflection of a simply supported beam carrying a uniform load w over the entire span L is:",
    options: [
      "5wL⁴ / 384EI",
      "wL⁴ / 8EI",
      "wL³ / 48EI",
      "wL² / 8EI",
      "3wL⁴ / 384EI"
    ],
    answer: 0
  },
  {
    question: "The shear force diagram for a simply supported beam under uniformly distributed load is:",

  },
  {
    question: "The bending moment diagram for a simply supported beam under uniformly distributed load is:",
    options: [
      "Parabolic",
      "Triangular",
      "Rectangular",
      "Circular",
      "Elliptical"
    ],
    answer: 0
  },
  {
    question: "Strain energy stored in a body due to sudden loading is:",
    options: [
      "Double that due to gradual loading",
      "Same as gradual loading",
      "Half of gradual loading",
      "Triple of gradual loading",
      "None of the above"
    ],
    answer: 0
  },
  {
    question: "The unit of modulus of elasticity is:",
    options: [
      "N/m²",
      "Nm",
      "N",
      "Pa",
      "Both N/m² and Pa"
    ],
    answer: 4
  }
];

    // KaTeX rendering function
    function renderLatex(str) {
      if (!str) return str;
      
      // Render LaTeX between $...$
      return str.replace(/\$(.*?)\$/g, (match, latex) => {
        try {
          return katex.renderToString(latex, {
            throwOnError: false,
            displayMode: false
          });
        } catch (e) {
          console.error("KaTeX error:", e);
          return match;
        }
      });
    }


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
    const reloadConfirm = document.getElementById('reload-confirm');
    const reloadSubmit = document.getElementById('reload-submit');
    const reloadCancel = document.getElementById('reload-cancel');

    // Question count elements
    const questionCountInput = document.getElementById('question-count');
    const countSlider = document.getElementById('count-slider');
    const decreaseBtn = document.getElementById('decrease-btn');
    const increaseBtn = document.getElementById('increase-btn');
    const countDisplay = document.getElementById('count-display');
    const timeEstimate = document.getElementById('time-estimate');

    // Quiz variables
    let TOTAL_QUESTIONS = 10; // Default value
    let timeRemaining; // Will be set dynamically based on question count
    let selectedQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let timer;
    let quizInProgress = false;

    // Update question count display
    function updateCountDisplay() {
      countDisplay.textContent = `${TOTAL_QUESTIONS} questions`;
      questionCountInput.value = TOTAL_QUESTIONS;
      countSlider.value = TOTAL_QUESTIONS;
      // Show estimated time as 45 seconds per question
      const totalSeconds = TOTAL_QUESTIONS * 45;
      const min = Math.floor(totalSeconds / 60);
      const sec = totalSeconds % 60;
      let timeStr = '';
      if (min > 0) {
        timeStr += `${min} minute${min !== 1 ? 's' : ''}`;
        if (sec > 0) timeStr += ` ${sec} second${sec !== 1 ? 's' : ''}`;
      } else {
        timeStr = `${sec} second${sec !== 1 ? 's' : ''}`;
      }
      timeEstimate.textContent = `Estimated time: ${timeStr} (${TOTAL_QUESTIONS} × 45 sec)`;
    }   

    // Initialize question count controls
    decreaseBtn.addEventListener('click', () => {
      if (TOTAL_QUESTIONS > 10) {
        TOTAL_QUESTIONS = Math.max(10, TOTAL_QUESTIONS - 5);
        updateCountDisplay();
      }
    });

    increaseBtn.addEventListener('click', () => {
      if (TOTAL_QUESTIONS < 100) {
        TOTAL_QUESTIONS = Math.min(100, TOTAL_QUESTIONS + 5);
        updateCountDisplay();
      }
    });

    questionCountInput.addEventListener('change', () => {
      let value = parseInt(questionCountInput.value);
      if (isNaN(value) || value < 10) value = 10;
      if (value > 100) value = 100;
      TOTAL_QUESTIONS = value;
      updateCountDisplay();
    });

    countSlider.addEventListener('input', () => {
      TOTAL_QUESTIONS = parseInt(countSlider.value);
      updateCountDisplay();
    });

    // Initialize quiz
    startQuizBtn.addEventListener('click', () => {
      startScreen.style.display = 'none';
      app.style.display = 'flex';
      initQuiz();
    });

    function initQuiz() {
      // Set time limit based on number of questions (45s per question)
      timeRemaining = TOTAL_QUESTIONS * 45;
      updateTimerDisplay();

      // Shuffle and pick questions
      const shuffled = shuffleArray([...questions]);
      selectedQuestions = shuffled.slice(0, Math.min(TOTAL_QUESTIONS, questions.length));

      currentQuestionIndex = 0;
      userAnswers = new Array(selectedQuestions.length).fill(null);

      showQuestion();

      prevBtn.disabled = true;
      nextBtn.disabled = false;
      submitBtn.disabled = true;

      quizContainer.style.display = 'flex';
      resultContainer.style.display = 'none';

      startTimer();
      
      quizInProgress = true;
      window.addEventListener('beforeunload', handleBeforeUnload);
      
      // Focus on the quiz container for keyboard events
      document.body.focus();
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
      
      // Render LaTeX in question
      questionTextEl.innerHTML = renderLatex(q.question);

      optionsContainer.innerHTML = '';

      q.options.forEach((optionText, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        const textSpan = document.createElement('span');
        textSpan.innerHTML = renderLatex(String.fromCharCode(65 + i) + ". " + optionText);
        optionDiv.appendChild(textSpan);
        
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

    // Reload confirmation handlers
    function handleBeforeUnload(e) {
      if (quizInProgress) {
        e.preventDefault();
        e.returnValue = '';
        reloadConfirm.style.display = 'flex';
        return '';
      }
    }

    reloadSubmit.addEventListener('click', () => {
      reloadConfirm.style.display = 'none';
      quizInProgress = false;
      window.removeEventListener('beforeunload', handleBeforeUnload);
      finishQuiz();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });

    reloadCancel.addEventListener('click', () => {
      reloadConfirm.style.display = 'none';
    });

    function finishQuiz() {
      clearInterval(timer);
      quizContainer.style.display = 'none';
      resultContainer.style.display = 'flex';
      
      quizInProgress = false;
      window.removeEventListener('beforeunload', handleBeforeUnload);

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
          <div><strong>Q${idx + 1}:</strong> ${renderLatex(q.question)}</div>
          <div>Your answer: <span class="${isCorrect ? 'correct' : 'wrong'}">${renderLatex(userAnswerText)}</span></div>
          ${isCorrect ? '' : `<div>Correct answer: <span class="correct">${renderLatex(correctAnswerText)}</span></div>`}
        `;
        resultsList.appendChild(div);
      });

      scoreEl.textContent = `You answered ${correctCount} out of ${selectedQuestions.length} questions correctly.`;
      
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

    // Toggle mobile menu
    document.querySelector('.menu-toggle').addEventListener('click', function () {
      document.querySelector('.nav-links').classList.toggle('show');
    });

    // Initialize count display when page loads
    updateCountDisplay();

    // Keyboard shortcuts - FIXED
    document.addEventListener('keydown', function(e) {
      // Don't process keyboard shortcuts if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
      
      const key = e.key.toUpperCase();
      
      // Handle keyboard shortcuts based on what's visible on screen
      if (startScreen.style.display !== 'none') {
        // Start screen is visible
        if (key === 'ENTER') {
          e.preventDefault();
          startQuizBtn.click();
        }
        return;
      }
      
      if (customConfirm.style.display === 'flex') {
        // Custom confirmation dialog is visible
        if (key === 'Y' || key === 'ENTER') {
          e.preventDefault();
          confirmYes.click();
        } else if (key === 'N' || key === 'ESCAPE') {
          e.preventDefault();
          confirmNo.click();
        }
        return;
      }
      
      if (reloadConfirm.style.display === 'flex') {
        // Reload confirmation dialog is visible
        if (key === 'ENTER') {
          e.preventDefault();
          reloadSubmit.click();
        } else if (key === 'ESCAPE') {
          e.preventDefault();
          reloadCancel.click();
        }
        return;
      }
      
      if (resultContainer.style.display === 'flex') {
        // Results screen is visible
        if (key === 'ENTER' || key === 'R') {
          e.preventDefault();
          retryBtn.click();
        }
        return;
      }
      
      if (quizContainer.style.display === 'flex' && quizInProgress) {
        // Quiz is in progress
        // Option selection (A–E)
        if (key >= 'A' && key <= 'E') {
          const optionIndex = key.charCodeAt(0) - 65;
          const currentOptions = selectedQuestions[currentQuestionIndex]?.options || [];
          if (optionIndex < currentOptions.length) {
            e.preventDefault();
            selectOption(optionIndex);
          }
          return;
        }

        // Navigation
        switch (key) {
          case 'P':
            e.preventDefault();
            if (!prevBtn.disabled) prevBtn.click();
            break;
          case 'N':
            e.preventDefault();
            if (!nextBtn.disabled) nextBtn.click();
            break;
          case 'S':
            e.preventDefault();
            if (!submitBtn.disabled) submitBtn.click();
            break;
        }
      }
    });

    // Simple LaTeX rendering function
    function renderLatex(text) {
      // This is a simplified version - in a real app you'd use KaTeX properly
      return text.replace(/\$(.*?)\$/g, '<span class="katex">$1</span>');
    }
