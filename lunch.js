import RestaurantTile from "../components/RestaurantTile";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Lunch = () => {
  return (
    <div className="container-fluid mt-3">
      <h1 style={{
        textAlign: "center",
        fontFamily: "'Playfair Display', serif",
        color: "#8b3e3e",
        fontSize: "2.5rem",
        fontWeight: "bold",
        margin: "40px 0",
        letterSpacing: "1px",
        }}
        >Lunch Favorites</h1>
      

<RestaurantTile
        title="Cafe Latte"
        description="This cafeteria style, cake shop, and pizza and wine restaurant is located in St. Paul. It's hard to describe such a place like this
            it is unique and comforting. You can find many stopping by on thier lunch break, catching up with a friend, 
            or enjoying a glass of wine and pizza in the evening. They serve lunch and dinner but are known for their cakes. They truly have everything."
        favorite="Toffee Chocolate Chunk Cheesecake"
        imageUrl="https://lh3.googleusercontent.com/p/AF1QipOWRQG8VKXMa2o0LdRlz5S-XewvdwzR9RkJ11_o=w554-h368-k-no"
        imageLeft={true}
      />

<RestaurantTile
        title="Good Life Cafe"
        description="You may have seen a good life shirt but did you know they had a cafe? Located in a northern cabin town 
            Park Rapids this food is considered comfot food in my book. They serve both lunch and dinner and it is located downtown Park Rapids making it 
            the perfect place to stop and eat at after spending the day shopping in the lake town boutiques."
        favorite="Pulled Pork & Apple - Whiskey-BBQ pulled pork, warm apple chutney & swiss cheese on ciabatta roll "
        imageUrl="https://www.midwestliving.com/thmb/pzucEJffGBGvMQOygKgSPYYGqho=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Good20Life20Cafe-7-9a4718b0eb7b405384e08f9f771ae51c.jpg"
        imageLeft={false}
      />

<RestaurantTile
        title="BJs Deli"
        description="Located just a few blocks from my house is a traditional deli sandwhich spot. This isn't your typical
            subway or jimmy johns. This fresh cut meat, large array of breads, and other items like soup and pie make 
            this place worth it! A great place to sit down and enjoy a sandwhich on their patio with a speciality soda and 
            a slice of pie. "
        favorite="Roast Beef Sandwhich - cranberry wildrice bread, mayo, onions, spinach, bannana peppers, and olives"
        imageUrl="https://www.exploreminnesota.com/sites/default/files/styles/listing_slideshow/public/listing_images/aa4cbc5fc4116b27689ce76a1293da415dd3342d_19.jpg.jpg?itok=9zyQBXoU"
        imageLeft={true}
      />

<RestaurantTile
        title="Grace Thai Kitchen"
        description="If you are a sucker for thai food this place will satisfy the tastebuds. They offer traditional food truck thai 
           food with extra flavor. The portions are well worth the money and the options are endless. This place
            is a personal go to for me!"
        favorite="Fresh Spring Rolls - Ground chicken and shrimp fresh spring rolls with lettuce, carrot, mint, cilantro, and noodles."
        imageUrl="https://menufyproduction.imgix.net/638612540192229965+1522152.png?auto=compress,format&fit=max&w=1024&h=1024"
        imageLeft={false}
      />

</div>
  )
}

export default Lunch;
