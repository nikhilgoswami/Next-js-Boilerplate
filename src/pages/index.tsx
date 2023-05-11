// import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";

import { Meta } from "@/layouts/Meta";
import { decrement, incrementAsync } from "@/redux/counter/actions";
import type { RootState } from "@/redux/type";
import { Main } from "@/templates/Main";

const Index = () => {
  // const router = useRouter();
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state?.counter);
  const handleIncrement = () => {
    dispatch(incrementAsync());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="items-center justify-center md:flex-1">
        <span className="counter">Counter {counter?.value}</span>

        <button type="button" onClick={handleIncrement}>
          increment
        </button>
        <button type="button" onClick={handleDecrement}>
          decrement
        </button>
      </div>
    </Main>
  );
};

export default Index;
