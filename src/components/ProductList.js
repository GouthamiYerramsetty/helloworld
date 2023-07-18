import Products from "./Products";

const ProductList = () => {
        return(
            <div>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>PID</th>
                            <th>PName</th>
                            <th>Price</th>
                        </tr>

                    </thead>
                    <tbody>
                     <Products pid = "101" pname = "bike" price = "20000" />
                     <Products pid = "102" pname = "car" price = "100000" />
                     <Products pid = "103" pname = "scooty" price = "15000" />
                 </tbody>
                </table>
                 </div>
        )

}
export default ProductList;
