import React, { useState } from "react";
import "../styles/styles.css";  // Adjust path if different

const candidates = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Pawan" },
  { id: 3, name: "Monika" },
  { id: 4, name: "Akriti" },
];

const CandidateList = () => {
  const [votedCandidate, setVotedCandidate] = useState(null);

  const handleVote = (candidateId) => {
    setVotedCandidate(candidateId);
    alert(`You voted for ${candidates.find((c) => c.id === candidateId).name}`);
  };

  return (
    <div className="candidate-list">
      <h2>Candidates</h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id} className={votedCandidate === candidate.id ? "voted" : ""}>
            <span>{candidate.name}</span>
            <button
              className={votedCandidate === candidate.id ? "voted" : ""}
              disabled={votedCandidate !== null}
              onClick={() => handleVote(candidate.id)}
            >
              Vote
            </button>
          </li>
        ))}
      </ul>
      {votedCandidate !== null && (
        <p style={{ color: "green", textAlign: "center", marginTop: 20 }}>
          Thanks for voting for {candidates.find((c) => c.id === votedCandidate).name}!
        </p>
      )}
    </div>
  );
};

export default CandidateList;
