import { useEffect, useState } from "react";
// import CardProduct from "./components/CardProduct";

function App() {
  const [dataClothes, setDataClothes] = useState([]);
  useEffect(() => {
    fetch(
      `https://islamic-apparel-ej7st1ybw-kangzbredz04.vercel.app/api/muslim_clothing`
    )
      .then((res) => res.json())
      .then((clothes) => setDataClothes(clothes));
  }, []);

  console.log(dataClothes);
  return (
    <>
      {/* <div>
        {bajuMuslim.map((baju) => (
          <CardProduct
            key={baju.nama}
            nama={baju.nama}
            deskripsi={baju.deskripsi}
            harga={baju.harga}
            kategori={baju.kategori}
            ukuran={baju.ukuran}
            warna={baju.warna}
          />
        ))}
      </div> */}
    </>
  );
}

export default App;
