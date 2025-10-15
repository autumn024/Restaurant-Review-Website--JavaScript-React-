import RestaurantTile from "../components/RestaurantTile"; 
import "bootstrap/dist/css/bootstrap.min.css";

const Breakfast = () => {
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
        }}>Breakfast Favorites</h1>

      <RestaurantTile
        title="Victor's 1959 Cafe"
        description="Located in the heart of Minneapolis, this Cuban-inspired restaurant serves breakfast and lunch. There's always a wait—whether it's a weekend rush or a quiet Wednesday morning."
        favorite="Cuban Hash – Seasoned ground beef simmered in creole sauce with potatoes, green olives, raisins, and capers. Served with two eggs, sweet plantains, white rice, and toast."
        imageUrl="https://popmenucloud.com/cdn-cgi/image/width%3D2880%2Cheight%3D2880%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/lvutyghz/242e877c-e142-4d57-9bc7-e10843ec1a98.jpg"
        imageLeft={true}
      />

      <RestaurantTile
        title="Forget Me Not Cafe"
        description="This family-oriented diner in Buffalo serves breakfast and lunch with fresh, in-house baked bread. Named Best Diner in MN in 2023."
        favorite="Minnesota Wild Rice Skillet – Wild rice, sautéed mushrooms, crumbled sausage, and two over-easy eggs atop breakfast potatoes, finished with hollandaise."
        imageUrl="https://images.getbento.com/accounts/310270ef5c083073597e24b3e97cf3bc/media/images/3238Forget_Me_Not_Cafe_Menu-15_websize.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&h=600"
        imageLeft={false}
      />

      <RestaurantTile
        title="Pegs Countryside Cafe"
        description="This unique place is located in Medina with a cozy homestlye cafe feel. The cafe itself is
           small and cozy but exceeds all expecations. Most cafes serve classic breakfast diner food and this mom and
            pop takes it to the next level with it's diverse menu."
        favorite="Banana Bread French Toast - 3 slices of banana bread soaked in french toast wash and served with 
            two eggs and meat of choice. "
        imageUrl="https://heavytable.com/wp-content/uploads/2009/04/ht_countryside_exterior.jpg"
        imageLeft={true}
      />

      <RestaurantTile
        title="Black Coffee and Waffle Bar"
        description="This coffee and waffle bar is located in both Minneapolis and St. Paul. Well known for their speciality waffles 
            they also bring a coffee and study spot feel. During the week it is common to see those studying or working and
            on the weekends it is common to find enjoying conversation or playing a board game."
        favorite="Strawberry Cheesecake Waffle - cheesecake, strawberries, graham crackers, whipped cream "
        imageUrl="https://static.wixstatic.com/media/cc370d_45b24889d9b64763be8cf04505a4a1a2~mv2.jpg/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.jpg"
        imageLeft={false}
      />
</div>
  )
};

export default Breakfast;