import RestaurantTile from "../components/RestaurantTile"; 
import "bootstrap/dist/css/bootstrap.min.css";

const Dinner = () => {
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
        }}>Dinner Favorites</h1>
      

<RestaurantTile
        title="Zorbaz"
        description="Located on only lakes in Minnesota this funky bar and hangout spot serves mexican and pizza.  This place makes boating on the lake that much more enjoyable. All locations have 
            spots to dock your boat, play volleyball on the beach, listen to live music, and enjoy food and drinks. This always will be
            one of my favorite resturants! Oh and every letter s is replaced with a z in the joint! "
        favorite="Thai Pie Pizza - Zorbaz BBQ peanut zauce, zmoked bacon, red onionz, pineapple, banana pepperz, cilantro"
        imageUrl="https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/onqkmlsd/c8783921-2b3c-42d9-8fc1-0b6dda22346f.jpg"
        imageLeft={true}
      />

<RestaurantTile
        title="The Hen & The Hog"
        description="This farm to table place is located in Albertville. They have since expanded from their 4 table resturant
            to a full bar. Although it has a samll menu all items bring lots of flavor. Their specials are what makes this place
            even better."
        favorite=" H&H Grilled Cheese - Gruyere & Sharp White Cheddar Cheese, Seared Pork Belly, Cider Poached Apples and Cranberry Gastrique on Parmesan Crusted Sourdough"
        imageUrl="https://content.app-sources.com/s/5790235094735412/uploads/Images/HENHOG_43-2232094.jpg?format=webp"
        imageLeft={false}
      />

<RestaurantTile
        title="Main Street Farmer Eatery"
        description="Located in St. Michael this farm to table family owned restaurant brings a fine dining experience to a small town. The
            service is unmatched. The menu is on day to day and seasonal basis. They recieve fresh vegatbles and cuts of meat everyday
            and once it's gone it's gone. This place is the perfect place to expierence culinary masterpieces. "
        favorite="Blue Crab & Asparagus Bucatini - Wild caught blue crab, creamy pecorino romano sauce, sauteed asparagus, parsley oil & basil crisp."
        imageUrl="https://bloximages.chicago2.vip.townnews.com/hometownsource.com/content/tncms/assets/v3/editorial/6/27/627cebd8-efc0-11eb-a25c-bfe28233aa5a/610184fb2cd61.image.jpg?resize=667%2C500"
        imageLeft={true}
      />

<RestaurantTile
        title="Osakis Pub"
        description="This bar and grille located in Osakis is owned by my dad Eli Martin. I may be a bit biased but for a small town
            bar it is done right. My dad smokes the meat in house. Their daily drink and food specials and weekly events make this bar fun. A little 
            hole in the wall bar is just what everyone needs!"
        favorite="The Ultimate Cowboy Smash Burger "
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8WEfZ113bmWwWf0RS4_HdIiwcK77EomUy7Q&s"
        imageLeft={false}
      />

</div>
  )
}

export default Dinner;