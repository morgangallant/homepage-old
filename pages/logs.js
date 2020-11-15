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
  const [keys, setKeys] = useState([]);
  const [current, setCurrent] = useState(-1);

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

  const getDateKey = (date) => {
    var d = new Date(date);
    var m = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return (
      m[d.getMonth()] +
      " " +
      ((d.getDate() < 10 ? "0" : "") + d.getDate()) +
      " " +
      d.getFullYear()
    );
  };

  const days = new Map();
  if (logs) {
    logs.logs.forEach((log) => {
      const ts = Date.parse(log.timestamp);
      const content = log.contents;
      const key = getDateKey(ts);
      const existing = days.has(key) ? days.get(key) : [];
      existing.push({ timestamp: ts, content: content });
      existing.sort((a, b) => a.timestamp - b.timestamp);
      days.set(key, existing);
    });
  }

  if (days.size != 0 && keys.length == 0 && current == -1) {
    const k = Array.from(days.keys()).reverse();
    setKeys(k);
    setCurrent(k.length - 1);
  }

  return (
    <Layout>
      <a href="/">&larr; Back to Homepage</a>
      <p>
        <strong>Morgan's Logs</strong>
      </p>
      {logs ? (
        <div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "50px",
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none",
              }}
            >
              <a
                style={{
                  cursor: `${current > 0 ? "pointer" : "not-allowed"}`,
                  color: `${current > 0 ? "blue" : "black"}`,
                }}
                onClick={() => {
                  if (current > 0) {
                    setCurrent(current - 1);
                  }
                }}
              >
                &#8592; Previous Day
              </a>
            </div>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexGrow: "10",
                paddingLeft: "15px",
                paddingRight: "15px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>
                <strong>{keys[current]}</strong>
              </p>
            </div>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none",
              }}
            >
              <a
                style={{
                  cursor: `${
                    current < keys.length - 1 ? "pointer" : "not-allowed"
                  }`,
                  color: `${current < keys.length - 1 ? "blue" : "black"}`,
                }}
                onClick={() => {
                  if (current < keys.length - 1) {
                    setCurrent(current + 1);
                  }
                }}
              >
                Next Day &#8594;
              </a>
            </div>
          </div>
          <ul>
            {(days.get(keys[current]) ?? []).map((l, i) => {
              const date = new Date(l.timestamp);
              let str = date.toLocaleTimeString([], {
                timeZone: "America/New_York",
                hour: "2-digit",
                minute: "2-digit",
              });
              str = str.replace("p.m.", "PM");
              str = str.replace("a.m.", "AM");
              if (str.charAt(1) == ":") {
                str = "0" + str;
              }
              return (
                <li key={i}>
                  <span style={{ fontWeight: "500" }}>{str}</span>
                  {": "}
                  {l.content}
                </li>
              );
            })}
            {/* {logs.logs.map((l, i) => {
              const date = Date.parse(l.timestamp);
              const dstr = new Date(date).toLocaleString("en-US", {
                timeZone: "America/New_York",
              });
              return (
                <li key={i}>
                  <strong>{dstr}</strong> &#8594; {l.contents}
                </li>
              );
            })} */}
          </ul>
        </div>
      ) : (
        <p>Loading logs...</p>
      )}
    </Layout>
  );
}
