import Card from "./Card"

function App() {
    return (
        <div className="container-xxl">
            <div className="row">
                <Card star="2" image="https://cdn.dummyjson.com/recipe-images/1.webp" />
                <Card title="Pasta" star="3" image="https://cdn.dummyjson.com/recipe-images/4.webp" />
                <Card title="Tomato " star="5" image="https://cdn.dummyjson.com/recipe-images/7.webp" />
            </div>

        </div>

    )
}

export default App;