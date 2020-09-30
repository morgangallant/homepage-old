import Layout from "../components/layout";
import { useState, useEffect } from "react";

/**
 * The URL to fetch logs from.
 */
const LogsURL = "https://xor.dev/api/logs/get";

/**
 * The authentication key needed to read logs.
 */
const LogsKey = "IDDkVKt52g5P3kgBZX7mS1C5CMuguZn833eeHGCQbXGTReFZiLF4yaxPKHKL";

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
        setLogs(await response.json());
      } else {
        console.log("error", response.status, response.statusText);
      }
    };
    doRequest();
  }, []);

  return <Layout>{logs ? <div></div> : <p>Loading logs...</p>}</Layout>;
}
