class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]
  skip_before_action :authorize_request
  # GET /category
  def index
    @categories = Category.all
    json_response(@categories)
  end
  # POST /categories
  def create
    @category = Category.create!(category_params)
    json_response(@category, :created)
  end
  # GET /categories/:id
  def show
    json_response(@category)
  end
  # PUT /categories/:id
  def update
    @category.update(category_params)
    json_response(status: 'Success', message: 'category updated')
  end
  # DELETE /categories/:id
  def destroy
    @category.destroy
    json_response(status: 'Success', message: 'category deleted')
  end


  private

  def category_params
    # whitelist params
    params.permit(:name)
  end
  def set_category
    @category = Category.find(params[:id])
  end
end
