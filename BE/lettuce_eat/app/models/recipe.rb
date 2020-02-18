class Recipe < ApplicationRecord
  belongs_to :category
  belongs_to :user, :foreign_key => :category_id

  validates_presence_of :dish_name, :ingredients, :directions
end
