# State'in ortaya çıkma noktası

React uygulamalarında bileşen içerisinde kullanıcı etkileşimi sonucu ara yüz üzerinde değişim olmasını isteyebiliriz. Örn.butona tıkladığımızda tema değişimi. Yani bir etkileşimle, bir koşula göre tetiklenen işlemler.

# State

State bileşen içerisinde verileri saklamaya ve yönetmeye yarayan yapıya verilen isimdir. Örn. bir sayaç yapıyoruz + butonuna basınca arta, - butonuna basınca azalan bir işlem. Tutmamız gereken yapı dinamik olarak değişen veri sayacın sayısı.
State'in değeri her değiştiğinde bileşen otomatik olarak tekrardan render olur (yani return satırı tekrar çalışır). Bu sayede state'e bağlı olarak görünümü değişecek arayüz yapıları güncellenmiş olur.

Eğer ki tuttuğumuz değişkenin değerinde bir değişim olduğunda arayüzde bir değişim olması gerekiyorsa state'i tercih ederiz.

State doğrudan değiştirilemez. Değiştirmek için setMethod'u kullanılır.

useState(x): useState'i kullanırken x yazılan yere Initial State yani başlangıç state'i denir. State'in bileşen ekrana basılınca sahip olacağı ilk değere denk geliyor. Yani sayfayı yenilediğimiz anda sahip olacağı değer.
# ReactCounter
