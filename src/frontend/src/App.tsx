import { useQuery } from "@tanstack/react-query";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Heart,
  Mail,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
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
import { ScrollArea } from "./components/ui/scroll-area";
import { Separator } from "./components/ui/separator";
import { useActor } from "./hooks/useActor";

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
      "Standard limits: lim(x→0) sinx/x = 1; lim(x→∞)(1+1/x)ˣ = e",
      "L'Hôpital's rule: if 0/0 or ∞/∞ form, differentiate numerator and denominator",
      "Continuity at x=a: lim(x→a) f(x) = f(a) (limit equals function value)",
      "Types of discontinuity: removable, jump, infinite",
      "Differentiability implies continuity; converse not always true (e.g., |x| at 0)",
    ],
    "Application of Derivatives": [
      "Slope of tangent = f'(a); normal slope = −1/f'(a)",
      "Increasing function: f'(x) > 0; decreasing: f'(x) < 0",
      "Maxima/minima: f'(x) = 0 at critical points; use second derivative test",
      "Rolle's theorem: f'(c) = 0 for some c in (a,b) if f(a) = f(b)",
      "Mean value theorem: f'(c) = [f(b)−f(a)]/(b−a) for some c in (a,b)",
    ],
    Integrals: [
      "Standard integrals: ∫xⁿdx = xⁿ⁺¹/(n+1), ∫sinx dx = −cosx, ∫eˣdx = eˣ",
      "Integration by substitution: replace variable to simplify integrand",
      "Integration by parts: ∫u·dv = uv − ∫v·du (ILATE rule for choosing u)",
      "Partial fractions decompose rational functions for integration",
      "Definite integral properties: ∫ₐᵇf(x)dx = −∫ᵦₐf(x)dx; area interpretation",
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

const subjectColors: Record<string, string> = {
  Physics: "from-blue-500/20 to-cyan-500/20",
  Chemistry: "from-green-500/20 to-emerald-500/20",
  Mathematics: "from-purple-500/20 to-violet-500/20",
};

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
                for theory points
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
                    {isExpanded && points && points.length > 0 && (
                      <div className="px-4 pb-3 pt-1 border-t bg-muted/20">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                          Theory Points
                        </p>
                        <ul className="space-y-1.5">
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
