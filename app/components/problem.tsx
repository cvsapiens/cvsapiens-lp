import { content } from "../content/en";
import { Thread, type ThreadStop } from "./thread";
import { StatusDot } from "./ui";

const { problem } = content;

const THREAD: ThreadStop[] = [{ x: 1.035, y: 0 }, { pin: "compare" }, { x: 0.75, fromBottom: 0 }];

export function Problem() {
  const { compare } = problem;
  return (
    <section className="band band--deep" aria-labelledby="problem-title">
      <div className="container lane problem">
        <Thread stops={THREAD} />
        <div className="problem__text">
          <h2 id="problem-title" className="h2">
            {problem.title}
          </h2>
          {problem.body.map((paragraph) => (
            <p key={paragraph} className="body-lg">
              {paragraph}
            </p>
          ))}
        </div>
        <figure className="compare doc">
          <span className="pin" data-thread-pin="compare" aria-hidden />
          <figcaption className="doc__kind">{compare.caption}</figcaption>
          <table className="compare__table">
            <thead>
              <tr>
                <th scope="col">{compare.jobColumn}</th>
                <th scope="col">{compare.resumeColumn}</th>
                <th scope="col">{compare.statusColumn}</th>
              </tr>
            </thead>
            <tbody>
              {compare.rows.map((row) => (
                <tr key={row.job}>
                  <th scope="row">{row.job}</th>
                  <td className={row.status === "missing" ? "compare__quiet" : undefined}>{row.resume}</td>
                  <td>
                    <span className={`match-status match-status--${row.status}`}>
                      <StatusDot status={row.status} />
                      {row.label}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="compare__note">
            {compare.titleNote.before}
            <strong>{compare.titleNote.job}</strong>
            {compare.titleNote.middle}
            <strong>{compare.titleNote.resume}</strong>
            {compare.titleNote.after}
          </p>
        </figure>
      </div>
    </section>
  );
}
