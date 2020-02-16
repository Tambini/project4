class RemoveCreatedByColumnFromRecipes < ActiveRecord::Migration[6.0]
  def change
    remove_column :recipes, :created_by, :string
  end
end
