import { Submission } from "../../../types";
import { ReactCompareSlider } from "react-compare-slider";
import { ReactCompareSliderImage } from "react-compare-slider";

interface submssionInfoProps {
  submission: Submission;
}

const SubmissionInfo = (props: submssionInfoProps) => {
  return (
    <section>
      <h1>{props.submission.title}</h1>
      <p>{props.submission.description}</p>

      <section>
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage src={props.submission.pictureBefore} alt="Image one" />
          }
          itemTwo={
            <ReactCompareSliderImage src={props.submission.pictureAfter} alt="Image two" />
          }
        />
      </section>
    </section>
  );
};

export default SubmissionInfo;
