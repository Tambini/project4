class DoodlesController < ApplicationController
  before_action :set_category
  before_action :set_category_recipe, only: [:show, :update, :destroy]

  # GET /categories/:category_id/recipes
  def index
    @recipes = current_user.recipes
    puts "Showing all the recipes"
    json_response(@recipes)

  end
  # GET /categories/:category_id/recipes/:id
  def show
    puts "Showing all the doodles"
    json_response(@recipe)
  end
  # POST /categories/:category_id/recipes
  def create
    puts current_user
    @category = current_user.doodles.create!(doodle_params)
    puts @category
    # json_response(@category, :created)
    json_response(status: "SUCCESS", message: 'recipe created successfully.')
  end
  # PUT /categories/:category_id/recipes/:id
  def update
    @recipe.update(recipe_params)
    json_response(status: 'SUCCESS', message: 'recipe updated successfully.')
  end
  # DELETE /categories/:category_id/recipes/:id
  def destroy
    @recipe.destroy
    json_response(status: 'SUCCESS', message: 'recipe deleted successfully.')
  end
  private
  def doodle_params
    params.permit(:title, :path,  :category_id, :recipe, :current_user)
  end
  def set_category
    puts "calling set_category"
    @category = Category.find(params[:category_id])
  end
  def set_category_doodle
    if @category
      @recipe = @category.recipes.find_by!(id: params[:id])
    end
    @recipes = current_user.recipes

  end
end
