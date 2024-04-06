import { useState } from "react"; //React'in kendisinden gelen özellik, böyle özelliklere "hook" diyoruz.
//yani React'a tanımlı fonksiyonlar 'hook'lar
const Counter = () => {
  //useState'i bileşen içerisinde değişimi arayüzü etkileyecek
  //olan değerleri tutmak için kullanırız.
  //useState() çağırdığımız zaman dizi içerisinde iki değer döndürür
  //1.değer: tuttuğumuz veriye denk geliyor.
  //2.değer: tuttuğumuz veriyi değiştirmeye yarayan fonksiyon.
  const [count, setCount] = useState(0);
  //buna yani useState'e İng'de initial state yani ilk değer deniyor.

  /* şimdi normalde javascriptte öğrendiklerimize dayanarak ekranda sayacın
 değerini artırmak için şunları yapabiliriz:
 *const'ın altına let count = 0 yazıp,
 * span arasındaki sayı yerine count yazarak ve buttona onClick özelliği 
 vererek console'a yazdırdığımızda console'da çalıştığını görürüz.
 * ve hemen altına da count++ dediğimizde console'da artı butonuna bastığımızda
 sayıların bir bir arttığını görürüz ama ekranda butonlar arasındaki sayıda bir
 değişiklik olmuyor. Yani bu öğrendiğimiz şey bu sorunu çözmüyor. 
 * o nedenle React'taki state bu gibi durumlara çözüm olacak.  
 */

  //! aşağıda setCount yerine count=0 diye o sabit değişkeni değiştiremeyiz.
  return (
    <div className="counter">
      <h1>Sayaç</h1>

      <div>
        <button onClick={() => setCount(0)}>Sıfırla</button>

        <button
          disabled={count === 0 && true} //bunu false yaparsak opacity'si kalkıyor ve tekrar çalışıyor. true yaparsak butonun opasitesi oluyor ve çalışmıyor.
          onClick={() => setCount(count - 1)} //bu süslü parantezleri kullanmadan da tek satırda yazabiliriz bu fonksiyonu:
          //!onClick={()=> setCount(count-1)} gibi
        >
          Eksi
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            //state'te tutulan veriyi 1 artır
            setCount(count + 1); //setCount, count değişkenini güncellemeye yarayan fonksiyonumuz
          }}
        >
          Artı
        </button>
      </div>
    </div>
  );
};

export default Counter;
