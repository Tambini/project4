class RecipesController < ApplicationController
  before_action :set_user, only: [:create, :update, :destroy, :personal_recipes]
  before_action :set_category, only: [:show, :update, :destroy, :create]
  skip_before_action :authorize_request, only: [:all_recipes, :index, :show]

  # GET /categories/:category_id/recipes
  def index
    @category = Category.find(params[:category_id])
    puts @category.id
    @recipes = Recipe.where(category_id: @category)
    json_response(@category.recipes)

  end

  # GET /user/recipes
  def personal_recipes
    @recipes = Recipe.where(user_id: current_user.id)
  
    json_response(@recipes)
  end

  # GET /categories/:category_id/recipes/:id(.
  def all_recipes
    @recipes = Recipe.all
    json_response(@recipes)
  end

  

  # POST /categories/:category_id/recipes
  def create
    @recipe = @category.recipes.create(recipe_params.merge(user_id: current_user.id))
    json_response(@recipe)
  end

  # GET /categories/:category_id/recipes/:id
  def show
    @recipe = Recipe.find(params[:id])
    json_response(@recipe)
  end

  # PUT /categories/:category_id/recipes/:id
  def update
    @recipe =Recipe.find(params[:id])
    @recipe.update(recipe_params)
    json_response(status: 'Success', message: 'recipe updated')
  end

  # DELETE /categories/:category_id/recipes/:id
  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    json_response(status: 'Success', message: 'recipe deleted')
  end

  private

  def recipe_params
    params.permit(:dish_name, :image, :time, :directions, :ingredients, :category_id, :id)
  end

  def set_category
    @category = Category.find(params[:category_id])
  end

  def set_user
    @user = User.find_by!(params[:id])
  end

end




