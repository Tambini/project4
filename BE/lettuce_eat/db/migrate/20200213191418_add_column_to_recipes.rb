class AddColumnToRecipes < ActiveRecord::Migration[6.0]
  def change
    add_column :recipes, :ingredients, :string, array: true
  end
end

