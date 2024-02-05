export default function initialLetter({ addUtilities, config, e }) {
  const values = config("theme.initialLetter", {
    normal: "normal",
    initial: "initial",
    1.5: "1.5",
    2: "2",
    3: "3",
    4: "4",
  });

  const variants = config("variants.initialLetter", []);
  const utilities = {};

  for (const key in values) {
    utilities[`.initial-letter-${e(key)}`] = {
      "-webkit-initial-letter": values[key],
      "initial-letter": values[key],
    };
  }

  addUtilities(utilities, {
    variants,
  });
}
