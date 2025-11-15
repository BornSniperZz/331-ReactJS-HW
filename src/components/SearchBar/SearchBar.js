import React, {useState} from "react";
import "./SearchBar.css"

const SearchBar = ( {products} ) => {
    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase())
    })

    const shouldDisplayButton = searchValue.length > 0

    return (
        <div>
            <div id="searchBar">
                <input type="text" value={searchValue} onChange={handleInputChange}></input>
                {/* {shouldDisplayButton && <button id = "clearButton" onClick={handleClearClick}>clear</button>} */}
                <button id = "clearButton" onClick={handleClearClick}>Clear</button>
            </div>

            <div className="productGrid">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="productCard">
                        <img src={product.image} alt={product.title}></img>
                        <h4>{product.title}</h4>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SearchBar