export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>DRO front panel (all‑fr grid)</title>
        <style jsx global>{`
/********************  DESIGN TOKENS  *************************/
:root{
  --gap: 1rem;                  /* standard spacing */
  --border: 2px solid #555;     /* button border    */
  --bg-panel:#fafafa;
  --bg-btn:#e4e4e4;
  --bg-btn-active:#cfcfcf;
  --font-sans: system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}

/********************  GLOBAL RESET  *************************/
*{box-sizing:border-box;}
html,body{height:100%;margin:0;}
body{
  display:flex;justify-content:center;align-items:flex-start;
  padding:2rem;
  background:#0b0f17;
  font-family:var(--font-sans);
}

/********************  MAIN GRID  ****************************/
main#dro{
  display:grid;
  /* 3 columns proportionally: LCD  | axis | keypad           */
  grid-template-columns: 5fr 2fr 3fr;
  /* 3 rows: top block | spacer | bottom block                */
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "display axis keypad"
    ".       .    keypad"
    "bottom  .    fkeys";
  gap:var(--gap);
  background:var(--bg-panel);
  border:4px solid #666;
  border-radius:6px;
  padding:1rem;
  box-shadow:0 0 8px #0005;
  width:min(90vw,60rem);
}

/********************  READ‑OUT SECTION  *********************/
section.display{grid-area:display;display:grid;grid-template-rows:repeat(3,1fr);border:2px solid #444;border-radius:4px;overflow:hidden;}
section.display output{display:flex;align-items:center;justify-content:flex-end;padding-inline:1rem;font:900 2rem/1.2 "Seven Segment",monospace;background:#e6e7e9;border-bottom:1px solid #ccc;letter-spacing:2px;}
section.display output:last-child{border-bottom:none;}

/********************  AXIS SELECT  **************************/
aside.axis-panel{grid-area:axis;display:grid;grid-template-columns:repeat(2,1fr);grid-auto-rows:1fr;gap:var(--gap);}

/********************  NUMERIC KEYPAD  ***********************/
nav.keypad{grid-area:keypad;display:grid;gap:var(--gap);grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(5,1fr);grid-template-areas:"b7 b8 b9""b4 b5 b6""b1 b2 b3""pm b0 dot""c  ent ent";}

/********************  TOOLBARS ******************************/
nav.bottom{grid-area:bottom;display:grid;grid-template-columns:repeat(4,1fr);gap:var(--gap);}
nav.fkeys{grid-area:fkeys;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(2,1fr);gap:var(--gap);}

/********************  CONTROLS  *****************************/
button{width:100%;aspect-ratio:1/1;border:var(--border);border-radius:6px;background:var(--bg-btn);font-weight:600;cursor:pointer;}
button:active{background:var(--bg-btn-active);}

/* keypad specific sizes */
.keypad .clear{grid-area:c;}
.keypad .enter{grid-area:ent;aspect-ratio:auto;height:100%;display:flex;align-items:center;justify-content:center;}

/* mapping other keypad buttons */
.b0{grid-area:b0}.b1{grid-area:b1}.b2{grid-area:b2}.b3{grid-area:b3}.b4{grid-area:b4}.b5{grid-area:b5}.b6{grid-area:b6}.b7{grid-area:b7}.b8{grid-area:b8}.b9{grid-area:b9}.pm{grid-area:pm}.dot{grid-area:dot}

/********************  POWER BUTTON (optional) **************/
.power-btn{position:absolute;bottom:20px;left:20px;width:2.2rem;aspect-ratio:1;border-radius:50%;border:2px solid #811;background:#b22;box-shadow:inset 0 0 4px #0004;}
        `}</style>
      </head>
      <body>
        <main id="dro">
          {/* Three‑line read‑out */}
          <section className="display" aria-label="Machine position readouts">
            <output name="x">259.085</output>
            <output name="y">74.000</output>
            <output name="z">6.1380</output>
          </section>

          {/* Axis zero/select */}
          <aside className="axis-panel" aria-label="Axis selection">
            <button>X</button><button>X0</button>
            <button>Y</button><button>Y0</button>
            <button>Z</button><button>Z0</button>
          </aside>

          {/* Numeric keypad */}
          <nav className="keypad" aria-label="Numeric keypad">
            <button className="b7">7</button><button className="b8">8</button><button className="b9">9</button>
            <button className="b4">4</button><button className="b5">5</button><button className="b6">6</button>
            <button className="b1">1</button><button className="b2">2</button><button className="b3">3</button>
            <button className="pm">±</button><button className="b0">0</button><button className="dot">.</button>
            <button className="clear">C</button><button className="enter">ENT</button>
          </nav>

          {/* Bottom-left toolbar */}
          <nav className="bottom" aria-label="Mode toolbar">
            <button>abs/inc</button>
            <button>in/mm</button>
            <button>fn</button>
            <button>&rarr;0</button>
          </nav>

          {/* Auxiliary function keys */}
          <nav className="fkeys" aria-label="Auxiliary function keys">
            <button>F1</button><button>F2</button><button>F3</button><button>F4</button>
            <button>x&nbsp;=</button><button>½</button><button>Ø 8</button><button>n</button>
          </nav>
        </main>

        <div className="power-btn" title="Power"></div>
      </body>
    </html>
  );
}
