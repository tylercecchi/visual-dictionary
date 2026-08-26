import pathlib, re, sys

CASES = [
    ("the colors are splitting at the edges", ["chromatic-aberration"]),
    ("background like the northern lights", ["mesh-gradient"]),
    ("milky see-through panel", ["frosted-glass"]),
    ("old newspaper print vibe", ["halftone", "print-artifacts"]),
    ("looks burned in like an old monitor", ["crt-scanlines"]),
    ("text like the matrix rain", ["terminal-aesthetic", "ascii-rendering"]),
    ("shiny like a soap bubble", ["iridescence"]),
    ("brushed aluminum feel", ["specular-metallic"]),
    ("wet floor with the lights reflecting", ["reflections"]),
    ("melting gooey blobs", ["liquid-ripple"]),
    ("like light through a pool", ["caustics"]),
    ("make it look frozen over", ["ice-frost"]),
    ("old worn leather book", ["material-texture"]),
    ("rusty weathered metal", ["weathering-patina"]),
    ("soft fuzzy like velvet", ["velvet-plush"]),
    ("like liquid mercury", ["liquid-metal"]),
    ("cracked pottery repaired with gold", ["ceramic-glaze"]),
    ("sunlight through blinds on the wall", ["gobo-shadows"]),
    ("cozy candlelit glow", ["firelight-flicker"]),
    ("light glowing through wax", ["subsurface-scattering"]),
    ("blacklight poster look", ["blacklight-uv"]),
    ("dark at the edges like a spotlight", ["vignette"]),
    ("confetti when they finish", ["particles"]),
    ("the numbers should tick up", ["animated-numbers"]),
    ("words appear one letter at a time", ["kinetic-type"]),
    ("text typing itself out", ["kinetic-type"]),
    ("old vhs tape look", ["crt-scanlines", "glitch"]),
    ("8 bit retro game style", ["pixelation", "pixel-art-technique"]),
    ("make it look hand drawn", ["hatching-sketch"]),
    ("like an architect's blueprint", ["blueprint"]),
    ("y2k chrome vibes", ["period-looks"]),
    ("dreamy soft focus background", ["depth-of-field"]),
    ("long flat shadows like airport signage", ["long-shadow-isometric"]),
    ("screen glitches when there's an error", ["glitch"]),
    ("homepage sections zig zag left right", ["alternating-rows"]),
    ("pinterest style grid", ["masonry"]),
    ("apple style feature boxes", ["bento-grid"]),
    ("filters on the left with results", ["faceted-browse"]),
    ("a trello style view", ["board-kanban"]),
    ("panel slides up from the bottom", ["sheet-drawer"]),
    ("little popup when you hover", ["popover-menu", "hover-response"]),
    ("toast when saved", ["toast-notification"]),
    ("cmd k search", ["command-palette"]),
    ("expandable faq", ["disclosure"]),
    ("instagram story style", ["stories-format"]),
    ("chat like chatgpt", ["conversation-layout"]),
    ("pricing page with three plans", ["comparison-columns"]),
    ("login screen", ["focus-page"]),
    ("guide new users around the app", ["coach-marks"]),
    ("cards shuffle smoothly when filtered", ["layout-motion"]),
    ("everything looks the same nothing stands out", ["visual-hierarchy"]),
    ("feels cramped", ["spacing-density"]),
    ("buttons feel dead when clicked", ["interaction-feel", "control-language"]),
    ("page change feels jarring", ["page-transitions"]),
    ("profile page with a cover photo", ["profile-header"]),
    ("video controls keep disappearing", ["media-chrome"]),
    ("gatsby style party invite", ["art-deco"]),
    ("mucha style poster with flowing hair", ["art-nouveau"]),
    ("bauhaus poster with primary colors", ["bauhaus-swiss"]),
    ("trippy 60s concert poster", ["psychedelia"]),
    ("squiggles and confetti shapes 80s", ["memphis-style"]),
    ("moroccan tile pattern", ["ornament-traditions"]),
    ("celtic knot border", ["ornament-traditions"]),
    ("rough carved block print look", ["woodcut-linocut"]),
    ("steampunk brass and gears", ["retro-futurism"]),
    ("gothic dark academia vibe", ["historical-ornate"]),
    ("cottagecore cozy farmhouse feel", ["soft-aesthetics"]),
    ("kawaii cute mascot with a face", ["cute-naive"]),
    ("old whiskey label design", ["historical-ornate"]),
    ("make it look like a newspaper front page", ["newspaper-editorial"]),
    ("vogue style fashion layout", ["fashion-editorial"]),
    ("should read like a classic book", ["book-design"]),
    ("tufte style margin notes", ["academic-paper"]),
    ("latex research paper look", ["academic-paper"]),
    ("david carson chaotic type", ["type-composition"]),
    ("comic book style with speech bubbles", ["comics-panels"]),
    ("restaurant menu with dot leaders", ["menu-design"]),
    ("ikea style assembly instructions", ["instructional-manual"]),
    ("recipe card with ingredients and steps", ["recipe-editorial"]),
    ("spray paint tag lettering with drips", ["graffiti-street"]),
    ("dreamlike floating objects magritte", ["surrealism"]),
    ("mad men era 50s style", ["mid-century-modern"]),
    ("saul bass cut paper look", ["mid-century-modern"]),
]

STOP = set("the a an is are should be like when with on at of and or it its that make look looks feel feels vibe vibes style old new for in to they there".split())

def stems(w):
    out = {w}
    for suf in ("ing","ed","es","s","ly"):
        if w.endswith(suf) and len(w) > len(suf)+2:
            out.add(w[:-len(suf)])
    return out

entries = {}
for f in pathlib.Path("entries").glob("*.md"):
    t = f.read_text().lower()
    alias = re.search(r'aliases:\s*\[([^\]]*)\]', t)
    cues = re.search(r'## you know it when you see\n(.*?)\n## ', t, re.S)
    entries[f.stem] = {
        "alias": alias.group(1) if alias else "",
        "title": f.stem.replace("-", " "),
        "cues": cues.group(1) if cues else "",
        "body": t,
    }

results = []
for phrase, expected in CASES:
    toks = [w for w in re.findall(r"[a-z0-9]+", phrase.lower()) if w not in STOP]
    scores = {}
    for name, e in entries.items():
        s = 0
        for tok in toks:
            variants = stems(tok)
            if any(v in e["alias"] for v in variants): s += 4
            elif any(v in e["title"] for v in variants): s += 3
            elif any(v in e["cues"] for v in variants): s += 2
            elif any(re.search(r'\b'+re.escape(v), e["body"]) for v in variants): s += 1
        scores[name] = s
    top = sorted(scores.items(), key=lambda kv: -kv[1])[:3]
    topnames = [n for n,s in top if s > 0]
    hit = next((i for i,n in enumerate(topnames) if n in expected), None)
    status = "PASS" if hit == 0 else ("TOP3" if hit is not None else "FAIL")
    results.append((status, phrase, expected, top))

for status, phrase, expected, top in results:
    if status != "PASS":
        print(f"{status:5} | {phrase!r} -> want {expected}")
        print(f"        got: {[(n,s) for n,s in top]}")
passes = sum(1 for r in results if r[0]=="PASS")
top3 = sum(1 for r in results if r[0]=="TOP3")
fails = sum(1 for r in results if r[0]=="FAIL")
print(f"\n{passes} PASS / {top3} TOP3 / {fails} FAIL of {len(results)}")
