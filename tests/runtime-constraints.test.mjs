import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";

const rootDir = process.cwd();

test("package.json allows modern supported Node runtimes", () => {
  const packageJsonPath = path.join(rootDir, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));

  assert.equal(packageJson.engines.node, ">=20.9");
});

test("root layout does not install a storage shim", () => {
  const layoutPath = path.join(rootDir, "app/layout.tsx");
  const layoutSource = readFileSync(layoutPath, "utf8");

  assert.doesNotMatch(layoutSource, /ensureWebStorage/);
  assert.doesNotMatch(layoutSource, /localStorage|sessionStorage/);
});
