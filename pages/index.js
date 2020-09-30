import Layout from "../components/layout";
import Pinger from "../components/pinger";

export default function Index() {
  /**
   * My on-premises server machines.
   */
  const Machines = [
    {
      name: "dell0.morgangallant.com",
      url: "https://dell0.morgangallant.com/health",
    },
    {
      name: "dell1.morgangallant.com",
      url: "https://dell1.morgangallant.com/health",
    },
    {
      name: "dell2.morgangallant.com",
      url: "https://dell2.morgangallant.com/health",
    },
  ];

  /**
   * List of books I've especially enjoyed reading.
   */
  const Books = [
    "The Value of Everything (Mazzucato)",
    "Elon Musk (Vance)",
    "The Art of Doing Science and Engineering (Hamming)",
    "Superintelligence (Bostrom)",
    "Sapiens (Harari)",
    "I, Robot (Asimov)",
    "Stubborn Attachments (Cowen)",
    "Zero to One (Thiel)",
  ];

  return (
    <Layout>
      <img
        src="/images/profile.jpg"
        alt="profile picture"
        style={{ width: 150 }}
      />
      <p>
        Hi, I'm Morgan. My email is{" "}
        <a href="mailto:morgan@morgangallant.com">morgan@morgangallant.com</a>.
      </p>
      <p>
        I do a lot of writing on my{" "}
        <a href="https://morgangallant.substack.com">blog</a>.
      </p>
      <p>
        My machines: (<a href="/machines.jpg">picture</a>)
      </p>
      <ul>
        {Machines.map((desc, i) => {
          return <Pinger key={i} url={desc.url} name={desc.name} />;
        })}
      </ul>
      <p>Some stuff I've worked on:</p>
      <ul>
        <li>
          2013-2016: Wrote Minecraft plugins for hardcore factions servers.
        </li>
        <li>
          2017-2018: Queen's University Big Data Analytics Lab (
          <a href="https://research.cs.queensu.ca/home/farhana/bam-lab/">
            site
          </a>
          ), published{" "}
          <a href="https://ieeexplore.ieee.org/document/8754179">research</a> in
          IEEE COMPSAC.
        </li>
        <li>
          2019: Kuna Systems (<a href="https://getkuna.com">site</a>), on-device
          object detection and live video streaming.
        </li>
        <li>
          2020: AMD (<a href="https://amd.com">site</a>), realtime audio signal
          processing and <a href="https://www.unrealengine.com/en-US/">UE4</a>{" "}
          rendering pipeline.
        </li>
        <li>
          2020: Debuild (<a href="https://debuild.co">site</a>), giving everyone
          the ability to create valuable software.
        </li>
      </ul>
      <p>Some stuff I've released:</p>
      <ul>
        <li>
          <a href="https://complaintdept.co">complaintdept.co</a>: GPT-3 powered
          "complaint department" using a drill sergeant personality.
        </li>
        <li>
          <a href="https://regexishard.com">regexishard.com</a>: GPT-3 powered
          english to regex converter.
        </li>
        <li>
          <a href="https://tweetledee.xyz">tweetledee.xyz</a>: Secretly like
          Twitter mutuals and get notified if they like you back (
          <a href="https://carolchen.me">collab</a>).
        </li>
      </ul>
      <p>
        Some books I've especially enjoyed reading (in no particular order):
      </p>
      <ul>
        {Books.map((name, i) => {
          return <li key={i}>{name}</li>;
        })}
      </ul>
      <p>Other links:</p>
      <ul>
        <li>
          <a href="https://github.com/morgangallant">
            github.com/morgangallant
          </a>
        </li>
        <li>
          <a href="https://twitter.com/morgallant">twitter.com/morgallant</a>
        </li>
        <li>
          <a href="https://facebook.com/morganagallant">
            facebook.com/morganagallant
          </a>
          , unused.
        </li>
        <li>
          <a href="https://www.linkedin.com/in/morganagallant/">
            linkedin.com/in/morganagallant
          </a>
          , unused.
        </li>
      </ul>
    </Layout>
  );
}
