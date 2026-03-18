export interface Question {
  id: number;
  question: string;
  options: { A: string; B: string; C: string; D: string };
  answer: "A" | "B" | "C" | "D";
}

export function downloadQuestionsPDF(
  subject: string,
  chapterName: string,
  questions: Question[],
) {
  const answersHtml = questions
    .map((q) => `<span>Q${q.id}: <strong>${q.answer}</strong></span>`)
    .join(" &nbsp; ");

  const questionsHtml = questions
    .map(
      (q) => `
    <div class="question">
      <p><strong>${q.id}. ${q.question}</strong></p>
      <table class="options"><tr>
        <td>(A) ${q.options.A}</td>
        <td>(B) ${q.options.B}</td>
      </tr><tr>
        <td>(C) ${q.options.C}</td>
        <td>(D) ${q.options.D}</td>
      </tr></table>
    </div>`,
    )
    .join("");

  const html = `<!DOCTYPE html><html><head>
  <title>${chapterName} - 100 Questions | VIIT JEE</title>
  <meta charset="UTF-8"/>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; font-size: 12px; color: #111; padding: 20px; }
    .header { text-align: center; border-bottom: 3px double #000; padding-bottom: 12px; margin-bottom: 16px; }
    .header h1 { font-size: 18px; font-weight: bold; letter-spacing: 1px; }
    .header h2 { font-size: 14px; margin-top: 4px; color: #333; }
    .header h3 { font-size: 13px; margin-top: 4px; color: #555; }
    .instructions { background: #f9f9f9; border: 1px solid #ccc; padding: 10px 14px; margin-bottom: 20px; font-size: 11px; }
    .question { margin-bottom: 14px; page-break-inside: avoid; }
    .question p { line-height: 1.5; }
    .options { width: 100%; margin-top: 4px; }
    .options td { width: 50%; padding: 2px 6px; font-size: 11.5px; }
    .answer-key { background: #eef2ff; border: 2px solid #4f46e5; border-radius: 6px; padding: 14px; margin-top: 30px; }
    .answer-key h4 { font-size: 13px; font-weight: bold; margin-bottom: 8px; color: #4f46e5; }
    .answer-key .grid { display: flex; flex-wrap: wrap; gap: 6px; font-size: 11px; }
    @media print { body { padding: 10mm; } }
  </style>
</head><body>
  <div class="header">
    <h1>VIIT JEE BY VENKATESH KOMIRISETTY</h1>
    <h2>${subject.toUpperCase()} &mdash; ${chapterName.toUpperCase()}</h2>
    <h3>PRACTICE QUESTION PAPER &mdash; 100 MCQs &mdash; +4 / -1 MARKING</h3>
  </div>
  <div class="instructions">
    <strong>INSTRUCTIONS:</strong> Each question has ONE correct answer. +4 for correct, &minus;1 for wrong, 0 for unattempted. Time: 120 minutes.
  </div>
  ${questionsHtml}
  <div class="answer-key">
    <h4>ANSWER KEY</h4>
    <div class="grid">${answersHtml}</div>
  </div>
  <p style="text-align:center;margin-top:20px;font-size:11px;color:#888">VIIT JEE BY VENKATESH KOMIRISETTY &mdash; viitjeetec@gmail.com</p>
  <script>window.onload=function(){window.print();}</script>
</body></html>`;

  const w = window.open("", "_blank");
  if (w) {
    w.document.write(html);
    w.document.close();
  }
}
