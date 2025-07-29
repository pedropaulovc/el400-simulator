import './DROSimulator.css';

export interface DROSimulatorProps {
  xValue?: number;
  yValue?: number;
  zValue?: number;
}

export function DROSimulator({ xValue = 0, yValue = 0, zValue = 0 }: DROSimulatorProps) {
  return (
    <div>
      <main id="dro">
        {/* Three‑line read‑out */}
        <section className="display" aria-label="Machine position readouts">
          <output name="x">{xValue.toFixed(3)}</output>
          <output name="y">{yValue.toFixed(3)}</output>
          <output name="z">{zValue.toFixed(3)}</output>
        </section>

        {/* Axis zero/select */}
        <fieldset className="axis-panel" aria-label="Axis selection">
          <legend>Axis controls</legend>
          <button>X</button><button>X0</button>
          <button>Y</button><button>Y0</button>
          <button>Z</button><button>Z0</button>
        </fieldset>

        {/* Numeric keypad */}
        <fieldset className="keypad" aria-label="Numeric keypad">
          <legend>Numeric keypad</legend>
          <button className="b7">7</button><button className="b8">8</button><button className="b9">9</button>
          <button className="b4">4</button><button className="b5">5</button><button className="b6">6</button>
          <button className="b1">1</button><button className="b2">2</button><button className="b3">3</button>
          <button className="pm">±</button><button className="b0">0</button><button className="dot">.</button>
          <button className="clear">C</button><button className="enter">ENT</button>
        </fieldset>

        {/* Bottom-left toolbar */}
        <fieldset className="bottom" aria-label="Mode toolbar">
          <legend>Mode controls</legend>
          <button>abs/inc</button>
          <button>in/mm</button>
          <button>fn</button>
          <button>&rarr;0</button>
        </fieldset>

        {/* Auxiliary function keys */}
        <fieldset className="fkeys" aria-label="Auxiliary function keys">
          <legend>Function keys</legend>
          <button>F1</button><button>F2</button><button>F3</button><button>F4</button>
          <button>x&nbsp;=</button><button>½</button><button>Ø 8</button><button>n</button>
        </fieldset>
      </main>

      <div className="power-btn" title="Power"></div>
    </div>
  );
}