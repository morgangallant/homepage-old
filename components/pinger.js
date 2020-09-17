import React, { Component, useState, useEffect } from "react";

/**
 * Pinger is used to ping a remote server to display the RTT time between that server and the client.
 * @param {*} url The URL of the remote server.
 * @param {*} name The display name of the remote server.
 */
const Pinger = ({ url, name }) => {
  const [result, setResult] = useState(null);

  /**
   * On component mount, we fire off a request to the remote server.
   */
  useEffect(() => {
    const doRequest = async () => {
      let start = new Date().getTime();
      try {
        const resp = await fetch(url);
        let elapsed = new Date().getTime() - start;
        setResult({
          rtt: elapsed,
          status: resp.status,
        });
      } catch (e) {
        setResult({ err: e });
      }
    };
    doRequest();
  }, []);

  return (
    <li>
      {name}:{" "}
      {result
        ? result.err
          ? "uh oh... error"
          : `${result.status == 200 ? "online" : result.status} (${
              result.rtt
            } ms rtt)`
        : "waiting..."}
    </li>
  );
};

export default Pinger;
