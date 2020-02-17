class RecipesController < ApplicationController
  before_action :set_user, only: [:create, :index]
  before_action :set_category, only: [:show, :update, :destroy, :create]
  # before_action :set_recipe_category, only: [:personal_index, :recipes_by_category, :show, :update, :destroy, :create]
  skip_before_action :authorize_request, only: [:all_recipes :index]

  # GET /categories/:category_id/recipes
  def index
    @category = Category.find(params[:category_id])
    puts @category.id
    @recipes = Recipe.where(category_id: @category)
    json_response(@category.recipes)

  end

  # GET /categories/:category_id/recipes
  def personal_recipes
    @user = User.find(params[:user_id])
    puts @user.id
    @recipes = Recipe.where(user_id: @user)
    json_response(@recipes)
  end

  # GET /categories/:category_id/recipes/:id(.
  def all_recipes
    @recipes = Recipe.all
    json_response(@recipes)
  end

  # POST /categories/:category_id/recipes
  def create
    @recipe = @category.recipes.create(recipe_params)
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
    @category = Category.find(params[:category_id])
    @recipe.delete
    json_response(status: 'Success', message: 'recipe deleted')
  end

  private

  def recipe_params
    params.permit(:dish_name, :image, :time, :directions, :user_id, :ingredients, :category_id)
  end

  def set_category
    @category = Category.find(params[:category_id])
  end

  def set_user
    @user = User.find_by!(params[:id])
  end

end




