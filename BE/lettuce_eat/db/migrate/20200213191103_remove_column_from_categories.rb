class RemoveColumnFromCategories < ActiveRecord::Migration[6.0]
  def change
    remove_column :categories, :ingredients
    rename_column :categories, :category, :title

  end
end
