import "./App.css";
import Counter from "./components/Counter";
import Accordion from "./components/Accordion";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    //Eğer ki dinamik olarak değişecek class'ların dışında sabit class'lar da varsa o zaman aşağıdaki
    //gibi back tick `` kullanımı yaparız. Aşağıda sabit class state-page olduğu için ve
    //ayrı ayrı hem dark'a hem de light'a yazmak istemediğimiz için bu şekilde backtick'ler içine yazdık.
    //state-page sabitken dinamik olan dark ve light'ı dolar ve süslü parantez içine yazdık.
    <div className={`state-page ${isDarkMode ? "dark" : "light"}`}>
      <h1>STATE(DURUM)</h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Açık Mod" : "Koyu Mod"}
      </button>

      <Counter />

      <Accordion
        title="Hangi teknolojiler kullanıldı?"
        text="Bu projeyi geliştirirken Javascript, React ve SCSS kullanıldı. Bu projeyi geliştirirken Javascript, React ve SCSS kullanıldı."
      />
      <Accordion title="Kaç gün sürdü?" text="Bu projenin yapımı 6 ay sürdü." />

      <Accordion title="Kaç kişilik ekip geliştirdi?" text="15 geliştirici." />
    </div>
  );
}

export default App;
