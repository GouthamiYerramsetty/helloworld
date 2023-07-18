const Title = () =>
(
    <h1 className="head">Namaste React</h1>
);

const Title2 = () => {
    return <h1>hai everyone</h1>
}

//here Title1 is one way of writing the arrow function without return keyword and Title2 is another way of arrow function

const Hello2Component = () => (
    <div id = "head">
        <Title/>
        <Title2/>
        <h1>Namaste react2</h1>
    </div>
);

export default Hello2Component;