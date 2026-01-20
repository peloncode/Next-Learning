"use client";
import { CounterResponse } from "@/app/api/interface/counterResponse";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCountState,
  subtractOne,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  value: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = fetch("/api/counter").then((resp) => resp.json());
  return data;
};

const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCountState(count)));
  }, [dispatch]);
  // useEffect(() => {
  //   dispatch(initCountState(value));
  // }, [dispatch, value]);

  return (
    <>
      <span className="text-2xl p-2 border-b-4 rounded-lg">{count}</span>
      <div className="p-12 flex gap-4">
        <button
          onClick={() => dispatch(addOne())}
          className="font-bold text-3xl border-2 bg-gray-200 border-blue-200 rounded-2xl w-20 hover:bg-gray-300"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(subtractOne())}
          className="font-bold text-3xl border-2 bg-gray-200 border-blue-200 rounded-2xl w-20 hover:bg-gray-300"
        >
          -1
        </button>
      </div>
    </>
  );
};

export default CartCounter;
