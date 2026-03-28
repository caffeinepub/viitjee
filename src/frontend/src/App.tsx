import { useQuery } from "@tanstack/react-query";
import {
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  Mail,
  RotateCcw,
  Target,
  TrendingUp,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { InlineMath } from "react-katex";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import { Progress } from "./components/ui/progress";
import { ScrollArea } from "./components/ui/scroll-area";
import { Separator } from "./components/ui/separator";
import {
  chemistryQuestions,
  mathQuestions,
  physicsQuestions,
} from "./data/questionBank";
import { useActor } from "./hooks/useActor";
import { downloadQuestionsPDF } from "./utils/printPDF";
import type { Question } from "./utils/printPDF";

function MathText({ text }: { text: string }) {
  if (!text.includes("$")) return <span>{text}</span>;
  const parts = text.split(/(\$[^$]+\$)/g);
  return (
    <span>
      {parts.map((part, idx) => {
        const key = `${idx}-${part.length}`;
        if (part.startsWith("$") && part.endsWith("$")) {
          const latex = part.slice(1, -1);
          return <InlineMath key={key} math={latex} />;
        }
        return <span key={key}>{part}</span>;
      })}
    </span>
  );
}

const stats = [
  { icon: Users, label: "Active Students", value: "10,000+" },
  { icon: BookOpen, label: "Video Lectures", value: "5,000+" },
  { icon: Target, label: "Practice Problems", value: "50,000+" },
  { icon: Award, label: "Success Rate", value: "95%" },
];

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Content",
    description:
      "Complete syllabus coverage for JEE Main and Advanced with detailed explanations and examples.",
  },
  {
    icon: Target,
    title: "Targeted Practice",
    description:
      "Topic-wise and difficulty-level practice problems to strengthen your concepts.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Monitor your performance with detailed analytics and personalized recommendations.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Learn from experienced teachers with proven track records in JEE coaching.",
  },
  {
    icon: Award,
    title: "Mock Tests",
    description:
      "Full-length mock tests simulating actual JEE exam patterns and difficulty.",
  },
  {
    icon: Zap,
    title: "Doubt Resolution",
    description:
      "Quick doubt clearing sessions to ensure no concept is left unclear.",
  },
];

const courses = [
  {
    subject: "Physics",
    topics: "Mechanics, Thermodynamics, Electromagnetism",
    lessons: "150+ Lessons",
  },
  {
    subject: "Chemistry",
    topics: "Physical, Organic, Inorganic Chemistry",
    lessons: "140+ Lessons",
  },
  {
    subject: "Mathematics",
    topics: "Calculus, Algebra, Coordinate Geometry",
    lessons: "160+ Lessons",
  },
];

const syllabusData: Record<string, string[]> = {
  Physics: [
    "Units & Measurements",
    "Kinematics",
    "Laws of Motion",
    "Work, Energy & Power",
    "Rotational Motion",
    "Gravitation",
    "Properties of Matter",
    "Thermodynamics",
    "Oscillations & Waves",
    "Electrostatics",
    "Current Electricity",
    "Magnetic Effects of Current",
    "Electromagnetic Induction",
    "Optics",
    "Modern Physics",
  ],
  Chemistry: [
    "Some Basic Concepts of Chemistry",
    "Structure of Atom",
    "Chemical Bonding",
    "States of Matter",
    "Thermodynamics",
    "Equilibrium",
    "Redox Reactions",
    "Hydrogen & s-Block Elements",
    "p-Block Elements",
    "d and f-Block Elements",
    "Coordination Compounds",
    "Organic Chemistry Basics",
    "Hydrocarbons",
    "Alcohols, Phenols & Ethers",
    "Aldehydes, Ketones & Carboxylic Acids",
    "Amines",
    "Biomolecules & Polymers",
  ],
  Mathematics: [
    "Sets, Relations & Functions",
    "Complex Numbers",
    "Sequences & Series",
    "Quadratic Equations",
    "Permutations & Combinations",
    "Binomial Theorem",
    "Matrices & Determinants",
    "Limits, Continuity & Differentiability",
    "Application of Derivatives",
    "Integrals",
    "Differential Equations",
    "Coordinate Geometry (Straight Lines, Circles, Conics)",
    "3D Geometry",
    "Vectors",
    "Statistics & Probability",
    "Trigonometry",
  ],
};

const theoryPoints: Record<string, Record<string, string[]>> = {
  Physics: {
    "Units & Measurements": [
      "SI units system: 7 base units including meter, kilogram, second, ampere",
      "Dimensional analysis used to check equation validity and derive formulas",
      "Significant figures rule: retain precision in experimental measurements",
      "Errors in measurement: absolute, relative, and percentage error types",
      "Vernier caliper (least count 0.1 mm) and screw gauge (least count 0.01 mm)",
    ],
    Kinematics: [
      "Equations of motion: v=u+at, s=ut+½at², v²=u²+2as (valid for uniform acceleration)",
      "Projectile motion: horizontal velocity constant, vertical follows free fall",
      "Relative velocity: velocity of A w.r.t. B = v_A − v_B",
      "Distance is scalar (total path); displacement is vector (shortest path)",
      "Uniform acceleration = constant rate of change of velocity",
    ],
    "Laws of Motion": [
      "Newton's 1st Law: body remains at rest or uniform motion unless acted upon by net force",
      "Newton's 2nd Law: F = ma; net force equals mass times acceleration",
      "Newton's 3rd Law: every action has an equal and opposite reaction",
      "Free body diagram isolates a body and shows all forces acting on it",
      "Pseudo force = −ma applied in non-inertial (accelerating) reference frames",
    ],
    "Work, Energy & Power": [
      "Work = F·d·cosθ; work done by perpendicular force is zero",
      "Work-energy theorem: net work done = change in kinetic energy",
      "Conservative forces (gravity, spring) have path-independent work",
      "Elastic collision: both KE and momentum conserved; inelastic: only momentum",
      "Power = Work/time = F·v; unit is Watt (W)",
    ],
    "Rotational Motion": [
      "Moment of inertia I = Σmr² depends on mass distribution about axis",
      "Torque τ = r × F; causes angular acceleration via τ = Iα",
      "Angular momentum L = Iω; conserved when net torque is zero",
      "Rolling motion: combines translational (v_cm) and rotational (ω = v_cm/R) motion",
      "Parallel axis theorem: I = I_cm + Md²; perpendicular axis: I_z = I_x + I_y",
    ],
    Gravitation: [
      "Universal law: F = Gm₁m₂/r²; G = 6.67×10⁻¹¹ N·m²/kg²",
      "Escape velocity: v_e = √(2gR) ≈ 11.2 km/s for Earth",
      "Orbital velocity: v_o = √(gR) ≈ 7.9 km/s at Earth's surface",
      "Kepler's 3rd law: T² ∝ r³ (square of period ∝ cube of orbital radius)",
      "Gravitational PE = −GMm/r; negative sign indicates bound system",
    ],
    "Properties of Matter": [
      "Stress = Force/Area; Strain = change in dimension/original dimension",
      "Young's modulus Y = Stress/Strain; measures stiffness of material",
      "Surface tension: energy per unit area or force per unit length",
      "Viscosity: internal friction in fluids; η is coefficient of viscosity",
      "Bernoulli's theorem: P + ½ρv² + ρgh = constant along streamline",
    ],
    Thermodynamics: [
      "1st Law: ΔU = Q − W; internal energy change equals heat added minus work done",
      "Isothermal process: T constant, ΔU = 0; adiabatic: Q = 0",
      "Carnot engine efficiency: η = 1 − T₂/T₁ (maximum possible efficiency)",
      "2nd Law: heat cannot spontaneously flow from cold to hot body",
      "Cp − Cv = R for ideal gas; γ = Cp/Cv (ratio of specific heats)",
    ],
    "Oscillations & Waves": [
      "SHM: a = −ω²x; x = A·sin(ωt + φ); T = 2π/ω",
      "Energy in SHM: KE = ½mω²(A²−x²), PE = ½mω²x²; total = ½mω²A²",
      "Wave equation: y = A·sin(kx − ωt); speed v = ω/k = fλ",
      "Standing waves form when two identical waves travel in opposite directions",
      "Doppler effect: apparent frequency changes with relative motion of source/observer",
    ],
    Electrostatics: [
      "Coulomb's law: F = kq₁q₂/r²; k = 9×10⁹ N·m²/C²",
      "Electric field E = F/q; potential V = kq/r; E = −dV/dr",
      "Gauss's law: ∮E·dA = Q_enc/ε₀ (useful for symmetric charge distributions)",
      "Capacitance C = Q/V; parallel plate: C = ε₀A/d",
      "Dielectric increases capacitance: C' = κC₀; energy stored = ½CV²",
    ],
    "Current Electricity": [
      "Ohm's law: V = IR; resistance R = ρL/A; ρ is resistivity",
      "Kirchhoff's Current Law: ΣI = 0 at junction; Voltage Law: ΣV = 0 in loop",
      "Wheatstone bridge balanced when P/Q = R/S; used to measure unknown resistance",
      "RC circuit: charge Q = Q₀(1 − e^(−t/RC)); τ = RC is time constant",
      "EMF = terminal voltage + voltage drop across internal resistance: ε = V + Ir",
    ],
    "Magnetic Effects of Current": [
      "Biot-Savart law: dB = μ₀I·dl×r̂/(4πr²); gives field due to current element",
      "Ampere's law: ∮B·dl = μ₀I_enc; used for symmetric current distributions",
      "Force on moving charge: F = q(v × B); basis of cyclotron motion",
      "Cyclotron frequency: f = qB/(2πm); independent of speed (non-relativistic)",
      "Solenoid field: B = μ₀nI; n = number of turns per unit length",
    ],
    "Electromagnetic Induction": [
      "Faraday's law: EMF = −dΦ/dt; changing magnetic flux induces EMF",
      "Lenz's law: induced current opposes the change causing it",
      "Motional EMF: ε = Bvl for a conductor of length l moving with velocity v",
      "Self inductance: L = NΦ/I; mutual inductance: M = N₂Φ₂₁/I₁",
      "AC generator converts mechanical energy to electrical via rotating coil",
    ],
    Optics: [
      "Snell's law: n₁sinθ₁ = n₂sinθ₂; light bends toward normal in denser medium",
      "Total internal reflection occurs when angle > critical angle (θ_c = sin⁻¹(n₂/n₁))",
      "Mirror formula: 1/v + 1/u = 1/f; lens formula: 1/v − 1/u = 1/f",
      "Interference: constructive (path diff = nλ), destructive (path diff = (n+½)λ)",
      "Diffraction: bending of light around obstacles; single slit minima at a·sinθ = nλ",
    ],
    "Modern Physics": [
      "Photoelectric effect: KE_max = hf − φ; photon energy E = hf (Einstein's theory)",
      "Bohr model: electrons in fixed orbits; energy = −13.6/n² eV for hydrogen",
      "Radioactive decay: N = N₀e^(−λt); half-life T₁/₂ = 0.693/λ",
      "Nuclear reactions: mass defect Δm × c² gives binding energy",
      "de Broglie wavelength: λ = h/mv; wave nature of matter",
    ],
  },
  Chemistry: {
    "Some Basic Concepts of Chemistry": [
      "Mole concept: 1 mole = 6.022×10²³ particles (Avogadro's number)",
      "Stoichiometry uses balanced equations to relate moles of reactants/products",
      "Limiting reagent determines maximum product formed in a reaction",
      "Empirical formula = simplest whole-number ratio; molecular = actual formula",
      "Concentration terms: molarity (mol/L), molality (mol/kg), mole fraction",
    ],
    "Structure of Atom": [
      "Bohr model: electrons orbit nucleus in quantized energy levels",
      "Quantum numbers: n (principal), l (azimuthal), m_l (magnetic), m_s (spin)",
      "Orbitals: s (spherical), p (dumbbell), d (cloverleaf) shapes",
      "Aufbau principle: fill lowest energy orbitals first; Pauli: max 2e per orbital",
      "Hund's rule: maximize unpaired electrons in degenerate orbitals",
    ],
    "Chemical Bonding": [
      "Ionic bonding: electron transfer between metals and non-metals",
      "Covalent bonding: electron sharing; Lewis structures show lone pairs and bonds",
      "VSEPR theory: electron pairs repel to give minimum-energy geometry",
      "Hybridization: sp³ (tetrahedral), sp² (trigonal planar), sp (linear)",
      "Molecular orbital theory: bonding MOs lower energy, antibonding higher",
    ],
    "States of Matter": [
      "Ideal gas law: PV = nRT; R = 8.314 J/(mol·K)",
      "Kinetic theory: gas molecules in random motion; KE ∝ T",
      "van der Waals equation: (P + an²/V²)(V − nb) = nRT corrects for real gases",
      "Intermolecular forces: London dispersion < dipole-dipole < hydrogen bonding",
      "Graham's law: rate of effusion ∝ 1/√M (M = molar mass)",
    ],
    Thermodynamics: [
      "Enthalpy H = U + PV; ΔH = heat at constant pressure",
      "Hess's law: ΔH is path-independent; sum standard enthalpies",
      "Gibbs free energy: ΔG = ΔH − TΔS; reaction spontaneous when ΔG < 0",
      "Entropy S measures disorder; ΔS > 0 for spontaneous isolated systems",
      "Standard state: 298 K, 1 atm; ΔG° = −RT·ln K",
    ],
    Equilibrium: [
      "Le Chatelier's principle: system shifts to counteract any imposed change",
      "Equilibrium constant Kc = [products]/[reactants]; Kp uses partial pressures",
      "Ionic equilibrium: weak acids/bases partially dissociate in water",
      "pH = −log[H⁺]; pOH = −log[OH⁻]; pH + pOH = 14 at 25°C",
      "Buffer solution resists pH change; Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])",
    ],
    "Redox Reactions": [
      "Oxidation: loss of electrons (increase in oxidation number)",
      "Reduction: gain of electrons (decrease in oxidation number)",
      "Balance redox equations by half-reaction method in acidic/basic medium",
      "Electrochemical series: SRP values predict spontaneous cell reactions",
      "Cell potential E°cell = E°cathode − E°anode; positive = spontaneous",
    ],
    "Hydrogen & s-Block Elements": [
      "Hydrogen: lightest element; three isotopes (protium, deuterium, tritium)",
      "Alkali metals (Group 1): soft, low melting points, strong reducing agents",
      "Alkaline earth metals (Group 2): harder than Group 1, less reactive",
      "NaOH (caustic soda) manufactured by chlor-alkali process",
      "Na₂CO₃ (washing soda) and NaHCO₃ (baking soda) are important compounds",
    ],
    "p-Block Elements": [
      "Groups 13–18 comprise p-block; diverse properties across periods",
      "Inert pair effect: heavier p-block elements prefer lower oxidation states",
      "Allotropy: multiple structural forms of same element (e.g., carbon: diamond/graphite)",
      "Group 17 (halogens): highest electronegativity, strong oxidizing agents",
      "Noble gases (Group 18): full outer shell, generally inert",
    ],
    "d and f-Block Elements": [
      "Transition metals: variable oxidation states due to (n−1)d electron involvement",
      "High melting points, hardness, and catalytic activity common in d-block",
      "Complex formation: transition metals act as Lewis acids, ligands as Lewis bases",
      "Lanthanides (4f): lanthanide contraction causes similar radii across series",
      "Actinides (5f): mostly radioactive; uranium and thorium most important",
    ],
    "Coordination Compounds": [
      "Werner's theory: primary valence (oxidation state) and secondary valence (coordination number)",
      "IUPAC naming: ligands alphabetically, then metal with oxidation state",
      "Isomerism types: geometric (cis/trans), optical, linkage, ionization",
      "Crystal field theory: d-orbital splitting gives colour and magnetic properties",
      "Stability constant K_f: larger value = more stable complex",
    ],
    "Organic Chemistry Basics": [
      "Carbon forms 4 bonds; sp³ (tetrahedral), sp² (trigonal planar), sp (linear) hybridization",
      "IUPAC naming: identify longest chain, number from end nearest substituent",
      "Isomerism: structural (chain, position, functional) and stereoisomerism",
      "Inductive effect: electron withdrawal/donation through σ bonds along chain",
      "Reaction intermediates: carbocations, carbanions, free radicals, carbenes",
    ],
    Hydrocarbons: [
      "Alkanes: free radical substitution; combustion; cracking",
      "Alkenes: electrophilic addition; Markovnikov's rule for unsymmetrical addition",
      "Alkynes: more reactive than alkenes; can add 2 moles of reagent",
      "Aromaticity: Hückel's rule (4n+2 π electrons); benzene undergoes EAS",
      "Electrophilic aromatic substitution: halogenation, nitration, sulfonation",
    ],
    "Alcohols, Phenols & Ethers": [
      "Alcohol preparation: hydration of alkenes, reduction of aldehydes/ketones",
      "Lucas test distinguishes 1°, 2°, 3° alcohols by rate of reaction with HCl/ZnCl₂",
      "Phenols are more acidic than alcohols due to resonance stabilization of phenoxide",
      "Esterification: alcohol + carboxylic acid ⇌ ester + water (acid-catalyzed)",
      "Dehydration of alcohols gives alkenes (conc. H₂SO₄, 170°C) or ethers (140°C)",
    ],
    "Aldehydes, Ketones & Carboxylic Acids": [
      "Nucleophilic addition to C=O; aldehydes more reactive than ketones",
      "Aldol condensation: α-hydrogen attacks another carbonyl compound",
      "Tollens' test (silver mirror) and Fehling's test distinguish aldehydes from ketones",
      "Oxidation: aldehydes → carboxylic acids; Clemmensen/Wolff-Kishner for reduction",
      "Esterification of carboxylic acids; acidity due to resonance of carboxylate ion",
    ],
    Amines: [
      "Classification: 1° (RNH₂), 2° (R₂NH), 3° (R₃N) based on number of R groups",
      "Basicity order: aliphatic > ammonia > aromatic amines (lone pair availability)",
      "Reaction with nitrous acid: 1° aromatic amine → diazonium salt (diazotization)",
      "Diazonium coupling with phenol/aniline gives azo dyes",
      "Hofmann bromamide reaction converts amide to primary amine with one less carbon",
    ],
    "Biomolecules & Polymers": [
      "Carbohydrates: monosaccharides (glucose), disaccharides (sucrose), polysaccharides (starch)",
      "Proteins: amino acids linked by peptide bonds; primary to quaternary structure",
      "Nucleic acids (DNA/RNA): nucleotides (base + sugar + phosphate) store genetic info",
      "Addition polymers: monomer adds without by-product (polyethylene, PVC)",
      "Condensation polymers: monomer links with loss of small molecule (nylon, polyester)",
    ],
  },
  Mathematics: {
    "Sets, Relations & Functions": [
      "Set operations: union (∪), intersection (∩), complement, difference",
      "Relation types: reflexive, symmetric, transitive, equivalence",
      "Function types: one-one (injective), onto (surjective), bijective",
      "Composition: (f∘g)(x) = f(g(x)); inverse f⁻¹ exists iff f is bijective",
      "Domain, codomain, and range; graphical vertical line test for functions",
    ],
    "Complex Numbers": [
      "Argand plane: x-axis (real), y-axis (imaginary); z = x + iy",
      "Modulus |z| = √(x²+y²); argument θ = tan⁻¹(y/x)",
      "De Moivre's theorem: (cosθ + i·sinθ)ⁿ = cos(nθ) + i·sin(nθ)",
      "Cube roots of unity: 1, ω, ω²; 1 + ω + ω² = 0; ω³ = 1",
      "Loci in Argand plane: |z−a| = r (circle), arg(z) = θ (ray)",
    ],
    "Sequences & Series": [
      "AP: aₙ = a + (n−1)d; Sₙ = n/2·[2a + (n−1)d]",
      "GP: aₙ = arⁿ⁻¹; Sₙ = a(rⁿ−1)/(r−1); S∞ = a/(1−r) when |r|<1",
      "HP: reciprocals of AP; harmonic mean H = 2ab/(a+b)",
      "AM ≥ GM ≥ HM; equality when all terms equal",
      "Special series: Σn = n(n+1)/2; Σn² = n(n+1)(2n+1)/6",
    ],
    "Quadratic Equations": [
      "Discriminant D = b²−4ac; D>0 (two real roots), D=0 (equal roots), D<0 (complex)",
      "Vieta's formulas: sum of roots = −b/a; product of roots = c/a",
      "Transformation of roots: if α,β are roots, form equation with roots f(α),f(β)",
      "Common roots: if two equations share a root, use elimination method",
      "Nature of roots depends on discriminant; graph is parabola opening up/down",
    ],
    "Permutations & Combinations": [
      "Fundamental principle: if event A can occur in m ways and B in n ways, A then B occurs in mn ways",
      "nPr = n!/(n−r)!; number of arrangements of r objects from n distinct objects",
      "nCr = n!/(r!(n−r)!); number of selections (order doesn't matter)",
      "Circular permutations: (n−1)! arrangements of n objects around a circle",
      "Distribution of n objects into groups; stars and bars technique",
    ],
    "Binomial Theorem": [
      "(a+b)ⁿ = Σ C(n,r)·aⁿ⁻ʳ·bʳ for r = 0 to n",
      "General term: T_{r+1} = C(n,r)·aⁿ⁻ʳ·bʳ",
      "Middle term: T_{n/2+1} for even n; two middle terms for odd n",
      "Binomial coefficients: C(n,0)+C(n,1)+…+C(n,n) = 2ⁿ",
      "Multinomial expansion generalizes to (a+b+c+…)ⁿ",
    ],
    "Matrices & Determinants": [
      "Matrix operations: addition, scalar multiplication, matrix multiplication (not commutative)",
      "Determinant of 2×2: ad−bc; expand along any row/column for larger matrices",
      "Inverse: A⁻¹ = adj(A)/|A|; exists only when |A| ≠ 0",
      "Cramer's rule: xᵢ = Dᵢ/D where D is coefficient determinant",
      "System of equations: consistent (unique/infinite solutions) or inconsistent (no solution)",
    ],
    "Limits, Continuity & Differentiability": [
      "$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$; $\\lim_{x \\to \\infty}\\left(1+\\frac{1}{x}\\right)^x = e$",
      "L'Hôpital's rule: if $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ form, differentiate numerator and denominator",
      "Continuity at $x=a$: $\\lim_{x \\to a} f(x) = f(a)$",
      "Differentiability implies continuity; converse not always true (e.g., $|x|$ at 0)",
      "L'Hôpital: $\\lim_{x\\to a}\\frac{f(x)}{g(x)} = \\lim_{x\\to a}\\frac{f'(x)}{g'(x)}$",
    ],
    "Application of Derivatives": [
      "Slope of tangent $= f'(a)$; normal slope $= -\\frac{1}{f'(a)}$",
      "Increasing: $f'(x) > 0$; decreasing: $f'(x) < 0$",
      "Maxima/minima: $f'(x) = 0$ at critical points; second derivative test",
      "Rolle's theorem: $f'(c) = 0$ for some $c \\in (a,b)$ if $f(a) = f(b)$",
      "MVT: $f'(c) = \\frac{f(b)-f(a)}{b-a}$ for some $c \\in (a,b)$",
    ],
    Integrals: [
      "$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$; $\\int \\sin x\\, dx = -\\cos x + C$; $\\int e^x dx = e^x + C$",
      "Integration by substitution: replace variable to simplify integrand",
      "Integration by parts: $\\int u\\,dv = uv - \\int v\\,du$ (ILATE rule)",
      "Partial fractions decompose rational functions for integration",
      "Definite integral $\\int_a^b f(x)dx$ = area under curve from $a$ to $b$",
    ],
    "Differential Equations": [
      "Order = highest derivative; degree = power of highest derivative",
      "Variable separable: separate f(y)dy = g(x)dx and integrate both sides",
      "Homogeneous DE: substitute y = vx to reduce to separable form",
      "Linear first-order: dy/dx + P(x)y = Q(x); integrating factor = e^(∫P dx)",
      "Exact equations: M dx + N dy = 0 is exact when ∂M/∂y = ∂N/∂x",
    ],
    "Coordinate Geometry (Straight Lines, Circles, Conics)": [
      "Distance formula: √((x₂−x₁)²+(y₂−y₁)²); section formula for division",
      "Pair of lines: ax²+2hxy+by²=0; angle between lines: tan θ = 2√(h²−ab)/(a+b)",
      "Circle: (x−h)²+(y−k)²=r²; general form x²+y²+2gx+2fy+c=0",
      "Parabola y²=4ax: focus (a,0), directrix x=−a, vertex (0,0)",
      "Ellipse x²/a²+y²/b²=1: eccentricity e=c/a where c²=a²−b²",
    ],
    "3D Geometry": [
      "Direction cosines l,m,n satisfy l²+m²+n²=1; direction ratios proportional to l,m,n",
      "Line through point (x₀,y₀,z₀) with direction (a,b,c): (x−x₀)/a=(y−y₀)/b=(z−z₀)/c",
      "Plane equation: ax+by+cz+d=0; normal vector is (a,b,c)",
      "Angle between planes: cos θ = |a₁a₂+b₁b₂+c₁c₂|/(|n₁||n₂|)",
      "Shortest distance between skew lines: d = |(a₂−a₁)·(b₁×b₂)|/|b₁×b₂|",
    ],
    Vectors: [
      "Dot product: a·b = |a||b|cosθ; gives scalar; zero when perpendicular",
      "Cross product: |a×b| = |a||b|sinθ; gives vector perpendicular to both",
      "Scalar triple product [a b c] = a·(b×c) = volume of parallelepiped",
      "Projection of a on b: (a·b)/|b|",
      "Vectors coplanar if scalar triple product = 0; collinear if cross product = 0",
    ],
    "Statistics & Probability": [
      "Mean = Σx/n; median = middle value; mode = most frequent value",
      "Variance σ² = Σ(x−x̄)²/n; standard deviation σ = √variance",
      "Bayes' theorem: P(A|B) = P(B|A)·P(A)/P(B)",
      "Binomial distribution: P(X=r) = C(n,r)·pʳ·(1−p)ⁿ⁻ʳ; mean = np",
      "Conditional probability: P(A|B) = P(A∩B)/P(B)",
    ],
    Trigonometry: [
      "Key identities: sin²θ+cos²θ=1; tan²θ+1=sec²θ; cot²θ+1=csc²θ",
      "Compound angles: sin(A±B)=sinAcosB±cosAsinB; cos(A±B)=cosAcosB∓sinAsinB",
      "Inverse trig: domain restrictions make them functions; sin⁻¹x + cos⁻¹x = π/2",
      "Sine rule: a/sinA=b/sinB=c/sinC=2R; cosine rule: a²=b²+c²−2bc·cosA",
      "Heights and distances: use tan of angle of elevation/depression",
    ],
  },
};

const formulasData: Record<string, Record<string, string[]>> = {
  Physics: {
    "Units & Measurements": [
      "Density = m/V",
      "% Error = (ΔA/A)×100",
      "LC of Vernier = 1 MSD - 1 VSD",
      "LC of screw gauge = pitch/no. of divisions",
      "[ML²T⁻²] = energy",
    ],
    Kinematics: [
      "v = u + at",
      "s = ut + ½at²",
      "v² = u² + 2as",
      "Range R = u²sin2θ/g",
      "H_max = u²sin²θ/2g",
    ],
    "Laws of Motion": [
      "F = ma",
      "f = μN",
      "p = mv",
      "Impulse J = F·Δt = Δp",
      "F_net = dp/dt",
    ],
    "Work, Energy & Power": [
      "W = Fd·cosθ",
      "KE = ½mv²",
      "PE = mgh",
      "W_net = ΔKE",
      "P = Fv = W/t",
    ],
    "Rotational Motion": [
      "τ = Iα",
      "L = Iω",
      "KE_rot = ½Iω²",
      "I_cylinder = ½MR²",
      "I_sphere = 2/5·MR²",
    ],
    Gravitation: [
      "F = Gm₁m₂/r²",
      "g = GM/R²",
      "v_esc = √(2gR)",
      "v_orb = √(gR)",
      "T² = 4π²r³/GM",
    ],
    "Properties of Matter": [
      "Y = Stress/Strain",
      "P = F/A",
      "Bernoulli: P + ½ρv² + ρgh = const",
      "η = F·l/(A·v)",
      "T = F/(2l)",
    ],
    Thermodynamics: [
      "ΔU = Q - W",
      "W = PΔV",
      "η_Carnot = 1 - T₂/T₁",
      "Cp - Cv = R",
      "γ = Cp/Cv",
    ],
    "Oscillations & Waves": [
      "T = 2π√(m/k)",
      "ω = 2πf",
      "v = fλ",
      "Energy ∝ A²",
      "T_pendulum = 2π√(l/g)",
    ],
    Electrostatics: [
      "F = kq₁q₂/r²",
      "E = kq/r²",
      "V = kq/r",
      "C = Q/V",
      "U = ½CV²",
    ],
    "Current Electricity": [
      "V = IR",
      "R = ρL/A",
      "P = VI = I²R",
      "ε = V + Ir",
      "R_series = R₁+R₂",
    ],
    "Magnetic Effects of Current": [
      "F = qvB·sinθ",
      "B = μ₀I/2πr",
      "B_solenoid = μ₀nI",
      "τ = nIAB",
      "F = BIl·sinθ",
    ],
    "Electromagnetic Induction": [
      "EMF = -dΦ/dt",
      "Φ = BA·cosθ",
      "EMF_motional = Bvl",
      "E = -L·dI/dt",
      "M = NΦ/I",
    ],
    Optics: [
      "1/v - 1/u = 1/f",
      "n₁sinθ₁ = n₂sinθ₂",
      "m = -v/u",
      "P = 1/f(m)",
      "Δy = λD/d",
    ],
    "Modern Physics": [
      "E = hf",
      "KE_max = hf - φ",
      "λ = h/mv",
      "T₁/₂ = 0.693/λ",
      "E_n = -13.6/n² eV",
    ],
  },
  Chemistry: {
    "Some Basic Concepts of Chemistry": [
      "n = m/M",
      "N = n × Nₐ",
      "M = n/V(L)",
      "% yield = actual/theoretical × 100",
      "mole fraction = n_A/(n_A+n_B)",
    ],
    "Structure of Atom": [
      "E = hf = hc/λ",
      "E_n = -13.6/n² eV",
      "λ = h/mv",
      "ΔE = E₂ - E₁",
      "Z_eff = Z - σ",
    ],
    "Chemical Bonding": [
      "Bond order = (Nb - Na)/2",
      "Formal charge = V - L - B/2",
      "μ = q × d (dipole moment)",
      "EN difference > 1.7 → ionic",
      "VSEPR: electron pairs repel",
    ],
    "States of Matter": [
      "PV = nRT",
      "P₁V₁/T₁ = P₂V₂/T₂",
      "KE_avg = 3/2·kT",
      "v_rms = √(3RT/M)",
      "rate ∝ 1/√M",
    ],
    Thermodynamics: [
      "ΔG = ΔH - TΔS",
      "ΔG° = -RT·lnK",
      "ΔH = ΣΔHf(products) - ΣΔHf(reactants)",
      "Cp - Cv = R",
      "ΔS = q_rev/T",
    ],
    Equilibrium: [
      "Kc = [products]/[reactants]",
      "pH = -log[H⁺]",
      "pH + pOH = 14",
      "Ka × Kb = Kw = 10⁻¹⁴",
      "pH = pKa + log([A⁻]/[HA])",
    ],
    "Redox Reactions": [
      "Ox. state sum in compound = charge",
      "E°cell = E°cathode - E°anode",
      "ΔG° = -nFE°",
      "Equivalents: n-factor × moles",
      "Nernst: E = E° - 0.0592/n · logQ",
    ],
    "Hydrogen & s-Block Elements": [
      "2Na + 2H₂O → 2NaOH + H₂",
      "CaO + H₂O → Ca(OH)₂",
      "2NaCl + 2H₂O → 2NaOH + H₂ + Cl₂",
      "Na₂CO₃ + CO₂ + H₂O → 2NaHCO₃",
      "Solvay: NaCl + NH₃ + CO₂ + H₂O → NaHCO₃",
    ],
    "p-Block Elements": [
      "2SO₂ + O₂ → 2SO₃ (Contact process)",
      "N₂ + 3H₂ ⇌ 2NH₃ (Haber)",
      "OF₂: O is +2, F is -1",
      "PCl₅ ⇌ PCl₃ + Cl₂",
      "XeF₂ + H₂O → Xe + 2HF + ½O₂",
    ],
    "d and f-Block Elements": [
      "Oxid. state range from +1 to +8",
      "E = hf (spectrochemical series)",
      "ΔCF = strong field ligand splitting",
      "μ = √(n(n+2)) BM (magnetic moment)",
      "Lanthanide contraction: r decreases across series",
    ],
    "Coordination Compounds": [
      "EAN rule: 18-electron rule",
      "K_f = [complex]/([M][L]ⁿ])",
      "Bond order from MO theory",
      "Δ_oct > Δ_tet (CFSE)",
      "Hybridization: sp³d² → octahedral",
    ],
    "Organic Chemistry Basics": [
      "C forms 4 bonds (tetravalent)",
      "+I effect: alkyl groups donate e⁻",
      "-I effect: halogens withdraw e⁻",
      "Carbocation stability: 3°>2°>1°>CH₃⁺",
      "SN2 rate ∝ [substrate][nucleophile]",
    ],
    Hydrocarbons: [
      "Markovnikov: H adds to C with more H",
      "Free radical: Cl₂/hν (anti-Markovnikov)",
      "Ozonolysis: alkene + O₃ → carbonyl compounds",
      "Benzene: 3 C=C + 3 C-C (resonance hybrid)",
      "EAS rate: -OH > -R > -H > -X > -NO₂",
    ],
    "Alcohols, Phenols & Ethers": [
      "Lucas: ZnCl₂/HCl; 3°>2°>1° rate",
      "pKa alcohol ≈ 16-18; phenol ≈ 10",
      "Esterification: RCOOH + R'OH ⇌ RCOOR' + H₂O",
      "Victor Meyer: I₂/red P for 1°; no rxn for 3°",
      "Dehydration: 170°C → alkene; 140°C → ether",
    ],
    "Aldehydes, Ketones & Carboxylic Acids": [
      "Fehling's/Tollens' test for aldehydes only",
      "Aldol: 2 CH₃CHO → CH₃CH(OH)CH₂CHO",
      "Cannizzaro: no α-H aldehyde + NaOH → acid + alcohol",
      "pKa RCOOH ≈ 4-5 (weaker acids: higher pKa)",
      "Nucleophilic addition: Nu⁻ attacks C=O carbon",
    ],
    Amines: [
      "Basicity: 3° aliphatic > 2° > 1° > ArNH₂",
      "ArNH₂ + NaNO₂ + HCl → ArN₂⁺Cl⁻ (0-5°C)",
      "Azo coupling: ArN₂⁺ + ArOH → ArN=NAr-OH",
      "Hofmann: RCONH₂ + Br₂ + KOH → RNH₂",
      "Hinsberg test distinguishes 1°, 2°, 3° amines",
    ],
    "Biomolecules & Polymers": [
      "DPn = Mn/M₀ (degree of polymerisation)",
      "Peptide bond: -CO-NH-",
      "Glycosidic bond links monosaccharides",
      "Addition polymer: nCH₂=CH₂ → (-CH₂-CH₂-)n",
      "Condensation: loses H₂O or HCl per linkage",
    ],
  },
  Mathematics: {
    "Sets, Relations & Functions": [
      "n(A∪B) = n(A)+n(B)-n(A∩B)",
      "n(A×B) = n(A)·n(B)",
      "For bijection: |domain| = |codomain|",
      "(f∘g)⁻¹ = g⁻¹∘f⁻¹",
      "Even: f(-x)=f(x); Odd: f(-x)=-f(x)",
    ],
    "Complex Numbers": [
      "z = x+iy, |z| = √(x²+y²)",
      "z̄·z = |z|²",
      "(cosθ+i·sinθ)ⁿ = cos(nθ)+i·sin(nθ)",
      "1+ω+ω² = 0, ω³ = 1",
      "|z₁+z₂| ≤ |z₁|+|z₂| (triangle inequality)",
    ],
    "Sequences & Series": [
      "Sn(AP) = n/2·(2a+(n-1)d)",
      "Sn(GP) = a(rⁿ-1)/(r-1)",
      "S∞(GP) = a/(1-r), |r|<1",
      "AM ≥ GM ≥ HM",
      "Σn = n(n+1)/2, Σn² = n(n+1)(2n+1)/6",
    ],
    "Quadratic Equations": [
      "x = (-b±√(b²-4ac))/2a",
      "α+β = -b/a, αβ = c/a",
      "D = b²-4ac (discriminant)",
      "|α-β| = √D/|a|",
      "Equation with roots α,β: x²-(α+β)x+αβ=0",
    ],
    "Permutations & Combinations": [
      "nPr = n!/(n-r)!",
      "nCr = n!/r!(n-r)!",
      "nCr + nCr-1 = n+1Cr",
      "Circular: (n-1)!",
      "nCr = nCn-r",
    ],
    "Binomial Theorem": [
      "(a+b)ⁿ = Σ C(n,r)aⁿ⁻ʳbʳ",
      "T_{r+1} = C(n,r)aⁿ⁻ʳbʳ",
      "Sum of coefficients = 2ⁿ (put a=b=1)",
      "Middle term: T_{n/2+1} (even n)",
      "Greatest term: T_{r+1} where r=floor((n+1)|b/a|/(1+|b/a|))",
    ],
    "Matrices & Determinants": [
      "det(AB) = det(A)·det(B)",
      "A⁻¹ = adj(A)/|A|",
      "(AB)ᵀ = BᵀAᵀ",
      "For skew-symmetric: aᵢⱼ = -aⱼᵢ",
      "Cramer's rule: x = Dx/D, y = Dy/D",
    ],
    "Limits, Continuity & Differentiability": [
      "lim(x→0) sinx/x = 1",
      "lim(x→0) (1+x)^(1/x) = e",
      "L'Hôpital: lim f/g = lim f'/g' (0/0 or ∞/∞)",
      "f'(a) = lim(h→0) [f(a+h)-f(a)]/h",
      "Chain rule: d/dx f(g(x)) = f'(g(x))·g'(x)",
    ],
    "Application of Derivatives": [
      "Slope of tangent = f'(a)",
      "Normal slope = -1/f'(a)",
      "f'(x)=0 at maxima/minima",
      "f''(x)<0: maxima; f''(x)>0: minima",
      "Rate: dy/dt = (dy/dx)·(dx/dt)",
    ],
    Integrals: [
      "∫xⁿdx = xⁿ⁺¹/(n+1)+C",
      "∫eˣdx = eˣ+C",
      "∫sinx dx = -cosx+C",
      "∫1/x dx = ln|x|+C",
      "∫ₐᵇf(x)dx = F(b)-F(a)",
    ],
    "Differential Equations": [
      "Order = highest derivative order",
      "Variable sep.: f(y)dy = g(x)dx",
      "IF = e^(∫P dx) for linear DE",
      "General sol. = complementary + particular",
      "Homogeneous: substitute y = vx",
    ],
    "Coordinate Geometry (Straight Lines, Circles, Conics)": [
      "Distance = √((x₂-x₁)²+(y₂-y₁)²)",
      "Circle: (x-h)²+(y-k)² = r²",
      "Parabola y²=4ax: focus (a,0)",
      "Ellipse: e = c/a, c² = a²-b²",
      "Distance point to line = |ax₁+by₁+c|/√(a²+b²)",
    ],
    "3D Geometry": [
      "l²+m²+n² = 1 (direction cosines)",
      "d = |(a₂-a₁)·(b₁×b₂)|/|b₁×b₂|",
      "Plane: ax+by+cz = d",
      "Angle between lines: cosθ = |l₁l₂+m₁m₂+n₁n₂|",
      "Foot of perp. from point to plane formula",
    ],
    Vectors: [
      "a·b = |a||b|cosθ",
      "|a×b| = |a||b|sinθ",
      "[a b c] = a·(b×c) (scalar triple product)",
      "Projection of a on b = (a·b)/|b|",
      "a×(b×c) = (a·c)b - (a·b)c",
    ],
    "Statistics & Probability": [
      "P(A∪B) = P(A)+P(B)-P(A∩B)",
      "P(A|B) = P(A∩B)/P(B)",
      "Bayes: P(A|B) = P(B|A)·P(A)/P(B)",
      "Binomial: P(X=r) = C(n,r)pʳ(1-p)ⁿ⁻ʳ",
      "Variance σ² = E(X²) - [E(X)]²",
    ],
    Trigonometry: [
      "sin²θ+cos²θ = 1",
      "sin(A+B) = sinAcosB+cosAsinB",
      "sin2θ = 2sinθcosθ, cos2θ = 1-2sin²θ",
      "Sine rule: a/sinA = 2R",
      "cosA = (b²+c²-a²)/2bc",
    ],
  },
};

const exampleProblems: Record<
  string,
  Record<string, Array<{ problem: string; solution: string }>>
> = {
  Physics: {
    "Units & Measurements": [
      {
        problem: "Express the dimension of force.",
        solution: "F = ma → [M][LT⁻²] = [MLT⁻²]",
      },
      {
        problem: "If length is measured as (5.0 ± 0.1) cm, find % error.",
        solution: "% error = (0.1/5.0)×100 = 2%",
      },
    ],
    Kinematics: [
      {
        problem:
          "A ball is projected at 30° with u=20 m/s. Find the range (g=10).",
        solution: "R = u²sin2θ/g = 400×sin60°/10 = 40×0.866 ≈ 34.6 m",
      },
      {
        problem:
          "A car accelerates from rest at 2 m/s². Find velocity after 5 s.",
        solution: "v = u+at = 0+2×5 = 10 m/s",
      },
    ],
    "Laws of Motion": [
      {
        problem:
          "A 5 kg block is pushed with 20 N on a surface with μ=0.2. Find acceleration (g=10).",
        solution: "f=μmg=0.2×5×10=10 N; F_net=20-10=10 N; a=F/m=10/5=2 m/s²",
      },
    ],
    "Work, Energy & Power": [
      {
        problem: "A force of 10 N moves a body 5 m at 60°. Find work done.",
        solution: "W = Fd·cosθ = 10×5×cos60° = 50×0.5 = 25 J",
      },
    ],
    "Rotational Motion": [
      {
        problem:
          "Find the moment of inertia of a solid sphere of mass 2 kg, radius 0.1 m about diameter.",
        solution: "I = 2/5·MR² = 2/5×2×0.01 = 0.008 kg·m²",
      },
    ],
    Gravitation: [
      {
        problem: "Find escape velocity from Earth (g=9.8, R=6400 km).",
        solution: "v_esc = √(2gR) = √(2×9.8×6.4×10⁶) ≈ 11.2 km/s",
      },
    ],
    "Properties of Matter": [
      {
        problem:
          "A wire of length 2 m, radius 1 mm, Y=2×10¹¹ Pa is stretched by 0.1 mm. Find stress.",
        solution:
          "Strain = 0.1×10⁻³/2 = 5×10⁻⁵; Stress = Y×Strain = 2×10¹¹×5×10⁻⁵ = 10⁷ Pa",
      },
    ],
    Thermodynamics: [
      {
        problem:
          "A Carnot engine operates between 400 K and 300 K. Find efficiency.",
        solution: "η = 1 - T₂/T₁ = 1 - 300/400 = 0.25 = 25%",
      },
    ],
    "Oscillations & Waves": [
      {
        problem:
          "A spring of k=100 N/m has mass 0.25 kg attached. Find time period.",
        solution: "T = 2π√(m/k) = 2π√(0.25/100) = 2π×0.05 = 0.314 s",
      },
    ],
    Electrostatics: [
      {
        problem: "Two charges of 2μC and 3μC are 0.3 m apart. Find force.",
        solution: "F = kq₁q₂/r² = 9×10⁹×2×10⁻⁶×3×10⁻⁶/0.09 = 0.6 N",
      },
    ],
    "Current Electricity": [
      {
        problem:
          "A battery of EMF 12V and internal resistance 1Ω drives a 5Ω resistor. Find current.",
        solution: "I = ε/(R+r) = 12/(5+1) = 2 A",
      },
    ],
    "Magnetic Effects of Current": [
      {
        problem:
          "A proton moves at 10⁵ m/s perpendicular to B=0.1 T. Find radius of circular path.",
        solution: "r = mv/qB = 1.67×10⁻²⁷×10⁵/(1.6×10⁻¹⁹×0.1) ≈ 0.01 m = 1 cm",
      },
    ],
    "Electromagnetic Induction": [
      {
        problem:
          "A coil of 50 turns, area 0.04 m², B changes from 0.1 T to 0.3 T in 2 s. Find EMF.",
        solution: "EMF = -N·dΦ/dt = 50×0.04×(0.3-0.1)/2 = 50×0.04×0.1 = 0.2 V",
      },
    ],
    Optics: [
      {
        problem:
          "Object is 30 cm from a concave lens of focal length -20 cm. Find image distance.",
        solution:
          "1/v - 1/u = 1/f; 1/v = 1/f + 1/u = -1/20 + (-1/30) = -5/60; v = -12 cm",
      },
    ],
    "Modern Physics": [
      {
        problem: "Find the energy of a photon with wavelength 600 nm.",
        solution:
          "E = hc/λ = (6.63×10⁻³⁴×3×10⁸)/(600×10⁻⁹) ≈ 3.3×10⁻¹⁹ J ≈ 2.07 eV",
      },
    ],
  },
  Chemistry: {
    "Some Basic Concepts of Chemistry": [
      {
        problem: "Find moles in 36 g of water (M=18 g/mol).",
        solution: "n = m/M = 36/18 = 2 moles",
      },
      {
        problem: "Calculate molarity of 4 g NaOH (M=40) in 500 mL.",
        solution: "n = 4/40 = 0.1 mol; M = 0.1/0.5 = 0.2 mol/L",
      },
    ],
    "Structure of Atom": [
      {
        problem:
          "Find wavelength of photon emitted when electron falls from n=3 to n=2 in H atom.",
        solution:
          "ΔE = 13.6(1/4 - 1/9) = 13.6×5/36 = 1.89 eV; λ = hc/ΔE ≈ 656 nm (Balmer series)",
      },
    ],
    "Chemical Bonding": [
      {
        problem: "Find bond order of O₂ using MO theory.",
        solution:
          "BO = (Nb-Na)/2 = (8-4)/2 = 2; O₂ has a double bond and is paramagnetic",
      },
    ],
    "States of Matter": [
      {
        problem: "2 moles of gas at 300 K occupy 10 L. Find pressure.",
        solution: "P = nRT/V = 2×0.0821×300/10 = 4.93 atm",
      },
    ],
    Thermodynamics: [
      {
        problem:
          "ΔH=-100 kJ, ΔS=-200 J/K at 300 K. Is the reaction spontaneous?",
        solution:
          "ΔG = ΔH-TΔS = -100000-300×(-200) = -100000+60000 = -40000 J = -40 kJ < 0. Spontaneous.",
      },
    ],
    Equilibrium: [
      {
        problem: "pH of 0.01 M HCl solution.",
        solution: "[H⁺] = 0.01 M; pH = -log(0.01) = 2",
      },
    ],
    "Redox Reactions": [
      {
        problem: "Find oxidation state of Cr in K₂Cr₂O₇.",
        solution: "2(+1) + 2x + 7(-2) = 0 → 2+2x-14=0 → x=+6",
      },
    ],
    "Hydrogen & s-Block Elements": [
      {
        problem: "Write reaction of sodium with water.",
        solution: "2Na + 2H₂O → 2NaOH + H₂↑; exothermic reaction",
      },
    ],
    "p-Block Elements": [
      {
        problem:
          "Write the reaction for manufacture of SO₃ in Contact process.",
        solution: "2SO₂ + O₂ → 2SO₃ (with V₂O₅ catalyst at 450°C)",
      },
    ],
    "d and f-Block Elements": [
      {
        problem: "Calculate magnetic moment of Fe³⁺ (Z=26).",
        solution:
          "Fe³⁺: [Ar]3d⁵; 5 unpaired electrons; μ = √(5×7) = √35 ≈ 5.92 BM",
      },
    ],
    "Coordination Compounds": [
      {
        problem: "Write IUPAC name of [Co(NH₃)₄Cl₂]Cl.",
        solution: "Tetraamminedichloridocobalt(III) chloride",
      },
    ],
    "Organic Chemistry Basics": [
      {
        problem: "Identify the IUPAC name of CH₃CH(CH₃)CH₂CH₃.",
        solution:
          "2-methylbutane (longest chain = 4 carbons, methyl branch at C2)",
      },
    ],
    Hydrocarbons: [
      {
        problem: "Predict the product of HBr addition to CH₂=CHCH₃ (propene).",
        solution:
          "By Markovnikov's rule, H adds to CH₂ (fewer H side), giving CH₃CHBrCH₃ (2-bromopropane)",
      },
    ],
    "Alcohols, Phenols & Ethers": [
      {
        problem:
          "Arrange in order of boiling point: methanol, ethanol, propan-1-ol.",
        solution:
          "Propan-1-ol > ethanol > methanol; longer chain → more van der Waals forces → higher bp",
      },
    ],
    "Aldehydes, Ketones & Carboxylic Acids": [
      {
        problem: "Why do aldehydes give Tollens' test but ketones do not?",
        solution:
          "Aldehydes are oxidised to carboxylic acids (reducing agents); ketones cannot be easily oxidised",
      },
    ],
    Amines: [
      {
        problem:
          "Arrange in order of basicity: CH₃NH₂, (CH₃)₂NH, C₆H₅NH₂, NH₃.",
        solution:
          "(CH₃)₂NH > CH₃NH₂ > NH₃ > C₆H₅NH₂; resonance delocalisation in aniline reduces basicity",
      },
    ],
    "Biomolecules & Polymers": [
      {
        problem: "Classify nylon-6,6 as addition or condensation polymer.",
        solution:
          "Condensation polymer; formed by reaction of hexamethylenediamine and adipic acid with loss of water",
      },
    ],
  },
  Mathematics: {
    "Sets, Relations & Functions": [
      {
        problem: "If n(A)=3, n(B)=4, n(A∩B)=1, find n(A∪B).",
        solution: "n(A∪B) = n(A)+n(B)-n(A∩B) = 3+4-1 = 6",
      },
    ],
    "Complex Numbers": [
      {
        problem: "Find modulus and argument of z = 1+i.",
        solution: "|z| = √(1+1) = √2; arg = tan⁻¹(1/1) = π/4",
      },
    ],
    "Sequences & Series": [
      {
        problem: "Find sum of first 10 terms of AP: 2, 5, 8, ...",
        solution: "a=2, d=3; S₁₀ = 10/2×(2×2+9×3) = 5×31 = 155",
      },
    ],
    "Quadratic Equations": [
      {
        problem: "Find roots of x²-5x+6=0.",
        solution: "D = 25-24 = 1; x = (5±1)/2 → x=3 or x=2",
      },
    ],
    "Permutations & Combinations": [
      {
        problem:
          "In how many ways can 4 books be arranged from 7 different books?",
        solution: "⁷P₄ = 7×6×5×4 = 840 ways",
      },
    ],
    "Binomial Theorem": [
      {
        problem: "Find the 4th term in expansion of (x+2)⁶.",
        solution: "T₄ = C(6,3)x³·2³ = 20×x³×8 = 160x³",
      },
    ],
    "Matrices & Determinants": [
      {
        problem: "Find det of [[2,3],[1,4]].",
        solution: "det = 2×4 - 3×1 = 8-3 = 5",
      },
    ],
    "Limits, Continuity & Differentiability": [
      {
        problem: "Find lim(x→2) (x²-4)/(x-2).",
        solution: "Factor: (x+2)(x-2)/(x-2) = x+2; limit = 2+2 = 4",
      },
    ],
    "Application of Derivatives": [
      {
        problem: "Find the minimum value of f(x) = x² - 4x + 5.",
        solution: "f'(x) = 2x-4 = 0 → x=2; f''(2)=2>0 (min); f(2) = 4-8+5 = 1",
      },
    ],
    Integrals: [
      { problem: "Evaluate ∫₀¹ x² dx.", solution: "[x³/3]₀¹ = 1/3 - 0 = 1/3" },
    ],
    "Differential Equations": [
      {
        problem: "Solve dy/dx = x/y.",
        solution:
          "Separate: y dy = x dx; integrate: y²/2 = x²/2 + C; y² = x² + K",
      },
    ],
    "Coordinate Geometry (Straight Lines, Circles, Conics)": [
      {
        problem: "Find distance from origin to line 3x+4y-10=0.",
        solution: "d = |3×0+4×0-10|/√(9+16) = 10/5 = 2",
      },
    ],
    "3D Geometry": [
      {
        problem: "Find the distance between points (1,2,3) and (4,6,3).",
        solution: "d = √((4-1)²+(6-2)²+(3-3)²) = √(9+16+0) = √25 = 5",
      },
    ],
    Vectors: [
      {
        problem: "Find angle between vectors a=(1,0,0) and b=(0,1,0).",
        solution: "a·b = 0; cosθ = 0/1×1 = 0; θ = 90°",
      },
    ],
    "Statistics & Probability": [
      {
        problem: "A coin is tossed 5 times. Find P(exactly 3 heads).",
        solution: "P = C(5,3)×(0.5)³×(0.5)² = 10×(1/32) = 10/32 = 5/16",
      },
    ],
    Trigonometry: [
      {
        problem: "Find sin75°.",
        solution:
          "sin(45°+30°) = sin45°cos30°+cos45°sin30° = (√2/2)(√3/2)+(√2/2)(1/2) = (√6+√2)/4",
      },
    ],
  },
};

const subjectColors: Record<string, string> = {
  Physics: "from-blue-500/20 to-cyan-500/20",
  Chemistry: "from-green-500/20 to-emerald-500/20",
  Mathematics: "from-purple-500/20 to-violet-500/20",
};

type SubjectKey = "MATHEMATICS" | "PHYSICS" | "CHEMISTRY";

const subjectData: Record<
  SubjectKey,
  { chapterName: string; questions: Question[] }[]
> = {
  MATHEMATICS: mathQuestions,
  PHYSICS: physicsQuestions,
  CHEMISTRY: chemistryQuestions,
};

function PracticeSection() {
  const [activeSubject, setActiveSubject] = useState<SubjectKey>("MATHEMATICS");
  const [selectedChapterIdx, setSelectedChapterIdx] = useState(0);
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  const chapters = subjectData[activeSubject];
  const chapter = chapters[selectedChapterIdx];
  const questions = chapter?.questions ?? [];
  const currentQ = questions[currentQIdx];

  const correctCount = questions.filter(
    (q, i) => userAnswers[i] === q.answer,
  ).length;
  const answeredCount = Object.keys(userAnswers).length;
  const progress =
    questions.length > 0 ? (answeredCount / questions.length) * 100 : 0;

  function handleSubjectChange(subject: SubjectKey) {
    setActiveSubject(subject);
    setSelectedChapterIdx(0);
    setCurrentQIdx(0);
    setUserAnswers({});
  }

  function handleChapterChange(idx: number) {
    setSelectedChapterIdx(idx);
    setCurrentQIdx(0);
    setUserAnswers({});
  }

  function handleAnswer(option: string) {
    if (userAnswers[currentQIdx] !== undefined) return;
    setUserAnswers((prev) => ({ ...prev, [currentQIdx]: option }));
  }

  function handleReset() {
    setCurrentQIdx(0);
    setUserAnswers({});
  }

  const selectedAnswer = userAnswers[currentQIdx];
  const isAnswered = selectedAnswer !== undefined;
  const isCorrect = selectedAnswer === currentQ?.answer;

  return (
    <section id="practice" className="container py-20">
      <div className="text-center mb-10 space-y-3">
        <div className="flex items-center justify-center gap-3">
          <Brain className="w-8 h-8 text-primary" />
          <h3 className="text-3xl md:text-4xl font-bold">PRACTICE MCQs</h3>
        </div>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          SHARPEN YOUR SKILLS WITH TOPIC-WISE PRACTICE QUESTIONS
        </p>
      </div>

      {/* Subject Tabs */}
      <div
        className="flex justify-center mb-6 gap-2 flex-wrap"
        data-ocid="practice.tab"
      >
        {(["MATHEMATICS", "PHYSICS", "CHEMISTRY"] as SubjectKey[]).map(
          (subj) => (
            <Button
              key={subj}
              variant={activeSubject === subj ? "default" : "outline"}
              onClick={() => handleSubjectChange(subj)}
              className="font-bold tracking-wider"
              data-ocid={`practice.${subj.toLowerCase()}.tab`}
            >
              {subj}
            </Button>
          ),
        )}
      </div>

      {/* Chapter Selector */}
      <div className="max-w-2xl mx-auto mb-8">
        <label
          htmlFor="chapter-select"
          className="block text-sm font-bold mb-2 text-muted-foreground tracking-wider"
        >
          SELECT CHAPTER
        </label>
        <select
          id="chapter-select"
          className="w-full border border-border rounded-md p-3 bg-background text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary"
          value={selectedChapterIdx}
          onChange={(e) => handleChapterChange(Number(e.target.value))}
          data-ocid="practice.chapter.select"
        >
          {chapters.map((ch, idx) => (
            <option key={ch.chapterName} value={idx}>
              {ch.chapterName.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* Score & Progress */}
      <div className="max-w-2xl mx-auto mb-6 space-y-3">
        <div className="flex items-center justify-between text-sm font-semibold">
          <span className="flex items-center gap-2 text-muted-foreground">
            <Trophy className="w-4 h-4" />
            SCORE: {correctCount} / {answeredCount} ANSWERED CORRECTLY
          </span>
          <Badge
            variant={correctCount > answeredCount / 2 ? "default" : "secondary"}
          >
            {answeredCount === 0
              ? "NOT STARTED"
              : `${Math.round((correctCount / Math.max(answeredCount, 1)) * 100)}% CORRECT`}
          </Badge>
        </div>
        <Progress
          value={progress}
          className="h-2"
          data-ocid="practice.progress.loading_state"
        />
        <p className="text-xs text-muted-foreground text-right">
          {answeredCount} OF {questions.length} QUESTIONS ATTEMPTED
        </p>
      </div>

      {/* Question Card */}
      {currentQ && (
        <Card
          className="max-w-2xl mx-auto shadow-md"
          data-ocid="practice.question.card"
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className="font-bold text-xs tracking-wider"
              >
                QUESTION {currentQIdx + 1} OF {questions.length}
              </Badge>
              <Badge
                variant="secondary"
                className="font-bold text-xs tracking-wider"
              >
                {chapter.chapterName.toUpperCase()}
              </Badge>
            </div>
            <CardTitle className="text-base md:text-lg font-semibold leading-snug pt-2">
              <MathText text={currentQ.question} />
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            {(["A", "B", "C", "D"] as const).map((opt) => {
              const optText = currentQ.options[opt];
              const isSelected = selectedAnswer === opt;
              const isThisCorrect = opt === currentQ.answer;

              let btnClass =
                "w-full text-left p-3 rounded-lg border-2 font-medium transition-all text-sm";
              if (!isAnswered) {
                btnClass +=
                  " border-border hover:border-primary hover:bg-primary/5 cursor-pointer";
              } else if (isThisCorrect) {
                btnClass +=
                  " border-green-500 bg-green-500/10 text-green-700 dark:text-green-400";
              } else if (isSelected && !isThisCorrect) {
                btnClass +=
                  " border-red-500 bg-red-500/10 text-red-700 dark:text-red-400";
              } else {
                btnClass += " border-border opacity-60";
              }

              return (
                <button
                  type="button"
                  key={opt}
                  className={btnClass}
                  onClick={() => handleAnswer(opt)}
                  disabled={isAnswered}
                  data-ocid={`practice.option_${opt.toLowerCase()}.button`}
                >
                  <span className="font-bold mr-2">{opt}.</span>
                  <MathText text={optText} />
                  {isAnswered && isThisCorrect && (
                    <span className="ml-2 text-green-600 font-bold">
                      ✓ CORRECT
                    </span>
                  )}
                  {isAnswered && isSelected && !isThisCorrect && (
                    <span className="ml-2 text-red-600 font-bold">✗ WRONG</span>
                  )}
                </button>
              );
            })}

            {isAnswered && (
              <div
                className={`mt-2 p-3 rounded-lg text-sm font-semibold ${isCorrect ? "bg-green-500/10 text-green-700 border border-green-500/30" : "bg-red-500/10 text-red-700 border border-red-500/30"}`}
                data-ocid={
                  isCorrect
                    ? "practice.answer.success_state"
                    : "practice.answer.error_state"
                }
              >
                {isCorrect
                  ? "✓ EXCELLENT! CORRECT ANSWER!"
                  : `✗ INCORRECT. CORRECT ANSWER: ${currentQ.answer}. ${currentQ.options[currentQ.answer as keyof typeof currentQ.options]}`}
              </div>
            )}
          </CardContent>

          {/* Navigation */}
          <div className="flex items-center justify-between p-4 border-t border-border">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentQIdx((p) => Math.max(0, p - 1))}
              disabled={currentQIdx === 0}
              data-ocid="practice.prev.button"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              PREVIOUS
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              data-ocid="practice.reset.button"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              RESET
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentQIdx((p) => Math.min(questions.length - 1, p + 1))
              }
              disabled={currentQIdx === questions.length - 1}
              data-ocid="practice.next.button"
            >
              NEXT
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </Card>
      )}
    </section>
  );
}

function App() {
  const { actor, isFetching } = useActor();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  const { data: greeting } = useQuery({
    queryKey: ["greeting"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.greet("viitjee student");
    },
    enabled: !!actor && !isFetching,
  });

  const subjectIcons: Record<string, { path: string; alt: string }> = {
    Physics: {
      path: "/assets/generated/physics-tab-icon.dim_256x256.png",
      alt: "Physics icon",
    },
    Chemistry: {
      path: "/assets/generated/chemistry-tab-icon.dim_256x256.png",
      alt: "Chemistry icon",
    },
    Mathematics: {
      path: "/assets/generated/math-tab-icon.dim_256x256.png",
      alt: "Mathematics icon",
    },
  };

  const subjectHeaderImages: Record<string, { path: string; alt: string }> = {
    Physics: {
      path: "/assets/generated/physics-course-header.dim_800x300.jpg",
      alt: "Physics course header",
    },
    Chemistry: {
      path: "/assets/generated/chemistry-course-header.dim_800x300.jpg",
      alt: "Chemistry course header",
    },
    Mathematics: {
      path: "/assets/generated/math-course-header.dim_800x300.jpg",
      alt: "Mathematics course header",
    },
  };

  const selectedChapters = selectedCourse ? syllabusData[selectedCourse] : [];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/assets/generated/viitjee-logo.dim_400x120.png"
              alt="Viit-Jee logo"
              className="h-8 w-auto object-contain"
            />
            <div>
              <h1 className="text-xl font-bold tracking-tight">VIIT JEE</h1>
              <p className="text-xs text-muted-foreground">
                BY VENKATESH KOMIRISETTY
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
              data-ocid="nav.features.link"
            >
              Features
            </a>
            <a
              href="#courses"
              className="text-sm font-medium hover:text-primary transition-colors"
              data-ocid="nav.courses.link"
            >
              Courses
            </a>
            <a
              href="#practice"
              className="text-sm font-medium hover:text-primary transition-colors"
              data-ocid="nav.practice.link"
            >
              PRACTICE
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
              data-ocid="nav.about.link"
            >
              About
            </a>
            <a
              href="mailto:viitjeetec@gmail.com"
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
              data-ocid="nav.contact.link"
            >
              <Mail className="w-4 h-4" />
              viitjeetec@gmail.com
            </a>
            <Button size="sm" data-ocid="nav.get_started.button">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 text-sm font-medium bg-accent text-accent-foreground rounded-full">
                Your Path to JEE Success
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Master JEE with
                <span className="block text-primary mt-2">Expert Guidance</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Comprehensive preparation platform for JEE Main and Advanced.
                Learn from structured courses, practice with thousands of
                problems, and track your progress.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="gap-2"
                  data-ocid="hero.start_learning.button"
                >
                  <Zap className="w-4 h-4" />
                  Start Learning
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  data-ocid="hero.explore_courses.button"
                >
                  Explore Courses
                </Button>
              </div>
              {greeting && (
                <p className="text-sm text-muted-foreground italic">
                  {greeting}
                </p>
              )}
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <BookOpen className="w-24 h-24 mx-auto text-primary" />
                  <p className="text-2xl font-bold">Excellence in Education</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Stats Section */}
        <section className="container py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <stat.icon className="w-8 h-8 mx-auto text-primary" />
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Features Section */}
        <section id="features" className="container py-20">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl md:text-4xl font-bold">
              WHY CHOOSE VIIT JEE?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to excel in your JEE preparation journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-2 hover:border-primary transition-colors"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Courses Section */}
        <section id="courses" className="container py-20">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl md:text-4xl font-bold">Featured Courses</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured learning paths designed for JEE success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <Card key={course.subject} className="overflow-hidden">
                <img
                  src={subjectHeaderImages[course.subject].path}
                  alt={subjectHeaderImages[course.subject].alt}
                  className="w-full h-40 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={subjectIcons[course.subject].path}
                      alt={subjectIcons[course.subject].alt}
                      className="w-10 h-10 object-contain"
                    />
                    <CardTitle className="text-xl">{course.subject}</CardTitle>
                  </div>
                  <CardDescription className="space-y-2">
                    <p>{course.topics}</p>
                    <p className="font-medium text-foreground">
                      {course.lessons}
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={() => setSelectedCourse(course.subject)}
                    data-ocid={`courses.explore.button.${idx + 1}`}
                  >
                    Explore Course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Practice Section */}
        <PracticeSection />

        <Separator />

        {/* About Section */}
        <section id="about" className="container py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">ABOUT VIIT JEE</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              VIIT JEE is a comprehensive educational platform dedicated to
              helping students achieve their dreams of cracking JEE Main and
              Advanced. Founded by VENKATESH KOMIRISETTY, our mission is to
              provide high-quality, accessible education that empowers students
              with the knowledge and confidence they need to succeed.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a focus on conceptual clarity, rigorous practice, and
              personalized learning, we&apos;ve helped thousands of students
              reach their goals. Our expert faculty, cutting-edge technology,
              and student-centric approach make us the preferred choice for JEE
              preparation.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-20">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardHeader className="text-center space-y-4 py-12">
              <CardTitle className="text-3xl md:text-4xl">
                Ready to Start Your Journey?
              </CardTitle>
              <CardDescription className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Join thousands of successful students who chose VIIT JEE for
                their JEE preparation
              </CardDescription>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  data-ocid="cta.get_started.button"
                >
                  Get Started Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  data-ocid="cta.schedule_demo.button"
                >
                  Schedule a Demo
                </Button>
              </div>
            </CardHeader>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/generated/viitjee-logo.dim_400x120.png"
                  alt="Viit-Jee logo"
                  className="h-8 w-auto object-contain"
                />
                <div>
                  <h4 className="font-bold">VIIT JEE</h4>
                  <p className="text-xs text-muted-foreground">
                    BY VENKATESH KOMIRISETTY
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted partner for JEE preparation
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Courses</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#courses"
                    className="hover:text-foreground transition-colors"
                  >
                    Physics
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-foreground transition-colors"
                  >
                    Chemistry
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-foreground transition-colors"
                  >
                    Mathematics
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Resources</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#features"
                    className="hover:text-foreground transition-colors"
                  >
                    Study Material
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-foreground transition-colors"
                  >
                    Mock Tests
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-foreground transition-colors"
                  >
                    Previous Papers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Get in touch with us:</p>
                <a
                  href="mailto:viitjeetec@gmail.com"
                  className="hover:text-foreground transition-colors flex items-center gap-2 font-medium"
                >
                  <Mail className="w-4 h-4" />
                  viitjeetec@gmail.com
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} VIIT JEE BY VENKATESH
              KOMIRISETTY. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "viitjee")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Syllabus Dialog */}
      <Dialog
        open={!!selectedCourse}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedCourse(null);
            setExpandedChapter(null);
          }
        }}
      >
        <DialogContent className="max-w-2xl" data-ocid="syllabus.dialog">
          <DialogHeader>
            <div
              className={`rounded-lg p-4 mb-2 bg-gradient-to-r ${selectedCourse ? subjectColors[selectedCourse] : ""}`}
            >
              <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                {selectedCourse && (
                  <img
                    src={subjectIcons[selectedCourse]?.path}
                    alt={selectedCourse}
                    className="w-10 h-10 object-contain"
                  />
                )}
                {selectedCourse} Syllabus
              </DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Complete JEE Main &amp; Advanced chapter list — click a chapter
                for theory points, formulas &amp; example problems
              </p>
            </div>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh]">
            <div className="flex flex-col gap-2 pr-4">
              {selectedChapters.map((chapter, index) => {
                const isExpanded = expandedChapter === chapter;
                const points = selectedCourse
                  ? theoryPoints[selectedCourse]?.[chapter]
                  : undefined;
                const formulas = selectedCourse
                  ? formulasData[selectedCourse]?.[chapter]
                  : undefined;
                const problems = selectedCourse
                  ? exampleProblems[selectedCourse]?.[chapter]
                  : undefined;
                const subjectQBank =
                  selectedCourse === "Mathematics"
                    ? mathQuestions
                    : selectedCourse === "Physics"
                      ? physicsQuestions
                      : selectedCourse === "Chemistry"
                        ? chemistryQuestions
                        : [];
                const chapterQs = subjectQBank.find(
                  (c) =>
                    c.chapterName
                      .toLowerCase()
                      .includes(chapter.toLowerCase().slice(0, 8)) ||
                    chapter
                      .toLowerCase()
                      .includes(c.chapterName.toLowerCase().slice(0, 8)),
                )?.questions as Question[] | undefined;
                return (
                  <div
                    key={chapter}
                    className="rounded-lg border bg-muted/30 overflow-hidden"
                    data-ocid={`syllabus.item.${index + 1}`}
                  >
                    <button
                      type="button"
                      className="w-full flex items-center gap-3 p-3 hover:bg-muted/60 transition-colors text-left"
                      onClick={() =>
                        setExpandedChapter(isExpanded ? null : chapter)
                      }
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium leading-tight">
                          {chapter}
                        </p>
                      </div>
                      <CheckCircle2 className="flex-shrink-0 w-4 h-4 text-green-500" />
                      <ChevronDown
                        className={`flex-shrink-0 w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="px-4 pb-3 pt-1 border-t bg-muted/20">
                        {/* Theory Points */}
                        {points && points.length > 0 && (
                          <>
                            <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                              Theory Points
                            </p>
                            <ul className="space-y-1.5 mb-3">
                              {points.map((point) => (
                                <li
                                  key={point.slice(0, 20)}
                                  className="flex items-start gap-2 text-xs text-muted-foreground"
                                >
                                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60" />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                        {/* Key Formulas */}
                        {formulas && formulas.length > 0 && (
                          <div className="mt-3">
                            <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wide mb-2">
                              Key Formulas
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {formulas.map((formula) => (
                                <span
                                  key={formula.slice(0, 30)}
                                  className="font-mono text-xs bg-orange-50 dark:bg-orange-950/30 text-orange-800 dark:text-orange-300 px-2 py-0.5 rounded border border-orange-200 dark:border-orange-800"
                                >
                                  <MathText text={formula} />
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {/* Example Problems */}
                        {problems && problems.length > 0 && (
                          <div className="mt-3">
                            <p className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wide mb-2">
                              Example Problems
                            </p>
                            <div className="space-y-2">
                              {problems.map((ex) => (
                                <div
                                  key={ex.problem.slice(0, 30)}
                                  className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded p-2 text-xs"
                                >
                                  <p className="font-medium text-green-900 dark:text-green-200">
                                    Q: {ex.problem}
                                  </p>
                                  <p className="text-green-700 dark:text-green-400 mt-0.5">
                                    A: {ex.solution}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    {chapterQs && chapterQs.length > 0 && (
                      <div className="px-4 pb-3 pt-2 border-t">
                        <button
                          type="button"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs uppercase tracking-wide"
                          onClick={() =>
                            downloadQuestionsPDF(
                              selectedCourse || "",
                              chapter,
                              chapterQs,
                            )
                          }
                        >
                          DOWNLOAD 100 QUESTIONS PDF
                        </button>
                      </div>
                    )}
                    {chapter === "Limits, Continuity & Differentiability" && (
                      <div className="px-4 pb-3 pt-2 border-t flex flex-col gap-2">
                        <a
                          href="/assets/uploads/lim1-019d32e5-6941-751f-916f-f46f2a9c045f-1.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-xs uppercase tracking-wide text-center block"
                        >
                          DOWNLOAD LIMITS PDF - PART 1
                        </a>
                        <a
                          href="/assets/uploads/lim2-019d32e5-6da0-700d-b759-a22ee50a84a0-2.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-xs uppercase tracking-wide text-center block"
                        >
                          DOWNLOAD LIMITS PDF - PART 2
                        </a>
                        <a
                          href="/assets/lim1-019d32ed-0854-765d-9184-51eabfd8c6ab.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-xs uppercase tracking-wide text-center block"
                        >
                          LIMITS QUIZ - PART 1
                        </a>
                        <a
                          href="/assets/lim_2-019d3319-0529-70bb-8d0e-e18f7b0e0def.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-xs uppercase tracking-wide text-center block"
                        >
                          LIMITS QUIZ - PART 2
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollArea>
          <div className="flex justify-between items-center pt-2 border-t">
            <p className="text-sm text-muted-foreground">
              {selectedChapters.length} chapters covered
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCourse(null);
                setExpandedChapter(null);
              }}
              className="gap-2"
              data-ocid="syllabus.close.button"
            >
              <X className="w-4 h-4" />
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
