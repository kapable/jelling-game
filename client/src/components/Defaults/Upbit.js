import React, { useState, useEffect, useRef } from "react";

function Upbit() {
    const [currencies, setcurrencies] = useState([]);
    const [pair, setpair] = useState("");
    const [price, setprice] = useState("0.00");
    const ws = useRef(null);

    let first = useRef(false);
    const url = "wss://api.upbit.com/websocket/v1";
    
    useEffect(() => {
        const ws = new WebSocket('wss://api.upbit.com/websocket/v1');
        let msg = [{ticket:"test"}, {type:"ticker",codes: ["KRW-BTC"],isOnlyRealtime: true}]
        let jsonMsg = JSON.stringify(msg);
        ws.onopen = () => {
        ws.send(jsonMsg,
        );
        ws.onmessage = async e => {
            const { data } = e;
            const text = await new Response(data).json();
            setprice(text.trade_price);
        }
    };
        // let pairs = [];
        // const apiCall = async () => {
        //     await fetch('https://api.upbit.com/v1/market/all')
        //     .then((res) => res.json())
        //     .then((data) => (pairs = data));

        // }
        // apiCall();
        
    }, [])
    
        
    return (
        <div>
            "Upbit" {price}
        </div>
    )
}

export default Upbit
