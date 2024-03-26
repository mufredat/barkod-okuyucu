'use client'
import styles from "./page.module.css";
import {useEffect, useState} from "react";
import Quagga from 'quagga';
import {useRouter} from 'next/navigation'




export default function Home() {
    const router = useRouter()

    const [barcode, setBarcode] = useState('')

    useEffect(()=>{
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: document.querySelector("#barcode-scanner"),
                constraints: {
                    width: 640,
                    height: 480,
                    facingMode: "environment"
                }
            },
            decoder: {
                readers: ["ean_reader"]
            }
        }, function(err) {
            if (err) {
                console.error(err);
                return;
            }
            console.log("QuaggaJS çalışıyor.");
            Quagga.start();
        });

        Quagga.onDetected((result)=>{
            console.log(result)
            router.push('/product/' + result.codeResult.code )
            Quagga.stop()
        })

        return ()=>{
            Quagga.stop()
        }
    },[router])
  return (
      <main className={styles.main}>
          <div id="barcode-scanner"></div>
      </main>
  );
}
