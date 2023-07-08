import Card from "./Card";
const Tours=({tours,removeTour})=>{
   return(
    <div>
        <div className="container">
        {/* <h2 className="heading">Plan With Tarun</h2> */}
{/* 
        using chat gpt  */}

<h1 class="heading">
        <span class="animated-heading">
            <span>P</span>
            <span>l</span>
            <span>a</span>
            <span>n</span>
            <span> </span>
            <span>W</span>
            <span>i</span>
            <span>t</span>
            <span>h</span>
            <span> </span>
            <span>T</span>
            <span>a</span>
            <span>r</span>
            <span>u</span>
            <span>n</span>
        </span>
    </h1>
        </div>

        <div className="cards">
            {
                tours.map((tour)=>{
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                })
            }
        </div>
    </div>
   )
}

export default Tours;