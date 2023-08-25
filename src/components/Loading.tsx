import { FC } from "react";

const Loading: FC = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center gap-x-2 animate-pulse h-[10rem]">
      <div className="w-4 h-4 bg-green bg-opacity-50 rounded-full "></div>
      <div className="w-4 h-4 bg-green bg-opacity-50 rounded-full "></div>
      <div className="w-4 h-4 bg-green bg-opacity-50 rounded-full "></div>
    </div>
  );
};

export default Loading;
