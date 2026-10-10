import { stack, differentials } from "@/lib/site";

export function Stack() {
  return (
    <>
      <section className="section" id="stack">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="kicker">
                <i /> Stack
              </p>
              <h2>Stack de Tecnologias</h2>
            </div>
          </div>
          <div className="stack-grid">
            {stack.map((group) => (
              <div className="stack-col" key={group.title}>
                <h3>{group.title}</h3>
                <div className="chips">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="diferenciais" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="reveal">
            <p className="kicker">
              <i /> Diferenciais
            </p>
            <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)", maxWidth: "14ch", marginBottom: "1.5rem" }}>
              Por que empresas escolhem a aiion
            </h2>
          </div>
          <div className="diff">
            {differentials.map((item, index) => (
              <div className="diff-row" key={item}>
                <em>{String(index + 1).padStart(2, "0")}</em>
                <strong>{item}</strong>
                <span>aiion</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
