// End-to-end MCP test: spawns server.mjs over stdio as a real client.
// Run: node tools/e2e-test.mjs
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const transport = new StdioClientTransport({
  command: process.execPath,
  args: [join(ROOT, "server.mjs")],
});
const client = new Client({ name: "e2e-test", version: "0.0.1" });
await client.connect(transport);

const tools = await client.listTools();
console.log("tools:", tools.tools.map((t) => t.name).join(", "));

const r1 = await client.callTool({ name: "resolve", arguments: { query: "milky see-through panel" } });
console.log("\nresolve('milky see-through panel'):\n" + r1.content[0].text.split("\n").slice(0, 3).join("\n"));

const r2 = await client.callTool({ name: "resolve", arguments: { query: "gothic dark ornate" } });
console.log("\nresolve('gothic dark ornate') top:", r2.content[0].text.split("\n")[0]);

const r3 = await client.callTool({ name: "get_entry", arguments: { name: "book-design" } });
if (!r3.content[0].text.includes("chapter")) throw new Error("book-design content wrong");
console.log("get_entry('book-design'): ok,", r3.content[0].text.length, "chars");

const r4 = await client.callTool({ name: "browse", arguments: {} });
if (!r4.content[0].text.includes("Editorial cluster")) throw new Error("INDEX missing");
console.log("browse(): INDEX ok");

const r5 = await client.callTool({ name: "layout_system", arguments: {} });
if (!r5.content[0].text.includes("surface contract")) throw new Error("LAYOUT missing");
console.log("layout_system(): ok");

await client.close();
console.log("\nE2E SMOKE TEST OK");
