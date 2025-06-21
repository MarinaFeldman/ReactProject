import Filter from "./Filter";

const AllCategories =() => {
    return(
        <div >
        <h1>SOUVENIRS</h1>
<div className="souvenirBox">
        {['ALL','SPAIN','ITALIA','GREECE','ALBANIA', 'PORTUGAL']

        .map(category => <Filter key={category}
        category={category} />)
        }
</div>      
        </div>
    )
}

export default AllCategories;