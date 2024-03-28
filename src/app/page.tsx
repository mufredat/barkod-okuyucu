"use client";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import Quagga from "quagga";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";

export default function Home() {
  const okuyucuRef = useRef(null);
  const router = useRouter();
  const [barcode, setBarcode] = useState("");

  useEffect(() => {
    if (okuyucuRef.current) {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: okuyucuRef.current,
            constraints: {
              width: 640,
              height: 480,
              facingMode: "environment",
            },
          },
          decoder: {
            readers: ["ean_reader"],
          },
        },
        function (err) {
          if (err) {
            console.error(err);
            return;
          }
          console.log("QuaggaJS çalışıyor.");
          Quagga.start();
        }
      );

      Quagga.onDetected((result) => {
        console.log(result);
        router.push("/product/" + result.codeResult.code);
        Quagga.stop();
      });
    }
    return () => {
      Quagga.stop();
    };
  }, [router, okuyucuRef]);
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div ref={okuyucuRef}></div>
      </main>
    </>
  );
}
