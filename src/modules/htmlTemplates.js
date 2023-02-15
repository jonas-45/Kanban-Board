const comment = (meal) => `<section class="com-section">
<div class="comment-section">
  <div class="image">
    <img
      src="${meal.strMealThumb}"
      alt="${meal.strMeal}"
    />
    <div class="close-btn">
        <i class="fa fa-times" aria-hidden="true"></i>
    </div>
  </div>
  <div class="food-name">
    <h2>${meal.strMeal}</h2>
  </div>
  <div class="food-recipe">
    <h3>Ingredients</h3>
    <div class="ingredients">
     ${this.getIngredients(meal)}
    </div>
  </div>
  <div class="description">
    <p>${meal.strInstructions}</p>
  </div>
  <div class="comments">
    <h3>Comments<span>5</span></h3>
    <ul>
      <li>Felix</li>
      <li>Felix lancelot</li>
      <li>Felix</li>
    </ul>
  </div>
  <form class="form" id="form">
    <div class="add-comment">Add a comment</div>
    <input type="text" placeholder="Your name " />
    <textarea placeholder="Your insights" rows="5" cols="20"></textarea>
    <button type="submit" class="btn">Comments</button>
  </form>
</div>
</section>`

export default comment;