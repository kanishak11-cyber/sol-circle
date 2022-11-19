import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import ReactLoading from 'react-loading';
type Event = "connect" | "disconnect";

interface Phantom {
  on: (event: Event, callback: () => void) => void;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

const ConnectToPhantom = () => {
  const [phantom, setPhantom] = useState<Phantom | any>(null);

  useEffect(() => {
    if ("solana" in window) {
      setPhantom(window["solana"]);
    }
  }, []);

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    phantom?.on("connect", () => {
      setConnected(true);
    });

    phantom?.on("disconnect", () => {
      setConnected(false);
    });
  }, [phantom]);

  const connectHandler = () => {
    phantom?.connect();
  };

  const disconnectHandler = () => {
    phantom?.disconnect();
  };

  if (phantom) {
    if (connected) {
      return (
        // <ReactLoading type={bubble} color={red} height={667} width={375} />

        <Link href='/Onboard'>
        <button
          onClick={disconnectHandler}
          className="py-2 px-4 border border-purple-700 rounded-md text-sm font-medium text-purple-700 whitespace-nowrap hover:bg-purple-200"
        >
          Dash board
        </button>
        </Link>
      );
    }
    // if(!connected) {
    return (

      <button
        onClick={connectHandler}
        className="bg-purple-500 py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white whitespace-nowrap hover:bg-opacity-75"
      >
        Connect to Phantom
      </button>
    );
//   }
  }
  return (
    <Link
      href="https://phantom.app/"
      target="_blank"
      className="bg-purple-500 px-4 py-2 border border-transparent rounded-md text-base font-medium text-white"
    >
      Get Phantom
    </Link>
  );
};

export default ConnectToPhantom;
