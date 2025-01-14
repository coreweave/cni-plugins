module.exports = {
  rules: {
    "header-max-length": [2, "always", 72], // To show full header in github
    "subject-case": [2, "always", "sentence-case"], // To look consistent in auto-generated changelog
    "scope-enum": [2, "always"],
  },
  extends: ["@commitlint/config-conventional"],
};