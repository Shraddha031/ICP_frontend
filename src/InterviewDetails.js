import { useParams } from "react-router-dom";
import Moment from "react-moment";
import useFetch from "./useFetch";
const InterviewDetails = () => {
  const { uuid } = useParams();
  const {
    data: interview,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/v1/interviews/${uuid}`);

  return (
    <div className="interview-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {interview && (
        <div>
          <h1>Interview Details</h1>
          <h2>id: {uuid}</h2>
          <br></br>
          <h4>
            Date: <Moment format="DD-MM-YYYY">{interview.startTime}</Moment>
          </h4>
          <h4>
            Timings: <Moment format="hh:mm A">{interview.startTime}</Moment> -{" "}
            <Moment format="hh:mm A">{interview.endTime}</Moment>
          </h4>
          <br></br>
          <h4>Participants</h4>
          <ul>
            {interview.participants.map((participant, idx) => (
              <li>{participant.email}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default InterviewDetails;