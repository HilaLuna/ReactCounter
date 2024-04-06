import { useState } from "react";

const Accordion = (prop) => {
  // accordion'un alt kısmı gözükecek mi? nin state'i
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="acc">
      <div>
        <h2>{prop.title}</h2>
        {/*
         * Buradaki koşul alanında her zaman state'teki boolean değeri terine çevirmek istiyoruz. Bunun için 
         2 yol izleyebiliriz: 
         1: isOpen === false ? true : false
         2: !isOpen - bu daha pratik
         */}
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "X" : "+"}</button>
      </div>

      {/* isOpen koşuluna bağlı olarak p etiketini ekrana bas. Bunu aşağıdaki gibi
koşullu renderlama ile yapabiliriz. Aşağıdaki koşullu renderlama'yı şu şekilde okuyabiliriz:
{isOpen === true && (p etiketinin içindekiler)} yani isOpen eğer true'ysa yani başlangıçta
o buton -çarpı butonu veya ∨ bu açıp kapatan buton- açıksa o zaman ekrana p'nin içindekileri bas.
Değilse zaten basmıyor.
        *alternatif: className'ine koşul vererek de benzer sonuç elde edilebilir.*/}

      <p className={isOpen === true && "active"}>{prop.text}</p>

      {/*
    <p className={isOpen === true && 'active}>
          Bu projeyi geliştirirken Javascript, React ve SCSS kullanıldı. Bu
          projeyi geliştirirken Javascript, React ve SCSS kullanıldı. Bu projeyi
          geliştirirken Javascript, React ve SCSS kullanıldı. Bu projeyi
          geliştirirken Javascript, React ve SCSS kullanıldı.
        </p>
        App.css'te de .acc p{display: none} kısmında display: none yaparız ama
        .active{display: block !important} display'ini block yaparız. !Burada !important dememizin sebebi de
        block olmasının daha önemli olduğunu vurgulamak yani her zaman block olsun demek.
     */}
    </div>
  );
};

export default Accordion;
