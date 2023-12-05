import { caesar } from "@/app/fonts";

function Headline({ children }) {
  return (
    <h1 className={caesar.className + " text-3xl text-center mt-4"}>
      {children}
    </h1>
  );
}

export default Headline;
