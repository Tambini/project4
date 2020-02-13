class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :update, :destroy]
  skip_before_action :authorize_request

  # GET /categories/:category_id/recipes
  def index
    @recipes = Recipe.all
    json_response(@recipes)
  end

  def private_index
    # @recipes = current_user.recipes
    # json_response(@recipes)
    puts "hello"
  end

  # POST /categories/:category_id/recipes
  def create
    puts current_user
    @recipe = current_user.recipes.create!(recipe_params)
    json_response(@recipe, :created)
  end

  # GET /categories/:category_id/recipes/:id
  def show
    json_response(@recipe)
  end

  # PUT /categories/:category_id/recipes/:id
  def update
    @recipe.update(recipe_params)
    json_response(status: 'SUCCESS', message: 'recipe updated')
  end

  # DELETE /categories/:category_id/recipes/:id
  def destroy
    @recipe.destroy
    json_response(status: 'SUCCESS', message: 'recipe deleted')
  end

  private

  def recipe_params
    params.permit(:dish_name, :image, :time, :directions, :created_by, :ingredients)
  end

  def set_recipe
    @recipe = Recipe.find(params[:id])
  end




end
