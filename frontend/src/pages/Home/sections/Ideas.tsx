import LinkButton from "../../../ui/Button/LinkButton";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Ideas = () => {
  return (
    <section className="flex gap-24 items-center justify-between">
      <section className="w-1/2 rounded-lg overflow-hidden">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image one"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image two"
            />
          }
        />
      </section>
      <section className="flex flex-col gap-8 w-1/2">
        <h1 className="text-4xl font-semibold">Наши креативные идеи!</h1>
        <p className="text-lg">
          Здесь мы представляем вам наши фотографии, которые воплощают идеи и
          концепции по улучшению визуальной эстетической окружающей среды нашего
          города.
        </p>
        <LinkButton to="/login" classes={["!w-1/2", "uppercase"]}>
          Увидеть больше
        </LinkButton>
      </section>
    </section>
  );
};

export default Ideas;
