import { Button } from "@/components/ui/button";

function NextButton() {
  return (
    <Button variant="outline" className="p-6 border-yellowaccent text-yellowaccent gap-4 text-2xl uppercase w-48 m-auto hover:bg-yellowaccent hover:text-background group">
      Next{" "}
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
        <path
          d="M17.2803 20.7803C16.9874 21.0732 16.5126 21.0732 16.2197 20.7803C15.9593 20.52 15.9304 20.1158 16.1329 19.8235L16.2197 19.7197L22.441 13.5L1.75 13.5C1.33579 13.5 0.999999 13.1642 0.999999 12.75C0.999999 12.3358 1.33579 12 1.75 12L22.4395 12L16.2197 5.78033C15.9268 5.48744 15.9268 5.01256 16.2197 4.71967C16.5126 4.42678 16.9874 4.42678 17.2803 4.71967L24.7803 12.2197L24.8366 12.2825L24.8999 12.3754L24.9627 12.516L24.9918 12.6389L24.9973 12.6858L24.9998 12.7658C24.9992 12.7976 24.9965 12.8294 24.9918 12.8609L25 12.75L24.9958 12.8301L24.9756 12.9403L24.9627 12.9841L24.9148 13.0976L24.8477 13.2031L24.7803 13.2803L17.2803 20.7803Z"
          fill="#FEC90D"
          stroke="#FEC90D"
          className="group-hover:stroke-blue-500"
        />
      </svg>
    </Button>
  );
}

export default NextButton;