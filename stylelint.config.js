module.exports = {
  extends: "stylelint-config-recommended-scss",
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
  },
  "selector-pseudo-element-no-unknown": [
    true,
    {
      ignorePseudoElements: ["v-deep"],
    },
  ],
};
