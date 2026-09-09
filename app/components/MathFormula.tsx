import katex from "katex";

type MathFormulaProps = {
  formula: string;
  displayMode?: boolean;
};

export function MathFormula({
  formula,
  displayMode = false,
}: MathFormulaProps) {
  const html = katex.renderToString(formula, {
    displayMode,
    throwOnError: false,
  });

  return (
    <span
      className={displayMode ? "math-display" : undefined}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
