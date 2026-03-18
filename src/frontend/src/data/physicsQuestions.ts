import type { Question } from "../utils/printPDF";
export const physicsQuestions: {
  chapterName: string;
  questions: Question[];
}[] = [
  {
    chapterName: "Laws of Motion",
    questions: [
      {
        id: 1,
        question: "Newton's first law is also called?",
        options: {
          A: "Law of acceleration",
          B: "Law of inertia",
          C: "Law of action-reaction",
          D: "Law of gravitation",
        },
        answer: "B",
      },
      {
        id: 2,
        question: "Force = ?",
        options: {
          A: "mass × velocity",
          B: "mass × acceleration",
          C: "mass × displacement",
          D: "mass / acceleration",
        },
        answer: "B",
      },
      {
        id: 3,
        question: "Newton's third law states?",
        options: {
          A: "F=ma",
          B: "Every action has equal and opposite reaction",
          C: "Inertia of motion",
          D: "Conservation of momentum",
        },
        answer: "B",
      },
      {
        id: 4,
        question: "The SI unit of force is?",
        options: { A: "Joule", B: "Watt", C: "Newton", D: "Pascal" },
        answer: "C",
      },
      {
        id: 5,
        question: "A body at rest has zero?",
        options: { A: "Mass", B: "Weight", C: "Net force", D: "Density" },
        answer: "C",
      },
      {
        id: 6,
        question: "Impulse = ?",
        options: {
          A: "Force × time",
          B: "Force / time",
          C: "Mass × velocity",
          D: "Both A and C",
        },
        answer: "D",
      },
      {
        id: 7,
        question: "The inertia of a body depends on?",
        options: { A: "Velocity", B: "Mass", C: "Acceleration", D: "Shape" },
        answer: "B",
      },
      {
        id: 8,
        question: "A 10 kg object accelerates at 2 m/s². Force applied is?",
        options: { A: "5 N", B: "12 N", C: "20 N", D: "8 N" },
        answer: "C",
      },
      {
        id: 9,
        question: "Friction force on a body at rest is called?",
        options: {
          A: "Kinetic friction",
          B: "Static friction",
          C: "Rolling friction",
          D: "Viscous friction",
        },
        answer: "B",
      },
      {
        id: 10,
        question:
          "The coefficient of kinetic friction is generally __ static friction?",
        options: {
          A: "Greater than",
          B: "Less than",
          C: "Equal to",
          D: "Unrelated to",
        },
        answer: "B",
      },
      {
        id: 11,
        question:
          "A 5 kg block on a frictionless surface is pushed by 15 N. Acceleration is?",
        options: { A: "3 m/s²", B: "5 m/s²", C: "75 m/s²", D: "0.33 m/s²" },
        answer: "A",
      },
      {
        id: 12,
        question: "The normal force on a horizontal surface equals?",
        options: { A: "mg sinθ", B: "mg cosθ", C: "mg", D: "Zero" },
        answer: "C",
      },
      {
        id: 13,
        question: "Pseudo force arises in?",
        options: {
          A: "Inertial frames",
          B: "Non-inertial frames",
          C: "Rotating frames only",
          D: "Frames at rest",
        },
        answer: "B",
      },
      {
        id: 14,
        question: "On an incline of angle θ, normal force = ?",
        options: { A: "mg", B: "mg sinθ", C: "mg cosθ", D: "mg tanθ" },
        answer: "C",
      },
      {
        id: 15,
        question: "Conservation of momentum applies when?",
        options: {
          A: "No external force",
          B: "No internal force",
          C: "Constant velocity",
          D: "Constant acceleration",
        },
        answer: "A",
      },
      {
        id: 16,
        question:
          "A 3 kg and 5 kg object collide. Their combined mass moves with common velocity. This is?",
        options: {
          A: "Elastic collision",
          B: "Inelastic collision",
          C: "Perfectly inelastic collision",
          D: "Explosion",
        },
        answer: "C",
      },
      {
        id: 17,
        question: "Limiting friction is?",
        options: {
          A: "Friction during motion",
          B: "Maximum static friction",
          C: "Rolling friction",
          D: "Friction at constant speed",
        },
        answer: "B",
      },
      {
        id: 18,
        question:
          "Friction between surfaces of different roughness depends on?",
        options: {
          A: "Area of contact",
          B: "Normal force",
          C: "Speed",
          D: "Temperature",
        },
        answer: "B",
      },
      {
        id: 19,
        question:
          "An elevator going down with acceleration a. Apparent weight = ?",
        options: { A: "m(g+a)", B: "m(g-a)", C: "mg", D: "Zero" },
        answer: "B",
      },
      {
        id: 20,
        question: "A rocket expels gas to generate thrust. This is based on?",
        options: {
          A: "Newton's 1st law",
          B: "Newton's 2nd law",
          C: "Newton's 3rd law",
          D: "Law of gravitation",
        },
        answer: "C",
      },
      {
        id: 21,
        question: "The angle of friction λ is related to μ by?",
        options: { A: "tanλ = μ", B: "sinλ = μ", C: "cosλ = μ", D: "λ = μ" },
        answer: "A",
      },
      {
        id: 22,
        question:
          "Restitution coefficient e for perfectly elastic collision is?",
        options: { A: "0", B: "0.5", C: "1", D: "-1" },
        answer: "C",
      },
      {
        id: 23,
        question: "A ball rolls without slipping. Contact point has velocity?",
        options: { A: "2v", B: "v", C: "0", D: "v/2" },
        answer: "C",
      },
      {
        id: 24,
        question:
          "Maximum range on an inclined plane is at angle of projection?",
        options: { A: "θ=45°", B: "θ=45°+α/2", C: "θ=α/2", D: "θ=90°-α" },
        answer: "B",
      },
      {
        id: 25,
        question: "A body slides freely on a surface of μ=0. What is friction?",
        options: { A: "mg", B: "Normal force", C: "Zero", D: "mgμ" },
        answer: "C",
      },
      {
        id: 26,
        question: "The momentum of a 10 kg body moving at 5 m/s is?",
        options: {
          A: "2 kg·m/s",
          B: "50 kg·m/s",
          C: "15 kg·m/s",
          D: "0.5 kg·m/s",
        },
        answer: "B",
      },
      {
        id: 27,
        question:
          "A 2 kg ball moving at 3 m/s hits a wall and rebounds at 3 m/s. Impulse = ?",
        options: { A: "0", B: "6 N·s", C: "12 N·s", D: "3 N·s" },
        answer: "C",
      },
      {
        id: 28,
        question: "The direction of friction on a sliding body is?",
        options: {
          A: "Same as motion",
          B: "Perpendicular to motion",
          C: "Opposite to motion",
          D: "Along normal",
        },
        answer: "C",
      },
      {
        id: 29,
        question: "If F=0, then a=?",
        options: { A: "Constant", B: "Increasing", C: "Zero", D: "g" },
        answer: "C",
      },
      {
        id: 30,
        question: "Law of conservation of linear momentum is a consequence of?",
        options: {
          A: "Newton's 1st law",
          B: "Newton's 2nd law",
          C: "Newton's 3rd law",
          D: "Law of gravitation",
        },
        answer: "C",
      },
      {
        id: 31,
        question: "A car brakes suddenly. Passengers lurch forward due to?",
        options: {
          A: "Centripetal force",
          B: "Gravity",
          C: "Inertia of motion",
          D: "Friction",
        },
        answer: "C",
      },
      {
        id: 32,
        question: "For circular motion, centripetal acceleration = ?",
        options: { A: "v/r", B: "v²/r", C: "vr", D: "r/v²" },
        answer: "B",
      },
      {
        id: 33,
        question: "Centripetal force for circular motion is?",
        options: { A: "mv²r", B: "mv/r", C: "mv²/r", D: "mr/v" },
        answer: "C",
      },
      {
        id: 34,
        question: "When two equal and opposite forces act on a body, the body?",
        options: {
          A: "Accelerates",
          B: "Is in equilibrium",
          C: "Rotates",
          D: "None",
        },
        answer: "B",
      },
      {
        id: 35,
        question:
          "On an inclined plane, component of gravity along the plane is?",
        options: { A: "mg cosθ", B: "mg sinθ", C: "mg tanθ", D: "mg" },
        answer: "B",
      },
      {
        id: 36,
        question: "Which of the following is not a contact force?",
        options: {
          A: "Friction",
          B: "Normal force",
          C: "Tension",
          D: "Gravitational force",
        },
        answer: "D",
      },
      {
        id: 37,
        question: "The CGS unit of force is?",
        options: { A: "Newton", B: "Dyne", C: "Poundal", D: "Pascal" },
        answer: "B",
      },
      {
        id: 38,
        question:
          "A 60 kg person stands on a scale in a lift accelerating upward at 2 m/s². Scale reads (g=10)?",
        options: { A: "600 N", B: "480 N", C: "720 N", D: "60 N" },
        answer: "C",
      },
      {
        id: 39,
        question:
          "Two blocks A(2 kg) and B(3 kg) are connected by string. A 10 N force pulls B. Acceleration of system?",
        options: { A: "2 m/s²", B: "5 m/s²", C: "3.33 m/s²", D: "10 m/s²" },
        answer: "A",
      },
      {
        id: 40,
        question: "Kinetic friction force = ?",
        options: { A: "μN (N = normal force)", B: "μmg²", C: "μ/N", D: "μ+N" },
        answer: "A",
      },
      {
        id: 41,
        question: "In free fall, the apparent weight of a person is?",
        options: { A: "mg", B: "2mg", C: "mg/2", D: "Zero" },
        answer: "D",
      },
      {
        id: 42,
        question: "The resultant of two forces 3N and 4N at right angles is?",
        options: { A: "7 N", B: "1 N", C: "5 N", D: "12 N" },
        answer: "C",
      },
      {
        id: 43,
        question: "The unit of impulse is?",
        options: { A: "N·m", B: "N·s", C: "kg·m/s²", D: "J/s" },
        answer: "B",
      },
      {
        id: 44,
        question: "When a horse pulls a cart, the net motion results from?",
        options: {
          A: "Force of horse on cart",
          B: "Force of cart on horse",
          C: "Force of horse on ground",
          D: "Reaction from ground",
        },
        answer: "D",
      },
      {
        id: 45,
        question: "Tension in a string supporting mass m at rest is?",
        options: { A: "mg/2", B: "mg", C: "2mg", D: "0" },
        answer: "B",
      },
      {
        id: 46,
        question: "The coefficient of static friction is?",
        options: {
          A: "tan(angle of repose)",
          B: "sin(angle of repose)",
          C: "cos(angle of repose)",
          D: "Independent of angle",
        },
        answer: "A",
      },
      {
        id: 47,
        question: "A bullet fires from a gun. The gun recoils because of?",
        options: {
          A: "Newton's 1st law",
          B: "Newton's 2nd law",
          C: "Newton's 3rd law",
          D: "Conservation of energy",
        },
        answer: "C",
      },
      {
        id: 48,
        question: "If a body moves with constant velocity, net force on it is?",
        options: { A: "Maximum", B: "Zero", C: "mg", D: "mv" },
        answer: "B",
      },
      {
        id: 49,
        question: "Lami's theorem applies to?",
        options: {
          A: "Two concurrent forces",
          B: "Three concurrent coplanar forces in equilibrium",
          C: "Parallel forces",
          D: "Non-coplanar forces",
        },
        answer: "B",
      },
      {
        id: 50,
        question: "Which pair represents action-reaction pair?",
        options: {
          A: "Weight and Normal",
          B: "Gravity on Earth by ball and Gravity on ball by Earth",
          C: "Tension and Weight",
          D: "Friction and Normal",
        },
        answer: "B",
      },
      {
        id: 51,
        question: "Mass of an object is 10 kg. Its weight on Earth (g=9.8) is?",
        options: { A: "10 N", B: "98 N", C: "9.8 N", D: "1 N" },
        answer: "B",
      },
      {
        id: 52,
        question:
          "An object moving in a circle has constant speed but changing?",
        options: {
          A: "Mass",
          B: "Kinetic energy",
          C: "Velocity (direction)",
          D: "Angular speed",
        },
        answer: "C",
      },
      {
        id: 53,
        question: "For a body in equilibrium, ΣF = ?",
        options: { A: "ma", B: "0", C: "mg", D: "Constant" },
        answer: "B",
      },
      {
        id: 54,
        question: "Normal force is always __ to the surface?",
        options: {
          A: "Parallel",
          B: "Perpendicular",
          C: "At 45°",
          D: "Along gravity",
        },
        answer: "B",
      },
      {
        id: 55,
        question: "Elastic collision conserves?",
        options: {
          A: "Momentum only",
          B: "Kinetic energy only",
          C: "Both momentum and kinetic energy",
          D: "Neither",
        },
        answer: "C",
      },
      {
        id: 56,
        question:
          "A truck moving at 20 m/s collides with a car at rest. After collision they move together. This is?",
        options: {
          A: "Elastic",
          B: "Super elastic",
          C: "Perfectly inelastic",
          D: "Explosive",
        },
        answer: "C",
      },
      {
        id: 57,
        question: "Rolling friction is caused by?",
        options: {
          A: "Deformation of surfaces in contact",
          B: "Air resistance",
          C: "Normal force only",
          D: "Kinetic energy",
        },
        answer: "A",
      },
      {
        id: 58,
        question:
          "A 2 kg box on 5 kg cart. No friction between cart and ground. Cart accelerates, box stays still. Force on box by cart is?",
        options: {
          A: "10 N",
          B: "0",
          C: "The static friction",
          D: "Normal force only",
        },
        answer: "C",
      },
      {
        id: 59,
        question: "The angle of a banked road for safe speed v, radius r is?",
        options: {
          A: "tanθ = v²/rg",
          B: "sinθ = v²/rg",
          C: "cosθ = v²/rg",
          D: "tanθ = rg/v²",
        },
        answer: "A",
      },
      {
        id: 60,
        question: "Which of the following is a scalar?",
        options: { A: "Force", B: "Mass", C: "Velocity", D: "Acceleration" },
        answer: "B",
      },
      {
        id: 61,
        question:
          "If two objects of equal mass collide elastically, what happens?",
        options: {
          A: "Both stop",
          B: "Velocities are exchanged",
          C: "Both continue",
          D: "Combined",
        },
        answer: "B",
      },
      {
        id: 62,
        question: "A spring balance reads 50 N in free fall. Actual weight is?",
        options: { A: "50 N", B: "100 N", C: "0 N", D: "Cannot determine" },
        answer: "C",
      },
      {
        id: 63,
        question: "Friction depends on?",
        options: {
          A: "Speed of object",
          B: "Nature of surfaces and normal force",
          C: "Area of contact",
          D: "Color of surface",
        },
        answer: "B",
      },
      {
        id: 64,
        question:
          "A 5 kg mass hangs from 2 strings at 60° each from vertical. Tension in each string is?",
        options: { A: "25 N", B: "28.9 N", C: "50 N", D: "24.5 N" },
        answer: "B",
      },
      {
        id: 65,
        question: "Newton's laws are valid in?",
        options: {
          A: "Non-inertial frames only",
          B: "Inertial frames only",
          C: "All frames",
          D: "Only vacuum",
        },
        answer: "B",
      },
      {
        id: 66,
        question:
          "A person pushes a wall. The wall does not move. Work done on wall is?",
        options: { A: "Positive", B: "Negative", C: "Zero", D: "Infinite" },
        answer: "C",
      },
      {
        id: 67,
        question: "The velocity of a body after free fall from height h is?",
        options: { A: "√(gh)", B: "√(2gh)", C: "2gh", D: "gh" },
        answer: "B",
      },
      {
        id: 68,
        question:
          "A block slides down a frictionless incline of angle θ. Acceleration = ?",
        options: { A: "g sinθ", B: "g cosθ", C: "g", D: "g tanθ" },
        answer: "A",
      },
      {
        id: 69,
        question: "Static friction is a __ force?",
        options: { A: "Fixed", B: "Self-adjusting", C: "Constant", D: "Zero" },
        answer: "B",
      },
      {
        id: 70,
        question:
          "A ball is thrown up. At the highest point, its acceleration is?",
        options: { A: "Zero", B: "g upward", C: "g downward", D: "Infinite" },
        answer: "C",
      },
      {
        id: 71,
        question: "Centrifugal force is a?",
        options: {
          A: "Real force",
          B: "Pseudo force",
          C: "Contact force",
          D: "Nuclear force",
        },
        answer: "B",
      },
      {
        id: 72,
        question: "Passengers are thrown outward on a curved road due to?",
        options: {
          A: "Centripetal force",
          B: "Gravity",
          C: "Inertia",
          D: "Friction",
        },
        answer: "C",
      },
      {
        id: 73,
        question: "The coefficient of friction has units of?",
        options: { A: "N", B: "kg", C: "m/s", D: "It is dimensionless" },
        answer: "D",
      },
      {
        id: 74,
        question:
          "A 20 kg box is pushed across a floor with μ=0.4. Friction force (g=10) is?",
        options: { A: "80 N", B: "200 N", C: "8 N", D: "40 N" },
        answer: "A",
      },
      {
        id: 75,
        question:
          "A body moving with uniform velocity on a rough surface means?",
        options: {
          A: "No friction",
          B: "Net force = 0",
          C: "Large normal force",
          D: "Friction does negative work",
        },
        answer: "B",
      },
      {
        id: 76,
        question:
          "If action and reaction are equal and opposite, why does the system accelerate?",
        options: {
          A: "They don't cancel because they act on different bodies",
          B: "Reaction is smaller",
          C: "Action is larger",
          D: "They are not equal",
        },
        answer: "A",
      },
      {
        id: 77,
        question:
          "Tension in an accelerating string (mass m, acceleration a) is?",
        options: { A: "T = ma", B: "T = mg", C: "T = m(g+a)", D: "T = m(g-a)" },
        answer: "C",
      },
      {
        id: 78,
        question: "1 Newton = ?",
        options: {
          A: "1 kg·m/s",
          B: "1 kg·m/s²",
          C: "1 kg·m²/s",
          D: "1 kg/m·s²",
        },
        answer: "B",
      },
      {
        id: 79,
        question:
          "A body of mass m is placed on a rough incline of angle θ. It just begins to slide when?",
        options: {
          A: "mg sinθ = μmg cosθ",
          B: "mg cosθ = μmg sinθ",
          C: "mg = μ",
          D: "sinθ = cosθ",
        },
        answer: "A",
      },
      {
        id: 80,
        question: "Two forces of 6N and 8N act at right angles. Resultant is?",
        options: { A: "10 N", B: "14 N", C: "2 N", D: "48 N" },
        answer: "A",
      },
      {
        id: 81,
        question:
          "A marble rolls on a frictionless surface at 5 m/s. After 10 s, its speed is?",
        options: { A: "0", B: "5 m/s", C: "50 m/s", D: "0.5 m/s" },
        answer: "B",
      },
      {
        id: 82,
        question:
          "The direction of static friction on a block tending to slide right is?",
        options: { A: "Right", B: "Left", C: "Down", D: "Up" },
        answer: "B",
      },
      {
        id: 83,
        question:
          "A 4 kg and 6 kg blocks on a frictionless surface connected by string. A 20 N force applied to 6 kg block. Acceleration?",
        options: { A: "2 m/s²", B: "5 m/s²", C: "3.33 m/s²", D: "10 m/s²" },
        answer: "A",
      },
      {
        id: 84,
        question: "An object at rest will remain at rest unless acted upon by?",
        options: {
          A: "Gravity",
          B: "Balanced force",
          C: "External unbalanced force",
          D: "Internal force",
        },
        answer: "C",
      },
      {
        id: 85,
        question:
          "Vehicle turns on a circular road. Centripetal force is provided by?",
        options: {
          A: "Engine",
          B: "Friction between tyres and road",
          C: "Gravity",
          D: "Normal force",
        },
        answer: "B",
      },
      {
        id: 86,
        question:
          "Apparent weight of a person in a lift moving downward with deceleration a is?",
        options: { A: "m(g-a)", B: "m(g+a)", C: "mg", D: "0" },
        answer: "B",
      },
      {
        id: 87,
        question: "Which force is responsible for walking?",
        options: {
          A: "Weight",
          B: "Normal force",
          C: "Friction from ground",
          D: "Tension",
        },
        answer: "C",
      },
      {
        id: 88,
        question:
          "A block hangs from two ropes, each making 30° with vertical. Tension in each rope?",
        options: {
          A: "mg/2",
          B: "mg/√3",
          C: "mg/cos30° / 2 = mg/√3",
          D: "mg√3",
        },
        answer: "C",
      },
      {
        id: 89,
        question: "Work done by friction is always?",
        options: {
          A: "Positive",
          B: "Zero",
          C: "Negative (for kinetic friction)",
          D: "Variable",
        },
        answer: "C",
      },
      {
        id: 90,
        question:
          "A ball hits a wall at 10 m/s and bounces back at 10 m/s. Change in momentum if mass=0.5 kg?",
        options: { A: "0", B: "5 kg·m/s", C: "10 kg·m/s", D: "20 kg·m/s" },
        answer: "C",
      },
      {
        id: 91,
        question: "The weight of a body is equal to?",
        options: { A: "mg", B: "m/g", C: "m+g", D: "m-g" },
        answer: "A",
      },
      {
        id: 92,
        question: "Atwood machine has 2 masses m1 and m2. Acceleration = ?",
        options: {
          A: "(m1+m2)g/(m1-m2)",
          B: "(m1-m2)g/(m1+m2)",
          C: "g",
          D: "(m1·m2)g",
        },
        answer: "B",
      },
      {
        id: 93,
        question: "One Dyne = ?",
        options: { A: "10−5 N", B: "10³ N", C: "10−3 N", D: "10² N" },
        answer: "A",
      },
      {
        id: 94,
        question:
          "Net force on a body of mass 5 kg moving with constant velocity 10 m/s is?",
        options: { A: "50 N", B: "0 N", C: "5 N", D: "10 N" },
        answer: "B",
      },
      {
        id: 95,
        question: "Momentum is conserved during?",
        options: {
          A: "Elastic collision only",
          B: "Inelastic collision only",
          C: "All collisions",
          D: "Explosions only",
        },
        answer: "C",
      },
      {
        id: 96,
        question: "A hockey stick exerts a force on the ball. The ball exerts?",
        options: {
          A: "Smaller force on stick",
          B: "No force on stick",
          C: "Equal and opposite force on stick",
          D: "Larger force on stick",
        },
        answer: "C",
      },
      {
        id: 97,
        question: "The angle of repose equals?",
        options: { A: "sin⁻¹(μ)", B: "tan⁻¹(μ)", C: "cos⁻¹(μ)", D: "cot⁻¹(μ)" },
        answer: "B",
      },
      {
        id: 98,
        question:
          "A bullet of mass 0.01 kg leaves gun at 500 m/s. Gun recoil speed if gun mass = 5 kg?",
        options: { A: "5 m/s", B: "1 m/s", C: "0.5 m/s", D: "10 m/s" },
        answer: "B",
      },
      {
        id: 99,
        question:
          "The tendency of a body to resist change in its state is called?",
        options: { A: "Momentum", B: "Inertia", C: "Friction", D: "Velocity" },
        answer: "B",
      },
      {
        id: 100,
        question: "Constraint equation for Atwood machine with pulley relates?",
        options: {
          A: "Velocities of masses",
          B: "Accelerations of masses (equal and opposite)",
          C: "Forces on masses",
          D: "Tensions in string",
        },
        answer: "B",
      },
    ],
  },
  {
    chapterName: "Electrostatics",
    questions: [
      {
        id: 1,
        question: "Coulomb's law: F = ?",
        options: { A: "kq₁q₂/r", B: "kq₁q₂/r²", C: "kq₁q₂r²", D: "kq₁/q₂r²" },
        answer: "B",
      },
      {
        id: 2,
        question: "The SI unit of charge is?",
        options: { A: "Ampere", B: "Coulomb", C: "Farad", D: "Volt" },
        answer: "B",
      },
      {
        id: 3,
        question: "Electric field due to a point charge Q at distance r is?",
        options: { A: "kQ/r", B: "kQ/r²", C: "kQ²/r²", D: "kQ²/r" },
        answer: "B",
      },
      {
        id: 4,
        question: "Electric field lines around a positive charge are?",
        options: {
          A: "Radially inward",
          B: "Circular",
          C: "Radially outward",
          D: "Horizontal",
        },
        answer: "C",
      },
      {
        id: 5,
        question:
          "The work done in moving a charge in an equipotential surface is?",
        options: { A: "Maximum", B: "Minimum", C: "Zero", D: "Infinity" },
        answer: "C",
      },
      {
        id: 6,
        question: "Electric potential at distance r from charge Q is?",
        options: { A: "kQ/r²", B: "kQ/r", C: "kQr", D: "kQ²/r" },
        answer: "B",
      },
      {
        id: 7,
        question: "Gauss's law: ∮E·dA = ?",
        options: { A: "ε₀q", B: "q/ε₀", C: "qε₀", D: "q/4πε₀" },
        answer: "B",
      },
      {
        id: 8,
        question: "The capacitance of a parallel plate capacitor C = ?",
        options: { A: "ε₀A/d²", B: "ε₀A/d", C: "ε₀d/A", D: "ε₀Ad" },
        answer: "B",
      },
      {
        id: 9,
        question: "The unit of electric field is?",
        options: { A: "V/m", B: "J/C", C: "N/C", D: "Both A and C" },
        answer: "D",
      },
      {
        id: 10,
        question:
          "Two charges +3μC and -3μC form an electric dipole. The dipole moment p = ?",
        options: { A: "3μC·d", B: "6μC·d", C: "3μC/d", D: "0" },
        answer: "B",
      },
      {
        id: 11,
        question: "Energy stored in a capacitor = ?",
        options: { A: "CV²", B: "(1/2)CV²", C: "(1/2)CV", D: "Q²/C" },
        answer: "B",
      },
      {
        id: 12,
        question: "Capacitors in series: 1/C = ?",
        options: {
          A: "C₁+C₂",
          B: "1/C₁+1/C₂",
          C: "C₁·C₂/(C₁+C₂)",
          D: "(C₁+C₂)/C₁·C₂",
        },
        answer: "B",
      },
      {
        id: 13,
        question: "Capacitors in parallel: C = ?",
        options: { A: "C₁·C₂/(C₁+C₂)", B: "1/C₁+1/C₂", C: "C₁+C₂", D: "C₁-C₂" },
        answer: "C",
      },
      {
        id: 14,
        question: "The value of ε₀ (permittivity of free space) is?",
        options: {
          A: "8.85×10⁻¹² C²/N·m²",
          B: "9×10⁹ N·m²/C²",
          C: "6.67×10⁻¹¹",
          D: "1.6×10⁻¹⁹ C",
        },
        answer: "A",
      },
      {
        id: 15,
        question: "An electric dipole in uniform field experiences?",
        options: {
          A: "Net force only",
          B: "Torque only",
          C: "Both force and torque",
          D: "Neither",
        },
        answer: "B",
      },
      {
        id: 16,
        question:
          "Electric flux through a closed surface with no charge inside is?",
        options: {
          A: "Maximum",
          B: "Zero",
          C: "Depends on surface",
          D: "Negative",
        },
        answer: "B",
      },
      {
        id: 17,
        question: "The electric potential inside a conductor is?",
        options: {
          A: "Zero",
          B: "Equal to surface potential",
          C: "Maximum at center",
          D: "Minimum at center",
        },
        answer: "B",
      },
      {
        id: 18,
        question:
          "A conductor in electrostatic equilibrium has E field inside = ?",
        options: { A: "Maximum", B: "Zero", C: "σ/ε₀", D: "Infinite" },
        answer: "B",
      },
      {
        id: 19,
        question: "The dielectric constant of vacuum is?",
        options: { A: "0", B: "1", C: "∞", D: "8.85×10⁻¹²" },
        answer: "B",
      },
      {
        id: 20,
        question:
          "When a dielectric is inserted in a capacitor (isolated), charge Q:",
        options: {
          A: "Increases",
          B: "Decreases",
          C: "Remains same",
          D: "Becomes zero",
        },
        answer: "C",
      },
      {
        id: 21,
        question:
          "Potential difference between two points in a uniform E field E over distance d is?",
        options: { A: "E·d²", B: "E+d", C: "E·d", D: "E/d" },
        answer: "C",
      },
      {
        id: 22,
        question:
          "The work done by electric force on a charge q moved through V is?",
        options: { A: "qV²", B: "q/V", C: "qV", D: "q+V" },
        answer: "C",
      },
      {
        id: 23,
        question: "Electric field is zero inside a?",
        options: {
          A: "Dielectric",
          B: "Conductor",
          C: "Semiconductor",
          D: "Insulator",
        },
        answer: "B",
      },
      {
        id: 24,
        question: "The force between two charges is halved when distance is?",
        options: {
          A: "Doubled",
          B: "Halved",
          C: "Multiplied by √2",
          D: "Unchanged",
        },
        answer: "C",
      },
      {
        id: 25,
        question: "Charge of one electron = ?",
        options: {
          A: "-1.6×10⁻¹⁹ C",
          B: "1.6×10⁻¹⁹ C",
          C: "9.1×10⁻³¹ C",
          D: "-9.1×10⁻³¹ C",
        },
        answer: "A",
      },
      {
        id: 26,
        question: "Principle of superposition of electric forces states?",
        options: {
          A: "Force depends on medium",
          B: "Force is proportional to product of charges",
          C: "Total force is vector sum of individual forces",
          D: "Force is inversely proportional to distance",
        },
        answer: "C",
      },
      {
        id: 27,
        question: "The unit of capacitance is?",
        options: { A: "Ohm", B: "Henry", C: "Farad", D: "Weber" },
        answer: "C",
      },
      {
        id: 28,
        question: "Electrostatic shielding means?",
        options: {
          A: "Insulating a conductor",
          B: "Interior of conductor is shielded from external E field",
          C: "Grounding a conductor",
          D: "Charging a conductor",
        },
        answer: "B",
      },
      {
        id: 29,
        question: "Polar molecules have?",
        options: {
          A: "Zero dipole moment",
          B: "Non-zero dipole moment",
          C: "Positive charge only",
          D: "Negative charge only",
        },
        answer: "B",
      },
      {
        id: 30,
        question: "The electric field due to an infinite sheet of charge σ is?",
        options: { A: "σ/ε₀", B: "σ/2ε₀", C: "2σ/ε₀", D: "σε₀" },
        answer: "B",
      },
      {
        id: 31,
        question: "If a conductor is charged, charge resides on?",
        options: {
          A: "Interior",
          B: "Exterior/surface",
          C: "Center",
          D: "Uniformly distributed",
        },
        answer: "B",
      },
      {
        id: 32,
        question: "Potential energy of two charges q₁ and q₂ at distance r is?",
        options: { A: "kq₁q₂/r²", B: "kq₁q₂r", C: "kq₁q₂/r", D: "k(q₁+q₂)/r" },
        answer: "C",
      },
      {
        id: 33,
        question: "Van de Graaff generator is used to?",
        options: {
          A: "Store charge",
          B: "Generate high voltage",
          C: "Measure electric field",
          D: "Amplify charge",
        },
        answer: "B",
      },
      {
        id: 34,
        question:
          "The electric field on the axis of a dipole at distance r is proportional to?",
        options: { A: "1/r", B: "1/r²", C: "1/r³", D: "r²" },
        answer: "C",
      },
      {
        id: 35,
        question:
          "When battery connected capacitor has dielectric inserted, charge Q?",
        options: {
          A: "Decreases",
          B: "Increases by factor K",
          C: "Remains same",
          D: "Becomes zero",
        },
        answer: "B",
      },
      {
        id: 36,
        question: "Electric lines of force never?",
        options: {
          A: "Start from positive charges",
          B: "End on negative charges",
          C: "Intersect each other",
          D: "Exist in vacuum",
        },
        answer: "C",
      },
      {
        id: 37,
        question:
          "Two capacitors 2μF and 3μF in series. Equivalent capacitance?",
        options: { A: "5 μF", B: "1.2 μF", C: "6 μF", D: "0.83 μF" },
        answer: "B",
      },
      {
        id: 38,
        question: "The torque on a dipole in uniform field E is?",
        options: { A: "τ=pE", B: "τ=pE sinθ", C: "τ=pE cosθ", D: "τ=p/E" },
        answer: "B",
      },
      {
        id: 39,
        question: "Potential at infinity is taken as?",
        options: { A: "Maximum", B: "Minimum", C: "Zero", D: "Infinity" },
        answer: "C",
      },
      {
        id: 40,
        question:
          "If charge Q is distributed over area A, surface charge density σ = ?",
        options: { A: "Q·A", B: "Q/A", C: "A/Q", D: "Q/A²" },
        answer: "B",
      },
      {
        id: 41,
        question: "Quantization of charge means?",
        options: {
          A: "Charge is continuous",
          B: "Charge comes in multiples of electron charge",
          C: "Charge can be fractional",
          D: "Charge is always positive",
        },
        answer: "B",
      },
      {
        id: 42,
        question: "Dielectric strength is?",
        options: {
          A: "Maximum E field a dielectric can withstand",
          B: "Capacitance of dielectric",
          C: "Charge stored in dielectric",
          D: "Resistivity of dielectric",
        },
        answer: "A",
      },
      {
        id: 43,
        question: "The unit of electric potential is?",
        options: { A: "Ampere", B: "Coulomb", C: "Volt", D: "Farad" },
        answer: "C",
      },
      {
        id: 44,
        question: "Equipotential surfaces are?",
        options: {
          A: "Perpendicular to field lines",
          B: "Parallel to field lines",
          C: "At 45° to field lines",
          D: "Identical to field lines",
        },
        answer: "A",
      },
      {
        id: 45,
        question: "The potential due to a group of charges is?",
        options: {
          A: "Vector sum of individual potentials",
          B: "Algebraic sum of individual potentials",
          C: "Product of individual potentials",
          D: "Maximum of individual potentials",
        },
        answer: "B",
      },
      {
        id: 46,
        question:
          "A charge Q creates potential V at distance r. If r is doubled, V becomes?",
        options: { A: "2V", B: "V/2", C: "4V", D: "V/4" },
        answer: "B",
      },
      {
        id: 47,
        question: "Energy density of electric field is?",
        options: { A: "ε₀E²/2", B: "ε₀E²", C: "ε₀E/2", D: "2ε₀E²" },
        answer: "A",
      },
      {
        id: 48,
        question:
          "Charge on the inner surface of a spherical shell with charge Q is?",
        options: { A: "Q", B: "-Q", C: "0", D: "Q/2" },
        answer: "C",
      },
      {
        id: 49,
        question: "Ohm's law: V = ?",
        options: { A: "IR²", B: "I/R", C: "IR", D: "I²R" },
        answer: "C",
      },
      {
        id: 50,
        question: "Coulomb's constant k = ?",
        options: {
          A: "9×10⁹ N·m²/C²",
          B: "9×10¹² N·m²/C²",
          C: "8.85×10⁻¹² N·m²/C²",
          D: "6.67×10⁻¹¹ N·m²/kg²",
        },
        answer: "A",
      },
      {
        id: 51,
        question: "Induced EMF in a coil is due to?",
        options: {
          A: "Changing current",
          B: "Changing flux",
          C: "Constant flux",
          D: "Resistance",
        },
        answer: "B",
      },
      {
        id: 52,
        question: "Gauss's law relates E field to?",
        options: {
          A: "Enclosed charge",
          B: "Surface area",
          C: "Potential",
          D: "Distance",
        },
        answer: "A",
      },
      {
        id: 53,
        question: "Lines of E field are denser where field is?",
        options: { A: "Weaker", B: "Stronger", C: "Zero", D: "Undefined" },
        answer: "B",
      },
      {
        id: 54,
        question: "Charge is conserved in?",
        options: {
          A: "Nuclear reactions only",
          B: "Chemical reactions only",
          C: "All processes",
          D: "Electromagnetic processes only",
        },
        answer: "C",
      },
      {
        id: 55,
        question: "The unit of electric flux is?",
        options: { A: "N/C", B: "N·m²/C", C: "V·m", D: "Both B and C" },
        answer: "D",
      },
      {
        id: 56,
        question:
          "A metallic sphere of radius R has charge Q. Potential at surface is?",
        options: { A: "kQ/R²", B: "kQ/R", C: "kQR", D: "Zero" },
        answer: "B",
      },
      {
        id: 57,
        question:
          "Charge is uniformly distributed on a sphere. E field at center is?",
        options: { A: "kQ/R²", B: "kQ/R", C: "Zero", D: "Infinite" },
        answer: "C",
      },
      {
        id: 58,
        question:
          "For a parallel plate capacitor with plate area A and separation d, C is proportional to?",
        options: { A: "d/A", B: "A/d", C: "A·d", D: "1/A·d" },
        answer: "B",
      },
      {
        id: 59,
        question: "Faraday's cage works because?",
        options: {
          A: "Metal absorbs E field",
          B: "Induced charges cancel external E",
          C: "Insulation blocks E",
          D: "Air gap blocks E",
        },
        answer: "B",
      },
      {
        id: 60,
        question: "The dimension of capacitance is?",
        options: {
          A: "[M⁻¹L⁻²T⁴A²]",
          B: "[M L²T⁻²A⁻²]",
          C: "[M L T⁻²]",
          D: "[T⁴A²M⁻¹L⁻²]",
        },
        answer: "D",
      },
      {
        id: 61,
        question: "Electric potential is a?",
        options: {
          A: "Vector quantity",
          B: "Scalar quantity",
          C: "Tensor quantity",
          D: "None of these",
        },
        answer: "B",
      },
      {
        id: 62,
        question: "Electric field E = -dV/dr. Negative sign means?",
        options: {
          A: "E is always negative",
          B: "E points from high to low potential",
          C: "V is negative",
          D: "E and V have same sign",
        },
        answer: "B",
      },
      {
        id: 63,
        question:
          "Two charges +2μC and -2μC are 0.1 m apart. Force between them (k=9×10⁹)?",
        options: { A: "3.6 N", B: "0.36 N", C: "36 N", D: "3.6×10⁻³ N" },
        answer: "A",
      },
      {
        id: 64,
        question:
          "The number of electric field lines entering an area A is the electric __ through A?",
        options: { A: "Potential", B: "Flux", C: "Intensity", D: "Force" },
        answer: "B",
      },
      {
        id: 65,
        question: "1 Farad = ?",
        options: { A: "1 C/V", B: "1 V/C", C: "1 C·V", D: "1 J/C" },
        answer: "A",
      },
      {
        id: 66,
        question:
          "The electric field at the midpoint between two equal and opposite charges is?",
        options: {
          A: "Zero",
          B: "Double that of single charge",
          C: "Equal to single charge",
          D: "Pointing from positive to negative",
        },
        answer: "B",
      },
      {
        id: 67,
        question:
          "An electron moves from A to B in E field. Work done by field = q(VA-VB). If VA<VB, work done is?",
        options: { A: "Positive", B: "Negative", C: "Zero", D: "Infinite" },
        answer: "A",
      },
      {
        id: 68,
        question: "Relative permittivity (dielectric constant) K of vacuum is?",
        options: { A: "0", B: "∞", C: "1", D: "-1" },
        answer: "C",
      },
      {
        id: 69,
        question:
          "A conductor brought near a charged object gets induced charges. This is?",
        options: {
          A: "Friction charging",
          B: "Conduction charging",
          C: "Induction charging",
          D: "Radiation charging",
        },
        answer: "C",
      },
      {
        id: 70,
        question: "Three capacitors 1F, 2F, 3F in parallel. Equivalent C = ?",
        options: { A: "6/11 F", B: "0.55 F", C: "6 F", D: "1 F" },
        answer: "C",
      },
      {
        id: 71,
        question:
          "The electric field between the plates of a charged capacitor is uniform if?",
        options: {
          A: "Plates are circular",
          B: "Plate separation is very small compared to area",
          C: "Plate area is small",
          D: "Dielectric is present",
        },
        answer: "B",
      },
      {
        id: 72,
        question: "Charge conservation means?",
        options: {
          A: "Total charge in universe is constant",
          B: "Charges cannot move",
          C: "Equal positive and negative charges exist",
          D: "Charge cannot be created",
        },
        answer: "A",
      },
      {
        id: 73,
        question: "Coulomb's law is valid for?",
        options: {
          A: "Point charges only",
          B: "Any charge distribution",
          C: "Point charges and charged spheres",
          D: "Moving charges only",
        },
        answer: "C",
      },
      {
        id: 74,
        question: "At the surface of a conductor, E is?",
        options: {
          A: "Parallel to surface",
          B: "Perpendicular to surface",
          C: "Zero",
          D: "At 45°",
        },
        answer: "B",
      },
      {
        id: 75,
        question: "Self-inductance of a coil depends on?",
        options: {
          A: "Current",
          B: "Geometry and number of turns",
          C: "Voltage",
          D: "Resistance",
        },
        answer: "B",
      },
      {
        id: 76,
        question:
          "Which of the following is analogous to capacitance in mechanics?",
        options: {
          A: "Mass",
          B: "Spring constant",
          C: "Compliance (1/k)",
          D: "Velocity",
        },
        answer: "C",
      },
      {
        id: 77,
        question: "The torque on dipole is zero when dipole is __ to field?",
        options: {
          A: "Perpendicular",
          B: "At 45°",
          C: "Parallel or antiparallel",
          D: "Random",
        },
        answer: "C",
      },
      {
        id: 78,
        question:
          "A charge 5μC is moved through potential difference of 10 V. Work done = ?",
        options: { A: "50 μJ", B: "0.5 μJ", C: "500 μJ", D: "2 μJ" },
        answer: "A",
      },
      {
        id: 79,
        question: "The voltage across a 10μF capacitor storing 500μJ is?",
        options: { A: "10 V", B: "50 V", C: "100 V", D: "5 V" },
        answer: "A",
      },
      {
        id: 80,
        question: "Lightning rod works on principle of?",
        options: {
          A: "Insulation",
          B: "Earthing sharp conductor to safely discharge",
          C: "Reflection of lightning",
          D: "Absorption",
        },
        answer: "B",
      },
      {
        id: 81,
        question:
          "The drift velocity of electrons in a conductor is of the order of?",
        options: { A: "10³ m/s", B: "10⁻³ m/s", C: "3×10⁸ m/s", D: "10⁻¹ m/s" },
        answer: "B",
      },
      {
        id: 82,
        question: "Two capacitors 4μF each in series. Equivalent = ?",
        options: { A: "8μF", B: "2μF", C: "16μF", D: "1μF" },
        answer: "B",
      },
      {
        id: 83,
        question: "Potential due to a uniformly charged ring at center is?",
        options: { A: "kQ/R", B: "kQ/R²", C: "Zero", D: "kQ/2R" },
        answer: "A",
      },
      {
        id: 84,
        question: "The relation between E and V is?",
        options: { A: "E = -∇V", B: "E = ∇V", C: "V = -∇E", D: "E = V²" },
        answer: "A",
      },
      {
        id: 85,
        question:
          "The electric field due to infinite line charge λ at distance r is?",
        options: { A: "λ/2πε₀r²", B: "λ/2πε₀r", C: "2λ/ε₀r", D: "λ/4πε₀r" },
        answer: "B",
      },
      {
        id: 86,
        question:
          "A capacitor is charged and disconnected from battery. Plate separation doubled. Energy stored?",
        options: { A: "Doubles", B: "Halves", C: "Unchanged", D: "Quadruples" },
        answer: "A",
      },
      {
        id: 87,
        question: "Ohm's law in vector form is?",
        options: { A: "J = ρE", B: "J = σE", C: "E = σJ", D: "J = E/ρ" },
        answer: "B",
      },
      {
        id: 88,
        question:
          "The electric field at a point is the force on unit __ charge?",
        options: { A: "Negative", B: "Positive", C: "Neutral", D: "Any" },
        answer: "B",
      },
      {
        id: 89,
        question: "Coulomb's law constant k = 1/4πε₀ equals?",
        options: { A: "9×10⁸", B: "9×10⁹", C: "9×10¹²", D: "9×10⁻¹²" },
        answer: "B",
      },
      {
        id: 90,
        question:
          "The work done in bringing charge q from infinity to distance r is?",
        options: { A: "kQq/r²", B: "kQq/r", C: "kQq·r", D: "Zero" },
        answer: "B",
      },
      {
        id: 91,
        question:
          "A parallel plate capacitor has plates of area 0.01 m² separated by 0.001 m. C = ? (ε₀=8.85×10⁻¹²)",
        options: { A: "88.5 pF", B: "8.85 nF", C: "88.5 nF", D: "0.885 nF" },
        answer: "A",
      },
      {
        id: 92,
        question:
          "Electric potential is zero at infinity. The potential at any point near positive charge is?",
        options: {
          A: "Negative",
          B: "Zero",
          C: "Positive",
          D: "Cannot be determined",
        },
        answer: "C",
      },
      {
        id: 93,
        question:
          "The electric potential due to a dipole at equatorial point is?",
        options: { A: "Maximum", B: "Minimum", C: "Zero", D: "p/r²" },
        answer: "C",
      },
      {
        id: 94,
        question: "Coulomb's law holds for?",
        options: {
          A: "Charges at rest only",
          B: "Moving charges only",
          C: "Stationary point charges in vacuum",
          D: "Any charges",
        },
        answer: "C",
      },
      {
        id: 95,
        question: "The direction of E inside a dipole is from?",
        options: {
          A: "+q to -q (opposite to dipole moment)",
          B: "-q to +q",
          C: "Perpendicular to dipole",
          D: "From center outward",
        },
        answer: "A",
      },
      {
        id: 96,
        question: "An oil drop experiment was performed by?",
        options: { A: "Faraday", B: "Thomson", C: "Millikan", D: "Rutherford" },
        answer: "C",
      },
      {
        id: 97,
        question: "The Coulomb force between two charges is independent of?",
        options: {
          A: "Magnitude of charges",
          B: "Distance between them",
          C: "Third charge present nearby",
          D: "None",
        },
        answer: "C",
      },
      {
        id: 98,
        question:
          "A charge of 2C moves through 5V potential difference. Energy gained is?",
        options: { A: "2.5 J", B: "10 J", C: "0.4 J", D: "7 J" },
        answer: "B",
      },
      {
        id: 99,
        question: "Inside a hollow conducting sphere, E = ?",
        options: {
          A: "kQ/R²",
          B: "kQ/r²",
          C: "Zero",
          D: "Varies with position",
        },
        answer: "C",
      },
      {
        id: 100,
        question: "The charge on a proton is?",
        options: {
          A: "-1.6×10⁻¹⁹ C",
          B: "+1.6×10⁻¹⁹ C",
          C: "9.1×10⁻³¹ C",
          D: "1.67×10⁻²⁷ C",
        },
        answer: "B",
      },
    ],
  },
  {
    chapterName: "Thermodynamics",
    questions: [
      {
        id: 1,
        question: "First law of thermodynamics states?",
        options: { A: "ΔU = Q - W", B: "ΔU = Q + W", C: "Q = W", D: "ΔU = 0" },
        answer: "A",
      },
      {
        id: 2,
        question: "In an isothermal process?",
        options: { A: "ΔT = 0", B: "ΔU = 0", C: "Both A and B", D: "Q = 0" },
        answer: "C",
      },
      {
        id: 3,
        question: "In adiabatic process?",
        options: { A: "Q = 0", B: "ΔT = 0", C: "ΔU = 0", D: "W = 0" },
        answer: "A",
      },
      {
        id: 4,
        question: "In isochoric (constant volume) process, W = ?",
        options: { A: "PΔV", B: "0", C: "nRΔT", D: "Q" },
        answer: "B",
      },
      {
        id: 5,
        question: "Entropy change for reversible process = ?",
        options: { A: "Q/T", B: "T/Q", C: "Q·T", D: "0" },
        answer: "A",
      },
      {
        id: 6,
        question: "Efficiency of Carnot engine = ?",
        options: { A: "1 - T₂/T₁", B: "T₁/T₂", C: "1 + T₂/T₁", D: "T₂/T₁" },
        answer: "A",
      },
      {
        id: 7,
        question: "For ideal gas, internal energy depends on?",
        options: {
          A: "Pressure only",
          B: "Volume only",
          C: "Temperature only",
          D: "All of above",
        },
        answer: "C",
      },
      {
        id: 8,
        question: "Second law: Heat cannot flow spontaneously from?",
        options: {
          A: "Hot to cold",
          B: "Cold to hot",
          C: "Any direction",
          D: "None of these",
        },
        answer: "B",
      },
      {
        id: 9,
        question: "Work done by ideal gas in isothermal expansion (V₁→V₂) = ?",
        options: {
          A: "nRT ln(V₁/V₂)",
          B: "nRT ln(V₂/V₁)",
          C: "P(V₂-V₁)",
          D: "0",
        },
        answer: "B",
      },
      {
        id: 10,
        question: "In isobaric process, W = ?",
        options: { A: "0", B: "Q", C: "P(V₂-V₁)", D: "nRΔT" },
        answer: "C",
      },
      {
        id: 11,
        question: "Cp - Cv = ? for ideal gas",
        options: { A: "R/2", B: "R", C: "2R", D: "0" },
        answer: "B",
      },
      {
        id: 12,
        question: "For monoatomic ideal gas, Cv = ?",
        options: { A: "R/2", B: "3R/2", C: "5R/2", D: "7R/2" },
        answer: "B",
      },
      {
        id: 13,
        question: "The ratio γ = Cp/Cv for diatomic gas is?",
        options: { A: "5/3", B: "7/5", C: "4/3", D: "3/2" },
        answer: "B",
      },
      {
        id: 14,
        question: "The zeroth law of thermodynamics defines?",
        options: {
          A: "Entropy",
          B: "Temperature",
          C: "Enthalpy",
          D: "Internal energy",
        },
        answer: "B",
      },
      {
        id: 15,
        question:
          "A Carnot engine works between 500 K and 300 K. Efficiency = ?",
        options: { A: "60%", B: "40%", C: "20%", D: "80%" },
        answer: "B",
      },
      {
        id: 16,
        question: "Entropy of universe in a natural process?",
        options: {
          A: "Decreases",
          B: "Stays constant",
          C: "Increases",
          D: "Fluctuates",
        },
        answer: "C",
      },
      {
        id: 17,
        question: "For isothermal process of ideal gas, ΔU = ?",
        options: { A: "Q", B: "W", C: "0", D: "nRT" },
        answer: "C",
      },
      {
        id: 18,
        question:
          "The molar heat capacity at constant pressure Cp for monoatomic gas = ?",
        options: { A: "3R/2", B: "5R/2", C: "7R/2", D: "R" },
        answer: "B",
      },
      {
        id: 19,
        question: "In adiabatic expansion, temperature of gas?",
        options: {
          A: "Increases",
          B: "Stays constant",
          C: "Decreases",
          D: "First increases then decreases",
        },
        answer: "C",
      },
      {
        id: 20,
        question: "The work done in a cyclic process is?",
        options: {
          A: "Always zero",
          B: "Area enclosed by cycle on P-V diagram",
          C: "PΔV",
          D: "Q/T",
        },
        answer: "B",
      },
      {
        id: 21,
        question: "Thermodynamic equilibrium requires?",
        options: {
          A: "Mechanical equilibrium only",
          B: "Thermal equilibrium only",
          C: "Chemical equilibrium only",
          D: "All three types",
        },
        answer: "D",
      },
      {
        id: 22,
        question:
          "An ideal gas undergoes adiabatic expansion: TV^γ-1 = const. This implies?",
        options: {
          A: "T increases with V",
          B: "T decreases with V",
          C: "T is constant",
          D: "T and V are unrelated",
        },
        answer: "B",
      },
      {
        id: 23,
        question: "A refrigerator is a __ operating in reverse?",
        options: {
          A: "Carnot engine",
          B: "Heat engine",
          C: "Steam engine",
          D: "Electric motor",
        },
        answer: "B",
      },
      {
        id: 24,
        question: "Heat pump COP = ?",
        options: {
          A: "Q_H / W",
          B: "Q_C / W",
          C: "W / Q_H",
          D: "T_H / (T_H - T_C)",
        },
        answer: "A",
      },
      {
        id: 25,
        question:
          "For a reversible engine, efficiency is __ that of an irreversible engine?",
        options: {
          A: "Less than",
          B: "Equal to",
          C: "Greater than or equal to",
          D: "Cannot compare",
        },
        answer: "C",
      },
      {
        id: 26,
        question: "The PdV term represents?",
        options: {
          A: "Internal energy change",
          B: "Work done by gas",
          C: "Heat supplied",
          D: "Entropy change",
        },
        answer: "B",
      },
      {
        id: 27,
        question: "For ideal gas PV = ?",
        options: { A: "nRT", B: "mRT", C: "RT", D: "nRΔT" },
        answer: "A",
      },
      {
        id: 28,
        question:
          "The work done by 1 mol of ideal gas at constant temperature T = 300K expanding from V to 2V is?",
        options: { A: "300R ln2", B: "600R", C: "300R", D: "ln2" },
        answer: "A",
      },
      {
        id: 29,
        question: "Enthalpy H = ?",
        options: { A: "U + PV", B: "U - PV", C: "U + TV", D: "U/PV" },
        answer: "A",
      },
      {
        id: 30,
        question: "At absolute zero, entropy is?",
        options: {
          A: "Maximum",
          B: "Negative",
          C: "Zero (third law)",
          D: "Indeterminate",
        },
        answer: "C",
      },
      {
        id: 31,
        question: "Which process is reversible?",
        options: {
          A: "Free expansion",
          B: "Joule-Thomson expansion",
          C: "Quasi-static isothermal expansion",
          D: "Irreversible mixing",
        },
        answer: "C",
      },
      {
        id: 32,
        question: "The Kelvin-Planck statement says?",
        options: {
          A: "No engine can be 100% efficient",
          B: "Heat flows from cold to hot",
          C: "Entropy is conserved",
          D: "Temperature cannot reach absolute zero",
        },
        answer: "A",
      },
      {
        id: 33,
        question:
          "Clausius statement: No process is possible where the sole result is transfer of heat from?",
        options: {
          A: "Hot to cold body",
          B: "Cold to hot body",
          C: "Any to any body",
          D: "Hot body to work",
        },
        answer: "B",
      },
      {
        id: 34,
        question:
          "In free expansion of ideal gas into vacuum, Q=0, W=0. So ΔU = ?",
        options: {
          A: "Positive",
          B: "Negative",
          C: "Zero",
          D: "Depends on gas",
        },
        answer: "C",
      },
      {
        id: 35,
        question: "Isothermal bulk modulus of ideal gas = ?",
        options: { A: "P", B: "γP", C: "P/γ", D: "RT" },
        answer: "A",
      },
      {
        id: 36,
        question: "Adiabatic bulk modulus of ideal gas = ?",
        options: { A: "P", B: "γP", C: "P/γ", D: "nRT" },
        answer: "B",
      },
      {
        id: 37,
        question: "For an adiabatic process, TV^(γ-1) = const implies PV^γ = ?",
        options: { A: "RT", B: "nR", C: "constant", D: "zero" },
        answer: "C",
      },
      {
        id: 38,
        question: "The efficiency of Carnot engine increases as T_C?",
        options: {
          A: "Increases",
          B: "Decreases",
          C: "Stays constant",
          D: "Doubles",
        },
        answer: "B",
      },
      {
        id: 39,
        question:
          "Total internal energy of n moles of monoatomic ideal gas = ?",
        options: { A: "nRT", B: "(3/2)nRT", C: "(5/2)nRT", D: "(7/2)nRT" },
        answer: "B",
      },
      {
        id: 40,
        question: "Specific heat capacity of water is approximately?",
        options: {
          A: "1 J/kg·K",
          B: "4200 J/kg·K",
          C: "1000 J/kg·K",
          D: "840 J/kg·K",
        },
        answer: "B",
      },
      {
        id: 41,
        question: "The heat exchanged in reversible adiabatic process is?",
        options: { A: "Q = ΔU", B: "Q = W", C: "Q = 0", D: "Q = nCvΔT" },
        answer: "C",
      },
      {
        id: 42,
        question:
          "Specific heat at constant pressure is always __ than at constant volume?",
        options: {
          A: "Less",
          B: "Equal",
          C: "Greater",
          D: "Sometimes greater, sometimes less",
        },
        answer: "C",
      },
      {
        id: 43,
        question: "A gas absorbs 200 J and does 80 J of work. ΔU = ?",
        options: { A: "280 J", B: "120 J", C: "-120 J", D: "16000 J" },
        answer: "B",
      },
      {
        id: 44,
        question: "For the same expansion, work done is maximum in __ process?",
        options: {
          A: "Isothermal",
          B: "Adiabatic",
          C: "Isobaric",
          D: "Isochoric",
        },
        answer: "C",
      },
      {
        id: 45,
        question: "Carnot cycle consists of?",
        options: {
          A: "Two isothermal and two adiabatic",
          B: "Two isobaric and two adiabatic",
          C: "Four adiabatic",
          D: "Two isothermal and two isochoric",
        },
        answer: "A",
      },
      {
        id: 46,
        question: "The P-V diagram of isothermal process is a?",
        options: {
          A: "Straight line",
          B: "Parabola",
          C: "Hyperbola",
          D: "Circle",
        },
        answer: "C",
      },
      {
        id: 47,
        question: "In isochoric process, all heat supplied goes into?",
        options: {
          A: "Work",
          B: "Internal energy",
          C: "Potential energy",
          D: "External work",
        },
        answer: "B",
      },
      {
        id: 48,
        question: "The thermal efficiency is defined as?",
        options: { A: "W/Q_H", B: "Q_H/W", C: "Q_C/Q_H", D: "Q_H/Q_C" },
        answer: "A",
      },
      {
        id: 49,
        question:
          "For reversible engine efficiency η = 1 - T_C/T_H. Maximum efficiency is 1 when?",
        options: {
          A: "T_C = T_H",
          B: "T_C = 0 K",
          C: "T_H = 0 K",
          D: "T_H = ∞",
        },
        answer: "B",
      },
      {
        id: 50,
        question: "Steam engine was invented by?",
        options: { A: "Carnot", B: "Kelvin", C: "Watt", D: "Joule" },
        answer: "C",
      },
      {
        id: 51,
        question: "Helmholtz free energy F = ?",
        options: { A: "U - TS", B: "H - TS", C: "U + TS", D: "H + TS" },
        answer: "A",
      },
      {
        id: 52,
        question: "Gibbs free energy G = ?",
        options: { A: "U - TS", B: "H - TS", C: "U + PV - TS", D: "H + TS" },
        answer: "B",
      },
      {
        id: 53,
        question:
          "A process occurs spontaneously if change in Gibbs energy ΔG is?",
        options: { A: "Positive", B: "Zero", C: "Negative", D: "Infinite" },
        answer: "C",
      },
      {
        id: 54,
        question: "The triple point of water is at?",
        options: {
          A: "0°C, 1 atm",
          B: "0.01°C, 611.73 Pa",
          C: "100°C, 1 atm",
          D: "4°C, 1 atm",
        },
        answer: "B",
      },
      {
        id: 55,
        question: "Joule-Thomson effect is the cooling of gas during?",
        options: {
          A: "Compression at constant T",
          B: "Free expansion",
          C: "Throttling (expansion through porous plug)",
          D: "Isothermal expansion",
        },
        answer: "C",
      },
      {
        id: 56,
        question: "The heat engine efficiency in terms of Carnot engine is?",
        options: {
          A: "η ≥ η_Carnot",
          B: "η ≤ η_Carnot",
          C: "η = η_Carnot",
          D: "η > η_Carnot",
        },
        answer: "B",
      },
      {
        id: 57,
        question: "In which process does temperature not change?",
        options: {
          A: "Adiabatic",
          B: "Isobaric",
          C: "Isothermal",
          D: "Isochoric",
        },
        answer: "C",
      },
      {
        id: 58,
        question: "P-V work in isobaric expansion from V₁ to V₂ = ?",
        options: { A: "P(V₁-V₂)", B: "P(V₂-V₁)", C: "nRT", D: "0" },
        answer: "B",
      },
      {
        id: 59,
        question: "Which has higher Cp: monoatomic or diatomic gas?",
        options: {
          A: "Monoatomic",
          B: "Diatomic",
          C: "Equal",
          D: "Depends on temperature",
        },
        answer: "B",
      },
      {
        id: 60,
        question: "The work done in adiabatic process W = ?",
        options: { A: "nCv(T₂-T₁)", B: "-nCv(T₂-T₁)", C: "nCp(T₂-T₁)", D: "0" },
        answer: "B",
      },
      {
        id: 61,
        question: "Joule's equivalent: 1 cal = ?",
        options: { A: "4.2 J", B: "42 J", C: "0.42 J", D: "420 J" },
        answer: "A",
      },
      {
        id: 62,
        question: "When gas is compressed adiabatically, temperature?",
        options: {
          A: "Decreases",
          B: "Increases",
          C: "Remains same",
          D: "Goes to zero",
        },
        answer: "B",
      },
      {
        id: 63,
        question: "The coefficient of performance of refrigerator = ?",
        options: { A: "Q_C/W", B: "W/Q_C", C: "Q_H/W", D: "W/Q_H" },
        answer: "A",
      },
      {
        id: 64,
        question: "For an ideal gas, internal energy depends only on?",
        options: { A: "Pressure", B: "Volume", C: "Temperature", D: "Entropy" },
        answer: "C",
      },
      {
        id: 65,
        question:
          "A Carnot refrigerator works between 250 K and 300 K. COP = ?",
        options: { A: "5", B: "6", C: "1", D: "0.2" },
        answer: "A",
      },
      {
        id: 66,
        question: "For polytropic process PV^n = const. When n=γ, it's?",
        options: {
          A: "Isothermal",
          B: "Isobaric",
          C: "Isochoric",
          D: "Adiabatic",
        },
        answer: "D",
      },
      {
        id: 67,
        question: "Which gas law: P₁V₁/T₁ = P₂V₂/T₂?",
        options: {
          A: "Boyle's law",
          B: "Charles' law",
          C: "Combined gas law",
          D: "Gay-Lussac's law",
        },
        answer: "C",
      },
      {
        id: 68,
        question: "Boyle's law: PV = constant at?",
        options: {
          A: "Constant temperature",
          B: "Constant pressure",
          C: "Constant volume",
          D: "Constant entropy",
        },
        answer: "A",
      },
      {
        id: 69,
        question: "Charles' law: V/T = constant at?",
        options: {
          A: "Constant temperature",
          B: "Constant pressure",
          C: "Constant entropy",
          D: "Constant density",
        },
        answer: "B",
      },
      {
        id: 70,
        question:
          "In isobaric heating, Cp is the heat needed per __ degree temperature rise?",
        options: { A: "Mole", B: "Gram", C: "Kg", D: "Unit" },
        answer: "A",
      },
      {
        id: 71,
        question: "Kelvin scale starts at?",
        options: { A: "-273°C", B: "0°C", C: "100°C", D: "273°C" },
        answer: "A",
      },
      {
        id: 72,
        question: "Room temperature 27°C in Kelvin = ?",
        options: { A: "27 K", B: "300 K", C: "246 K", D: "373 K" },
        answer: "B",
      },
      {
        id: 73,
        question: "Heat is a form of __ energy?",
        options: {
          A: "Potential",
          B: "Kinetic",
          C: "Internal/Molecular",
          D: "Electromagnetic",
        },
        answer: "C",
      },
      {
        id: 74,
        question: "The area enclosed on a P-V diagram represents?",
        options: {
          A: "Internal energy",
          B: "Enthalpy",
          C: "Work done in cyclic process",
          D: "Heat exchanged",
        },
        answer: "C",
      },
      {
        id: 75,
        question: "Entropy (ΔS) for isothermal process: ΔS = ?",
        options: { A: "Q/T", B: "T/Q", C: "Q·T", D: "0" },
        answer: "A",
      },
      {
        id: 76,
        question: "For an ideal gas, ΔU in isothermal process is?",
        options: { A: "Positive", B: "Negative", C: "Zero", D: "Q" },
        answer: "C",
      },
      {
        id: 77,
        question: "In an adiabatic process, ΔU = ?",
        options: { A: "0", B: "Q", C: "-W", D: "W" },
        answer: "C",
      },
      {
        id: 78,
        question: "The statement 'entropy of universe tends to maximum' is?",
        options: {
          A: "Zeroth law",
          B: "First law",
          C: "Second law",
          D: "Third law",
        },
        answer: "C",
      },
      {
        id: 79,
        question: "Which process has the steepest curve on P-V diagram?",
        options: {
          A: "Isothermal",
          B: "Isobaric",
          C: "Adiabatic",
          D: "Isochoric",
        },
        answer: "C",
      },
      {
        id: 80,
        question: "The efficiency of heat engine cannot exceed?",
        options: {
          A: "Carnot efficiency",
          B: "100%",
          C: "Both A and B",
          D: "Neither",
        },
        answer: "C",
      },
      {
        id: 81,
        question: "When gas does work on surroundings, W is?",
        options: { A: "Negative", B: "Positive", C: "Zero", D: "Depends" },
        answer: "B",
      },
      {
        id: 82,
        question: "The sign convention: W is positive when?",
        options: {
          A: "Work done on gas",
          B: "Work done by gas",
          C: "Both",
          D: "Neither",
        },
        answer: "B",
      },
      {
        id: 83,
        question: "Average kinetic energy of molecule = ?",
        options: { A: "(1/2)kT", B: "(3/2)kT", C: "kT", D: "3kT" },
        answer: "B",
      },
      {
        id: 84,
        question:
          "Work done in isothermal process: W = nRT ln(V₂/V₁). If V₂>V₁, W is?",
        options: { A: "Negative", B: "Zero", C: "Positive", D: "Infinite" },
        answer: "C",
      },
      {
        id: 85,
        question:
          "A heat engine takes 1000 J from source and rejects 600 J to sink. Efficiency = ?",
        options: { A: "40%", B: "60%", C: "167%", D: "25%" },
        answer: "A",
      },
      {
        id: 86,
        question: "For 1 mole of monoatomic ideal gas at T, KE = ?",
        options: { A: "RT", B: "3RT/2", C: "5RT/2", D: "RT/2" },
        answer: "B",
      },
      {
        id: 87,
        question: "In isobaric process, Q = ?",
        options: { A: "nCvΔT", B: "nCpΔT", C: "0", D: "PΔV" },
        answer: "B",
      },
      {
        id: 88,
        question: "In isochoric process, Q = ?",
        options: { A: "nCpΔT", B: "0", C: "nCvΔT", D: "PΔV" },
        answer: "C",
      },
      {
        id: 89,
        question: "Boltzmann constant k = ?",
        options: {
          A: "1.38×10⁻²³ J/K",
          B: "6.67×10⁻¹¹ J/K",
          C: "8.31 J/mol·K",
          D: "1.6×10⁻¹⁹ J/K",
        },
        answer: "A",
      },
      {
        id: 90,
        question: "Universal gas constant R = ?",
        options: {
          A: "1.38×10⁻²³ J/K",
          B: "8.314 J/mol·K",
          C: "6.67×10⁻¹¹",
          D: "0.0821 J/mol·K",
        },
        answer: "B",
      },
      {
        id: 91,
        question:
          "For ideal gas at STP (Standard T=273K, P=1 atm), 1 mole occupies?",
        options: { A: "22.4 L", B: "24.4 L", C: "2.24 L", D: "44.8 L" },
        answer: "A",
      },
      {
        id: 92,
        question: "Maxwell-Boltzmann distribution is the distribution of?",
        options: {
          A: "Charges",
          B: "Molecular speeds",
          C: "Potential energies",
          D: "Quantum states",
        },
        answer: "B",
      },
      {
        id: 93,
        question: "RMS speed of gas molecules = ?",
        options: { A: "√(RT/M)", B: "√(2RT/M)", C: "√(3RT/M)", D: "√(kT/m)" },
        answer: "C",
      },
      {
        id: 94,
        question: "Which speed is greatest for Maxwell-Boltzmann distribution?",
        options: {
          A: "Most probable speed",
          B: "Mean speed",
          C: "RMS speed",
          D: "All equal",
        },
        answer: "C",
      },
      {
        id: 95,
        question: "Avogadro's number N_A = ?",
        options: {
          A: "6.022×10²²",
          B: "6.022×10²³",
          C: "6.022×10²⁴",
          D: "6.022×10²¹",
        },
        answer: "B",
      },
      {
        id: 96,
        question: "In Otto cycle (petrol engine), compression is?",
        options: {
          A: "Isothermal",
          B: "Isobaric",
          C: "Adiabatic",
          D: "Isochoric",
        },
        answer: "C",
      },
      {
        id: 97,
        question: "Diesel engine has __ efficiency than petrol engine?",
        options: { A: "Lower", B: "Equal", C: "Higher", D: "Variable" },
        answer: "C",
      },
      {
        id: 98,
        question: "The process where PV = constant is?",
        options: {
          A: "Adiabatic",
          B: "Isobaric",
          C: "Isothermal",
          D: "Isochoric",
        },
        answer: "C",
      },
      {
        id: 99,
        question:
          "Heat flows from body A to B. Entropy of A __ and entropy of B __?",
        options: {
          A: "Increases, decreases",
          B: "Decreases, increases",
          C: "Both increase",
          D: "Both decrease",
        },
        answer: "B",
      },
      {
        id: 100,
        question:
          "The COP of refrigerator = T_C/(T_H - T_C) for Carnot refrigerator. At T_C=250, T_H=300, COP=?",
        options: { A: "5", B: "1.2", C: "0.2", D: "6" },
        answer: "A",
      },
    ],
  },
];
