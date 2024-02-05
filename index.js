export default function fontVariantCaps({ addUtilities, config, e }) {
  const values = config("theme.fontVariantCaps", {
    normal: "normal",
    small: "small-caps",
    all: "all-small-caps",
    petite: "petite-caps",
    unicase: "unicase",
    titling: "titling-caps",
  });

  const variants = config("variants.fontVariantCaps", []);
  const utilities = {};

  for (const key in values) {
    utilities[`.font-variant-caps-${e(key)}`] = {
      "font-variant-caps": values[key],
    };
  }

  addUtilities(utilities, {
    variants,
  });
}
