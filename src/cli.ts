#!/usr/bin/env node
import { argv } from "node:process";

function main() {
  const args = argv.slice(2);
  if (args.includes("--version") || args.includes("-v")) {
    console.log("mycli v0.1.0");
    return;
  }
  if (args.length === 0) {
    console.log("Hello from mycli — pass arguments to do something useful.");
    return;
  }
  console.log("args:", args);
}

main();
