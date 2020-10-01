import Layout from "../components/layout";
import { useState, useEffect } from "react";

/**
 * The URL to fetch logs from.
 */
const LogsURL = "https://xor.dev/api/logs/get";

/**
 * The authentication key needed to read logs.
 */
const LogsKey = "bPnmmZV6tK2WntaeCeLekUOGUSMywx5zQBEdSmSwByeFbrTP1o19fN5pyP4v";

export default function Logs() {
  const [logs, setLogs] = useState(null);

  /**
   * On component mount, fetch all the logs.
   */
  useEffect(() => {
    const doRequest = async () => {
      const response = await fetch(LogsURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": LogsKey,
        },
        body: JSON.stringify({}),
      });
      if (response.status == 200) {
        const json = await response.json();
        setLogs(json);
      } else {
        console.log("error", response.status, response.statusText);
      }
    };
    doRequest();
  }, []);

  return (
    <Layout>
      {logs ? (
        <div>
          <ul>
            {logs.logs.map((l, i) => {
              const date = Date.parse(l.timestamp);
              const dstr = new Date(date).toLocaleString();
              return (
                <li key={i}>
                  ({dstr}) {l.contents}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>Loading logs...</p>
      )}
    </Layout>
  );
}
