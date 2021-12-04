import { CSSProperties } from "react";

type Props = {
  id?: string,
  value: string,
  styles: CSSProperties,
  setUserInputs: React.Dispatch<React.SetStateAction<string>>,
};

export const Inputs = (props: Props): JSX.Element => {

  return (
    <input
      onChange={(event) => props.setUserInputs(event.target.value)}
      style={props.styles}
      value={props.value}
      id={props.id}
      placeholder="enter a movie title"
    />
  );
};
