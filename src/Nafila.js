import { useState } from 'react';
export default function Nafila() {
    const [rakaat, setRakaat] = useState(0);
    const [fatiha, setFatiha] = useState("Bismillah hirrahmanir rahim ... Alhamdulillahi rabbil alamin ... Ar rahmanir rahim ... Maliki yawmid din ... Iyyaka na'budu wa iyyaka nasta'in ... Ihdinas siratal mustaqim ... Siratal ladina an'amta alaihim ghairil maghdubi alaihim walad dholin ... Amin");
    let ayat = "";
    const allNafila = [];
    const [salam, setSalam] = useState(false);

    for (let i = 0; i < 4; i++) {
        allNafila.push(fatiha);
        if (rakaat < 2) {
            allNafila.push(ayat);


            for (let j = 0; j < 11; j++) {

                allNafila.push(ayat);

            }
            setRakaat(rakaat + 1);
        }
    }

    setSalam(rakaat === 3);
    return (
        <>
            <ul>
                {allNafila.map(el => {
                    return <li>{el}</li>
                })}
            </ul>
            <p>{salam ? 'Salam Alaykoum' : 'Allahu Akbar'}</p>
        </>
    );
}

