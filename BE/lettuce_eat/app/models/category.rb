class Category < ApplicationRecord
  has many :recipes, dependent: :destroy

  validates_presence_of :title
end
