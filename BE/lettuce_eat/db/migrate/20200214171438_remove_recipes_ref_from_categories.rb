class RemoveRecipesRefFromCategories < ActiveRecord::Migration[6.0]
  def change
    remove_reference :categories, :recipes, index: true, foreign_key: true
  end
end
