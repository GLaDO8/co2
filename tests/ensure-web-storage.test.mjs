import test from "node:test";
import assert from "node:assert/strict";

const { ensureWebStorage } = await import("../lib/ensure-web-storage.ts");

test("ensureWebStorage replaces malformed storage globals on the server", () => {
  const originalLocalStorage = globalThis.localStorage;
  const originalSessionStorage = globalThis.sessionStorage;

  globalThis.localStorage = {};
  globalThis.sessionStorage = {};

  ensureWebStorage();

  assert.equal(typeof globalThis.localStorage.getItem, "function");
  assert.equal(typeof globalThis.sessionStorage.getItem, "function");

  globalThis.localStorage.setItem("answer", "42");
  assert.equal(globalThis.localStorage.getItem("answer"), "42");

  globalThis.localStorage = originalLocalStorage;
  globalThis.sessionStorage = originalSessionStorage;
});
