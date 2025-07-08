import Banner from "./Banner";
import Card from "./Card";
function App() {
  return (
    <div className="container-xl">
      <Banner />

      <div className="row">
        <Card name="Aman" age="10" city="Kota" bgcolor="red" />
        <Card name="Mahesh" age="17" city="Ajmer" bgcolor="green" />
        <Card name="Akshay" age="24" city="Sikar" bgcolor="yellow" />
      </div>
    </div>


  )
}

export default App; 