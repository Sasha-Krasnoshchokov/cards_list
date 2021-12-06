type Props = {
  url: string,
  widthValue?: number,
  heightValue?: number,
};

export const Icon = (props: Props): JSX.Element => {

  return (
    <div
      style={
        {
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: props.heightValue,
          height: props.heightValue,
          backgroundImage: `url(${props.url})`,
        }
      }
    />
  );
};
