// End-to-end MCP test: spawns server.mjs over stdio as a real client.
// Run: node tools/e2e-test.mjs
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const transport = new StdioClientTransport({ command: process.execPath, args: [join(ROOT, "server.mjs")] });
const client = new Client({ name: "e2e-test", version: "0.0.1" });
await client.connect(transport);
const call = async (name, args = {}) => (await client.callTool({ name, arguments: args })).content[0].text;
const expect = (cond, msg) => { if (!cond) throw new Error(msg); };

const tools = (await client.listTools()).tools.map((t) => t.name);
console.log("tools:", tools.join(", "));
for (const t of ["resolve", "get_entry", "browse", "compose", "libraries_for", "references", "protocol", "layout_system", "libraries"]) expect(tools.includes(t), `missing tool ${t}`);

const r1 = await call("resolve", { query: "milky see-through panel" });
expect(r1.startsWith("frosted-glass"), "resolve: frosted-glass should be first\n" + r1);
expect(r1.includes(" — "), "resolve: missing summary");
console.log("resolve('milky see-through panel'): ok");

const r2 = await call("resolve", { query: "premium" });
expect(r2.includes("CLOSE CALL"), "resolve('premium') should flag a close call\n" + r2);
console.log("resolve('premium'): close call flagged");

const r3 = await call("resolve", { query: "card" });
expect(r3.startsWith("card "), "resolve('card') should rank the card entry first\n" + r3);
console.log("resolve('card'): ok");

const r4 = await call("get_entry", { name: "book-design" });
expect(r4.includes("chapter"), "book-design content wrong");
const r4b = await call("get_entry", { name: "frosted-glas" });
expect(r4b.includes("Nearest"), "get_entry should suggest nearest names");
console.log("get_entry: ok");

const r5 = await call("browse", {});
expect(r5.includes("Editorial cluster"), "INDEX missing");
const r5b = await call("browse", { category: "wardrobe" });
expect(r5b.includes("art-deco") && r5b.includes(" — "), "browse('wardrobe') should list wardrobes with summaries");
console.log("browse: ok");

const r6 = await call("compose", { structure: "recipe-editorial", wardrobe: "historical-ornate" });
expect(r6.includes("# STRUCTURE") && r6.includes("# WARDROBE") && r6.includes("Structural pressure"), "compose named wardrobe failed\n" + r6.slice(0, 400));
const r6b = await call("compose", { structure: "centered-stack", wardrobe: "frosted-glass, typographic-voice" });
expect(r6b.includes("custom dial sheet") && r6b.includes("Not yet set"), "compose custom wardrobe failed");
console.log("compose: named + custom ok");

const r7 = await call("libraries_for", { entry: "ai-orb" });
expect(r7.includes("Libraries.dev") || r7.includes("thinking-orbs"), "libraries_for('ai-orb') should find the registry rows\n" + r7);
const r7b = await call("libraries_for", { entry: "spatial-input" });
expect(r7b.includes("Terms:") && /commercial release/i.test(r7b), "libraries_for('spatial-input') should carry the Models licence terms\n" + r7b);
const r7c = await call("libraries_for", { entry: "toast-notification" });
expect(r7c.includes("transitions.dev") && /redistribute/i.test(r7c), "libraries_for('toast-notification') should carry transitions.dev's no-redistribution term\n" + r7c.slice(0, 600));
const r7d = await call("libraries_for", { entry: "undo-recovery" });
expect(r7d.includes("Interface Lineage") && /cite and link/i.test(r7d), "libraries_for('undo-recovery') should surface Interface Lineage with its usage terms\n" + r7d);
console.log("libraries_for: ok (rows + terms + knowledge sources)");

const r7e = await call("references", { entry: "pointer-intent" });
expect(r7e.includes("Interface Lineage") && /never copy/i.test(r7e), "references('pointer-intent') should return Interface Lineage terms\n" + r7e);
const r7f = await call("get_entry", { name: "liquid-metal" });
expect(r7f.includes("Coverage:") && r7f.includes("libraries_for('liquid-metal')"), "get_entry should end with a coverage pointer");
console.log("references + get_entry coverage footer: ok");

const r8 = await call("layout_system", {});
expect(r8.includes("surface contract") && r8.includes("Structure × wardrobe tensions"), "LAYOUT missing sections");
console.log("layout_system: ok");

await client.close();
console.log("\nE2E TEST OK");
